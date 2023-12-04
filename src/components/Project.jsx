import { project } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const ProjectCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-col h-[240px] w-[100%] sm:w-[320px] p-[6px] rounded-[18px] feature-card bg-slate-900 cursor-pointer`}>
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
  <section id="project" className={`${layout.section1} relative `}>
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-0" />
    <div className={layout.sectionInfo1}>
      <h2 className={styles.heading2}>
        Project, <br className="sm:block hidden" /> 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg1} flex-col sm:flex-row gap-2`}>
      {project.map((project, index) => (
        <ProjectCard key={project.id} {...project} index={index} />
      ))}
    </div>
  </section>
);

export default Project;
