import { apple, bill, about, google } from "../assets";
import styles, { layout } from "../style";

const AboutMe = () => (
  <section id="about" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={about} alt="billing" className="w-[80%] h-auto relative z-[5] cursor-pointer" />

    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        About Me
      </h2>
      <p className={`${styles.paragraph} max-w-[680px] mt-5 `}>
      👋 Hello! I'm <span className="text-white cursor-pointer">Sonu Kumar Mukhiya</span>, a tech enthusiast and recent graduate from Atria Institute of Technology with a Bachelor of Engineering in Information Science and Engineering. With a firm foundation in technical knowledge and keen problem-solving acumen, I successfully navigated my academic journey to achieve this milestone.
      </p>
      <p className={`${styles.paragraph} max-w-[680px] mt-5 `}>
        🌟 Driven by a passion for technology and an unwavering curiosity, I am committed to continuous learning and growth. I thrive on challenges and am eager to contribute my skills to innovative projects and collaborative teams.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div>
    </div>
  </section>
);

export default AboutMe;
