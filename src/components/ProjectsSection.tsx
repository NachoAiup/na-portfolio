export default function ProjectsSection() {
  return (
    <div id="projects" className="mb-4">
      <h3 className="text-3xl mb-4">Projects</h3>
      <div className="flex flex-col gap-16">
        <div className="flex flex-col justify-center items-center">
          <a
            href="https://pokedex-next-yenf.vercel.app/1"
            target="_blank"
            className="bg-[#1a1a1a] p-2 rounded-md px-12 hover:bg-black hover:font-semibold"
          >
            Pokedex next
          </a>
          <img src="./project1.png" className="mt-4 rounded-md shadow-lg" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <a
            href="https://life-insurance-challenge.netlify.app/"
            target="_blank"
            className="bg-[#1a1a1a] p-2 rounded-md lg:px-12 hover:bg-black hover:font-semibold"
          >
            Life insurance - job challenge
          </a>
          <img src="./project2.png" className="mt-4 rounded-md shadow-lg" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <a
            href="https://random-user-table.netlify.app/"
            target="_blank"
            className="bg-[#1a1a1a] p-2 rounded-md lg:px-12 hover:bg-black hover:font-semibold"
          >
            Random user table - React challenge
          </a>
          <img src="./project3.png" className="mt-4 rounded-md shadow-lg" />
        </div>
      </div>
    </div>
  );
}
