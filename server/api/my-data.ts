import sql from 'mssql';


    export default defineEventHandler(async (event) => {
      const config = {
      user: 'pean3',
      password: 'admin@intran3',
      server: 'N3-INTRANET', // e.g., 'localhost', '192.168.1.100'
      database: 'dsin',
      options: {
        encrypt: false, // For Azure SQL Database
        trustServerCertificate: true // Change to false for production
      }
    };
      try {
        // Connect to SQL Server
      const pool = await sql.connect(config)

    // Query example
    const result = await pool.request().query('SELECT * FROM userdsin')
    return result.recordset

      } catch (err:any) {
        console.error('SQL error', err)
    throw createError({
      statusCode: 500,
      statusMessage: 'Database query failed'
    })
      }
      finally {
        // @ts-ignore
        sql.close()
      }
    });

