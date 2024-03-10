import { language, softskills } from "../constants";
import styles, { layout, } from "../style";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-2 w-full rounded-[12px] ${index !== softskills.length - 1 ? "mb-2" : "mb-0"}`}>
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
  <section id="" className={layout.section}>
    <div className={`flex-col flex-1 border-[1px] border-white/20 rounded-[12px]`}>
      <h3 className="text-white text-[20px] w-full text-center font-poppins font-semibold leading-10 rounded-xl m-1">
        Soft Skills
      </h3>
        {softskills.map((softskills, index) => (
        <FeatureCard key={softskills.id} {...softskills} index={index} />
      ))}
    </div>

    <div className={`${layout.sectionImg} flex-col border-[1px] border-white/20 rounded-[12px]`}>
      <h3 className="text-white text-[20px] w-full text-center font-poppins font-semibold leading-10 rounded-xl m-1">
        Language
      </h3>
      {language.map((language, index) => (
        <FeatureCard key={language.id} {...language} index={index} />
      ))}
    </div>
  </section>
);

export default Language;
