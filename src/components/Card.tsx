import axios from "axios";
import moment from "moment";
import { TiDelete } from "react-icons/ti";



export default function Card(props:{message:string, createdAt:number}) {

  async function deleteMessage(id: number){
    try{
      const note = {id}
      const res = await axios.delete("/api/delnotes", {data: note});
      // response signals
      console.log(res.data);
    }
    catch(err){
      console.error("something went wrong!!");
    }
  }

  return (
    <div className="w-full bg-gray-900 rounded ring-1 ring-slate-700">
      <div className="relative">
        <TiDelete className="text-rose-500 text-3xl float-end md:absolute md:top-[-13px] md:right-[-13px]" 
        onClick={() => deleteMessage(props.createdAt)}
        />
      </div>
      <div className="px-4 py-2">
        {props.message}
        <div className="mt-4 text-sm text-slate-500">
          Created At <span className="text-sky-600">{moment(props.createdAt).format('Do MMMM YYYY')}</span>
        </div>
      </div>
    </div>
  );
}
