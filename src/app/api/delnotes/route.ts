import { NextRequest, NextResponse } from "next/server";

import { responseStatus } from "@/utils/interfaces/api";
import Connect from "@/utils/database/dbConnect";

export async function DELETE(request: NextRequest) {
  const reqData = await request.json();
  const delid = reqData.id;
  console.error("got id", delid);
  // delete notes
  const connection = await Connect();
  try {
    await connection?.query(`DELETE FROM notes WHERE id = ?;`, [delid])
    .then(() => {
      console.error("deleted successfully");
    })
    .catch(err => {
      console.error(err);
    })
  } catch (err) {
    console.error(err);
  } finally {
    connection?.end();
    return NextResponse.json({});
  }
}
