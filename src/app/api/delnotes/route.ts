import { NextRequest, NextResponse } from "next/server";

import { responseStatus } from "@/utils/interfaces/api";
import Connect from "@/utils/database/dbConnect";

/**
 * Handles deleting a note by id
 * @param {NextRequest} request - The request to delete a note
 * @returns {NextResponse} - An empty response
 */
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
