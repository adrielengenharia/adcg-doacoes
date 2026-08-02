require('dotenv').config({ path: '.env.local' });
const { sql } = require('@vercel/postgres');

async function resetDB() {
  try {
    await sql`
      UPDATE progress 
      SET collected_amount = 0.00
      WHERE month = 'Agosto';
    `;
    console.log("Banco de dados zerado!");
  } catch (error) {
    console.error("Erro:", error);
  }
}

resetDB();
