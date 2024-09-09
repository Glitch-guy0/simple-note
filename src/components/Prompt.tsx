export default function Prompt() {
  return (
    <div className="relative group/extend ">
      {/* <Header /> */}
      <div
        className=" relative ring-1 ring-slate-800 group-focus-within/extend:ring-blue-800 rounded-xl overflow-hidden p-2 gap-2
          flex justify-end 
          group/extend
          group-focus-within/extend:flex-wrap"
      >
        <textarea
          className="outline-none resize-none bg-transparent w-full group-focus-within/extend:h-[30vh] md:group-focus-within/extend:h-[20vh]"
          placeholder="Start typing here"
        />
        <button className="px-4 py-2 bg-blue-600 rounded">Save</button>
      </div>
    </div>
  );
}
