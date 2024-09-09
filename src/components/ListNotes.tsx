"use client";
import { useState } from "react";

import NoNotes from "@/components/ui/NoNotes";
import Card from "@/components/Card";
import { notes } from "@/utils/interfaces/api";
import { TbReload } from "react-icons/tb";
import axios from "axios";
export default function ListNotes() {
  const [notes, setNotes] = useState<notes>([]);

  async function getNotes() {
    try {
      const res = await axios.get("/api/getnotes");
      const resData = res.data as notes;
      setNotes(resData);
    } catch (err) {
      console.error("something went wrong!!");
    }
  }

  return (
    <>
      <div id="reload-button" className="mt-8">
        <div
          className="text-zinc-600 px-4 py-2 rounded flex items-center justify-end cursor-pointer"
          onClick={() => getNotes()}
        >
          <TbReload className="text-xl mr-2" /> Reload
        </div>
      </div>
      <div id="list-cards" className="gap-4 flex flex-col mt-8">
        {notes.length > 0 ? (
          notes.map((note) => (
            <Card
              key={note.createdAt}
              message={note.message}
              createdAt={note.createdAt}
            />
          ))
        ) : (
          <NoNotes />
        )}
      </div>
    </>
  );
}
