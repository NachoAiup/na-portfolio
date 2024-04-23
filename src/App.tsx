import { CircleMenu, CircleMenuItem } from "react-circular-menu";
import GeneralInfo from "./components/GeneralInfo";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import TechnologiesSection from "./components/TechnologiesSection";

function App() {
  return (
    <main className="max-w-screen-md lg:max-w-screen-lg">
      <div className="h-screen flex flex-col lg:flex-row justify-start pt-24 gap-36 lg:pt-0 lg:gap-0 lg:px-12 lg:justify-between items-center">
        <div className="w-fit gap-4 flex flex-col justify-center items-center">
          <div className="p-1 bg-gradient-to-b from-slate-500 rounded-full">
            <img
              src="/profilepic.jpg"
              className="w-auto h-24 lg:h-32 rounded-full object-cover object-top"
            />
          </div>
          <div>
            <h1 className="text-4xl lg:text-7xl">IGNACIO AIUP</h1>
            <p className="opacity-50 w-full lg:text-2xl">Fullstack developer</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <CircleMenu
            startAngle={-90}
            rotationAngle={360}
            itemSize={5}
            radius={8}
            rotationAngleInclusive={false}
          >
            <CircleMenuItem
              onClick={() => window.location.replace("/#projects")}
            >
              Projects
            </CircleMenuItem>
            <CircleMenuItem onClick={() => window.location.replace("/#exp")}>
              Experience
            </CircleMenuItem>
            <CircleMenuItem onClick={() => window.location.replace("/#edu")}>
              Education
            </CircleMenuItem>
            <CircleMenuItem onClick={() => window.location.replace("/#tech")}>
              Skills
            </CircleMenuItem>
          </CircleMenu>
        </div>
      </div>
      <div className="lg:h-[600px] max-h-screen lg:w-[1024px] flex flex-col gap-4 lg:flex-row justify-between pb-4">
        <GeneralInfo />
        <div className="relative overflow-x-hidden z-10 w-[300px] lg:w-[400px] overflow-scroll max-h-screen flex flex-col gap-12">
          <ExperienceSection />
          <ProjectsSection />
          <EducationSection />
          <TechnologiesSection />
        </div>
      </div>
    </main>
  );
}

export default App;
