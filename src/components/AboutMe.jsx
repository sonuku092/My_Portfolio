import { apple, bill, about, google } from "../assets";
import styles, { layout } from "../style";
import { experience, education } from "../constants";

const EducationCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-2 w-full rounded-[10px] ${
      index !== education.length - 1 ? "mb-2" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[42px] h-[42px] rounded-full ${styles.flexCenter} bg-zinc-300 hover:bg-white `}
    >
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

const ExperienceCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-2 w-full rounded-[10px] ${
      index !== experience.length - 1 ? "mb-2" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[42px] h-[42px] rounded-full ${styles.flexCenter} bg-zinc-300 hover:bg-white `}
    >
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

const AboutMe = () => (
  <section id="about" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={about}
        alt="about"
        className="w-[80%] h-auto relative z-[5] cursor-pointer"
      />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>About Me</h2>
      <p className={`${styles.paragraph} max-w-[680px] mt-5 `}>
        👋 Hello! I'm{" "}
        <span className="text-white cursor-pointer">Sonu Kumar Mukhiya</span>, a
        tech enthusiast and recent graduate from Atria Institute of Technology
        with a Bachelor of Engineering in Information Science and Engineering.
        With a firm foundation in technical knowledge and keen problem-solving
        acumen, I successfully navigated my academic journey to achieve this
        milestone.
      </p>

      <div className="flex flex-row flex-wrap mt-10 content-center items-start  ">
        <div
          className={`${layout.section1} flex-col border-[1px] rounded-[12px] border-white/20 m-1`}
        >
          <h3 className="text-dimWhite text-[20px] w-full text-center font-poppins font-semibold leading-8 rounded-xl m-1">
            Experience
          </h3>
          {experience.map((experience, index) => (
            <ExperienceCard key={experience.id} {...experience} index={index} />
          ))}
        </div>

        <div
          className={`${layout.section1} flex-col border-[1px] rounded-[12px] border-white/20 m-1`}
        >
          <h3 className="text-dimWhite text-[20px] w-full text-center font-poppins font-semibold leading-8 rounded-xl m-1">
            Education
          </h3>
          {education.map((education, index) => (
            <EducationCard key={education.id} {...education} index={index} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutMe;
