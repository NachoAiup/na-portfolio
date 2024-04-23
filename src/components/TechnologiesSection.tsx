export default function TechnologiesSection() {
  return (
    <div id="tech" className="flex flex-col gap-2">
      <h3 className="text-3xl">Skills</h3>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-slate-500 w-24 flex items-center flex-col hover:bg-slate-600 gap-1 p-2 rounded-md">
          <img src="./js.png" className="w-12" />
          <p className="text-sm">JavaScript</p>
        </div>
        <div className="bg-slate-500 w-24 flex items-center flex-col hover:bg-slate-600 gap-1 p-2 rounded-md">
          <img src="./react.png" className="w-12" />
          <p className="text-sm">React</p>
        </div>
        <div className="bg-slate-500 w-24 flex items-center flex-col hover:bg-slate-600 gap-1 p-2 rounded-md">
          <img src="./css-3.png" className="w-12" />
          <p className="text-sm">CSS</p>
        </div>
        <div className="bg-slate-500 w-24 flex items-center flex-col hover:bg-slate-600 gap-1 p-2 rounded-md">
          <img src="./git.png" className="w-12" />
          <p className="text-sm">Git</p>
        </div>
        <div className="bg-slate-500 w-24 flex items-center flex-col hover:bg-slate-600 gap-1 p-2 rounded-md">
          <img src="./html.png" className="w-12" />
          <p className="text-sm">HTML</p>
        </div>
        <div className="bg-slate-500 w-24 flex items-center flex-col hover:bg-slate-600 gap-1 p-2 rounded-md">
          <img src="./programing.png" className="w-12" />
          <p className="text-sm">Node</p>
        </div>
        <div className="bg-slate-500 w-24 flex items-center flex-col hover:bg-slate-600 gap-1 p-2 rounded-md">
          <img src="./sql-server.png" className="w-12" />
          <p className="text-sm">SQL</p>
        </div>
        <div className="bg-slate-500 w-24 flex items-center flex-col hover:bg-slate-600 gap-1 p-2 rounded-md">
          <img src="./typescript.png" className="w-12" />
          <p className="text-sm">TypeScript</p>
        </div>
        <div className="bg-slate-500 w-24 flex items-center flex-col hover:bg-slate-600 gap-1 p-2 rounded-md">
          <img src="./next.png" className="w-12" />
          <p className="text-sm">Next</p>
        </div>
      </div>
    </div>
  );
}
