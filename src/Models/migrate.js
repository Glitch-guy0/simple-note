import Connect from "@/utils/database/dbConnect";

export default async function migrate() {
  const connection = await Connect();
  try {

    
    await connection?.query("CREATE TABLE notes (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,message VARCHAR(255) NOT NULL,createdAt INT NOT NULL);")
    .then(value => {
        for(const row of value) {
            console.log(row);
        }
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
