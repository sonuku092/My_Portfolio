import { language, softskills } from "../constants";
import styles, { layout, } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-2 w-full rounded-[12px] ${index !== softskills.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[42px] h-[42px] rounded-full ${styles.flexCenter} bg-dimBlue `}>
      <img src={icon} alt="star" className="w-[70%] h-[70%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[14px] leading-[20.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[10px]">
        {content}
      </p>
    </div>
  </div>
);

const Language = () =>  (
  <section id="features" className={layout.section}>
    <div className={`${layout.sectionImg} flex-col`}>
    <h3 className="text-white text-[20px] font-poppins font-semibold ">
      Soft Skills
    </h3>
        {softskills.map((softskills, index) => (
        <FeatureCard key={softskills.id} {...softskills} index={index} />
      ))}
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      <h3 className="text-white text-[20px] font-poppins font-semibold ">
        Language
      </h3>
      {language.map((language, index) => (
        <FeatureCard key={language.id} {...language} index={index} />
      ))}
    </div>
  </section>
);

export default Language;
