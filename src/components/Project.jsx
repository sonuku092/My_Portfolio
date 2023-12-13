import { project } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const ProjectCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-col h-[240px] w-[100%] sm:w-[320px] p-[6px] rounded-[18px] feature-card bg-slate-900 cursor-pointer border-[1px] border-white/25`}>
    <div className={`w-[100%] h-[100%] rounded-[14px] ${styles.flexCenter} bg-neutral-800 overflow-hidden`}>
      <img src={icon} alt="star" className=" h-full w-fit object-cover object-center" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[12px] leading-none">
        {content}
      </p>
    </div>
  </div>
);

const Project = () =>  (
  <>
  <section id="project" className={`${layout.section} relative `}>
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-0" />
    <div className={layout.sectionInfo1}>
      <h2 className={styles.heading2}>
        Project, <br className="sm:block hidden" /> 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Recent Project
      </p>
      <div className="border border-white rounded-full px-2 hover:bg-white text-center cursor-pointer">
        <p className="text-white hover:text-black m-2 font-sans font-semibold">See More</p>
      </div>
    </div>

    <div className={`${layout.sectionImg1} flex-col sm:flex-row gap-4`}>
      {project.map((project, index) => (
        <ProjectCard key={project.id} {...project} index={index} />
      ))}
    </div>
  </section>
  <div className=" gap-2 flex ">
    <div className=" items-center h-20 w-36 rounded-md bg-white/20 shadow-xl">
        <h2 className="">Works</h2>
    </div>
    <div className=" h-20 w-36 rounded-md bg-white/20 hover:shadow-xl">

    </div>
    <div className=" h-20 w-36 rounded-md bg-white/20">

    </div>
    <div className=" h-20 w-36 rounded-md bg-white/20 shadow-xl">

    </div>
    <div className=" h-20 w-36 rounded-md bg-white/20 hover:shadow-xl">

    </div>
    <div className=" h-20 w-36 rounded-md bg-white/20">

    </div>
    <div className=" h-20 w-36 rounded-md bg-white/20 shadow-xl">

    </div>
    <div className=" h-20 w-36 rounded-md bg-white/20 hover:shadow-xl">

    </div>
    <div className=" h-20 w-36 rounded-md bg-white/20">

    </div>
  </div>
  </>
);

export default Project;
