"use client";
import { useState } from "react";

import NoNotes from "@/components/ui/NoNotes";
import Card from "@/components/Card";
import { notes } from "@/utils/interfaces/api";
import { TbReload } from "react-icons/tb";
import axios from "axios";
import toast from "react-hot-toast";
export default function ListNotes() {
  const [notes, setNotes] = useState<notes>([]);

  async function getNotes() {
    try {
      const res = await axios.get("/api/getnotes");
      const resData = await res.data as notes;
      if(resData){
        toast('Reloaded Successfully', {
          style: {
            background: '#03C03C',
            color: 'white',
            fontWeight: 'bold'
          }
        });
      }
      setNotes(resData);
    } catch (err) {
      console.error("something went wrong!!");
      toast('Something went wrong', {
        style: {
          background: '#DC143C',
          color: 'white',
          fontWeight: 'bold'
        }
      });
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
              key={note.id}
              message={note.message}
              createdAt={note.createdAt}
              id = {note.id}
            />
          ))
        ) : (
          <NoNotes />
        )}
      </div>
    </>
  );
}
