"use client";

import { useState } from "react";

import { note } from "@/utils/interfaces/note";
import axios from "axios";
import { responseStatus } from "@/utils/interfaces/api";
import toast from "react-hot-toast";

export default function Prompt() {
  const [data, setData] = useState({
    id: 0,
    message: "",
    createdAt: 0,
  } satisfies note);

  async function submitHandler() {
    try {
      if (!data.message) return;
      const res = await axios.put("/api/newnote", data);
      // response data from api
      const resData = await res.data as responseStatus;
      if(resData.status){
        toast('Added Successfully\nReload to see changes', {
          style: {
            background: '#03C03C',
            color: 'white',
            fontWeight: 'bold'
          }
        });
      }
      setData({...data, message: "", createdAt: 0 });
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
          onChange={(e) => setData({...data,message: e.target.value, createdAt: Date.now() })}
          value={data.message}
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
