import Connect from "@/utils/database/dbConnect";

/**
 * Creates the notes table in the database, if it does not already exist
 * It is recommended to run this function once when setting up the database
 * It will print a success message to the console if the migration is successful
 * If the migration fails, it will print an error message to the console
 * After executing the migration, it will exit the process
 * @returns {Promise<void>}
 */
export default async function migrate() {
  const connection = await Connect();
  try {

    
    await connection?.query("CREATE TABLE notes (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,message VARCHAR(255) NOT NULL,createdAt BIGINT NOT NULL);")
    .then(value => {
        console.log('migration completed')
    })
    .catch(err => {
        console.error(err);
    })

  } catch (err) {
    console.log("something went wrong!!");
  } finally {
    connection?.end();
    process.exit(0);
  }
}

migrate();
