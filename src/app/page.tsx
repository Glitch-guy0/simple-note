"use client";


import Header from "@/components/Header";
import ListNotes from "@/components/ListNotes";
import Prompt from "@/components/Prompt";
import Contain from "@/components/ui/Contain";



export default function rootPage() {

  return (
    <div className="w-full h-full bg-zinc-900 text-white px-4 py-2 overflow-y-scroll">
      <Contain>
        <Header />
        <Prompt />
        <ListNotes />
      </Contain>
    </div>
  );
}
