

import { useState } from "react";

import { note } from "@/utils/interfaces/note";

export default function Prompt() {
  const [data, setData] = useState({
    messsage: "",
    createdAt: 0,
  } satisfies note);

   function submitHandler() {
    try {
      if (!data.messsage) return;
      setData({ ...data, createdAt: Date.now() });
      console.log(data)// replace with axios call
      setData({...data, messsage: ""})
    } catch (err) {
      console.error(err);
      console.error("something went wrong!!");
    }
  }
  return (
    <div className="relative group/extend ">
      <div
        className=" relative ring-1 ring-slate-800 group-focus-within/extend:ring-blue-800 rounded-xl overflow-hidden p-2 gap-2
          flex justify-end 
          group/extend
          group-focus-within/extend:flex-wrap"
      >
        <textarea
          className="outline-none resize-none bg-transparent w-full group-focus-within/extend:h-[30vh] md:group-focus-within/extend:h-[20vh]"
          placeholder="Start typing here"
          onChange={(e) => setData({ ...data, messsage: e.target.value })}
          value={data.messsage}
        />
        <button
          className="px-4 py-2 bg-blue-600 rounded"
          onClick={() => submitHandler()}
        >
          Save
        </button>
      </div>
    </div>
  );
}
