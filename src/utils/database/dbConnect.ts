import mariadb from 'mariadb';


export default async function Connect(){
    const pool = mariadb.createPool({
        host: "localhost",
        user: 'user',
        password: 'password',
        database: 'notes'
    })


    try{
        const connection = await pool.getConnection();
        return connection;
    }
    catch(err){
        console.error("db: something went wrong!!");
    }
}