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
      <p className={`${styles.paragraph} max-w-[680px] mt-5 text-justify sm:text-left`}>
      Currently, a Curious Information Science and Engineering undergraduate student, who loves all things
        Problem Solving. I believe there is always something to learn from the rapidly moving world. I am a
        passionate coder and know coding languages like C, Java and also core Computer Science concepts like
        Data Structures and Algorithms. I'm extremely motivated to develop my skills and grow professionally
        constantly. I'm confident in my ability to come up with interesting ideas for an unforgettable
        revolution
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div>
    </div>
  </section>
);

export default AboutMe;
