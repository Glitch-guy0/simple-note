"use client";

import Card from "@/components/Card";
import Header from "@/components/Header";
import Prompt from "@/components/Prompt";
import Contain from "@/components/ui/Contain";
import NoNotes from "@/components/ui/NoNotes";
import { useState } from "react";



export default function rootPage() {
  const [notes, setNotes] = useState([]);

  return (
    <div className="w-full h-full bg-zinc-900 text-white px-4 py-2 overflow-y-scroll">
      <Contain>
        <Header />
        <Prompt />

        <div id="list-cards" className="gap-4 flex flex-col mt-8">
          {notes.length ? "yeah there are notes" : <NoNotes />}
        </div>
      </Contain>
    </div>
  );
}
