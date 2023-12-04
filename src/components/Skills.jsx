import { backend, frontend, progaming, project} from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import Language from "./Language";

const SkillsCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-col h-[80px] w-[85px]  p-1 rounded-[12px] border-dimWhite feature-card bg-slate-900 cursor-pointer`}>
    <div className={`w-[100%] h-[80%] rounded-[8px] ${styles.flexCenter} bg-slate-100`}>
      <img src={icon} alt="star" className="w-[80%] h-[80%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col">
      <h4 className="font-poppins text-white font-light text-[12px] my-auto mx-auto">
        {title}
      </h4>
    </div>
  </div>
);

const Skills = () =>  (
    <>
    <div id="skills" className="mb-10 ss:mt-10 mt-10">
    <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white -mb-10 w-full text-center">
        Skills 
      </h2>
    </div>
  <section id="Skills" className={layout.section}>
    <div className={layout.sectionInfo}>
        <h3 className="font-poppins font-semibold text-white text-[18px] my-2 mx-auto">
            FrontEnd
        </h3>

      <div className={`${layout.sectionSkill} flex-shrink-0 ss:flex-row gap-2`}>
        {frontend.map((frontend, index) => (
        <SkillsCard key={frontend.id} {...frontend} index={index} />
            ))}
        </div>
    </div>

    <div className={layout.sectionInfo}>
        <h3 className="font-poppins font-semibold text-white text-[18px] my-2 mx-auto">
            BackEnd
        </h3>

      <div className={`${layout.sectionSkill} flex-shrink-0 ss:flex-row gap-2`}>
        {backend.map((backend, index) => (
        <SkillsCard key={backend.id} {...backend} index={index} />
            ))}
        </div>
    </div>

    <div className={layout.sectionInfo}>
        <h3 className="font-poppins font-semibold text-white text-[18px] my-2 mx-auto">
            Programing Language
        </h3>

      <div className={`${layout.sectionSkill} flex-shrink-0 ss:flex-row gap-2`}>
        {progaming.map((progaming, index) => (
        <SkillsCard key={progaming.id} {...progaming} index={index} />
            ))}
        </div>
    </div>

  </section>

  <Language/>
  </>
);

export default Skills;
