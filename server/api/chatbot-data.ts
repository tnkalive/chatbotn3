import { getDb } from '../utils/db'

export default defineEventHandler(async () => {
  const db = await getDb()

  // Query SQL Server
  const result = await db.request().query('SELECT TOP 10 * FROM userdsin')

  // Return data to frontend
  return result.recordset
})
