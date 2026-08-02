require('dotenv').config({ path: '.env.local' });
const { sql } = require('@vercel/postgres');

async function initDB() {
  try {
    console.log("Iniciando criação da tabela...");
    await sql`
      CREATE TABLE IF NOT EXISTS progress (
        month VARCHAR(50) PRIMARY KEY,
        collected_amount NUMERIC(10, 2) NOT NULL DEFAULT 0.00
      );
    `;
    console.log("Tabela criada!");

    // Inserir o valor inicial
    await sql`
      INSERT INTO progress (month, collected_amount)
      VALUES ('Agosto', 850.00)
      ON CONFLICT (month) DO NOTHING;
    `;
    console.log("Valor inicial inserido!");
    
  } catch (error) {
    console.error("Erro:", error);
  }
}

initDB();
