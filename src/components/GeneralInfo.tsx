export default function GeneralInfo() {
  return (
    <div className="flex flex-col gap-4 lg:w-[400px]">
      <div>
        <h3 className="text-4xl lg:text-6xl">Ignacio</h3>
        <p className="opacity-50">Software developer</p>
      </div>
      <button
        onClick={() => window.location.replace("/#exp")}
        className="bg-[#1a1a1a] p-2 rounded-md px-12 hover:bg-black hover:font-bold"
      >
        - Experience
      </button>
      <button
        onClick={() => window.location.replace("/#projects")}
        className="bg-[#1a1a1a] p-2 rounded-md px-12 hover:bg-black hover:font-bold"
      >
        - Projects
      </button>
      <button
        onClick={() => window.location.replace("/#edu")}
        className="bg-[#1a1a1a] p-2 rounded-md px-12 hover:bg-black hover:font-bold"
      >
        - Education
      </button>
      <button
        onClick={() => window.location.replace("/#tech")}
        className="bg-[#1a1a1a] p-2 rounded-md px-12 hover:bg-black hover:font-bold"
      >
        - Skills
      </button>
    </div>
  );
}
