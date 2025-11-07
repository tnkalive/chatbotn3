import sql, { ConnectionPool } from 'mssql'

let pool: ConnectionPool | null = null


export async function getDb() {
  if (pool) return pool

  const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER!,
    database: process.env.DB_DATABASE,
    options: {
      encrypt: false,
      trustServerCertificate: true,
    },
  }

  pool = await sql.connect(config)
  return pool
}
