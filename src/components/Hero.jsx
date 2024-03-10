import styles from "../style";
import { discount, robot, heroimg, Resume } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {

  const downloadAndOpenCV = () => {
    // fetch(Resume)
    //   .then(response => response.blob())
    //   .then(blob => {
    //     const url = window.URL.createObjectURL(new Blob([blob]));
    //     const link = document.createElement('a');
    //     link.href = url;
    //     link.setAttribute('download', 'SonuKumar_CV.pdf');
    //     document.body.appendChild(link);
    //     link.click();
    //     link.parentNode.removeChild(link);
    //   })
    //   .catch(error => {
    //     console.error('Error downloading CV:', error);
    //   });
    window.open(Resume, "_blank");
  }

  return (
    <section id="profile" className={`flex md:flex-row flex-col sm:py-[100px] py-6 `}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 mt-10 xs:mt-5`}>
        
        <div className="flex flex-row justify-between items-center w-full select-none">
          <h1 className="flex-1 font-Kalnia text-[18px] xs:text-[20px] ss:text-[24px] sm:text-[28px] md:text-[32px] text-white ss:leading-[55px] leading-[45px]">
            Hello, I'm<br/>{" "}
            <span1 className=" name font-Racing text-[46px] xs:text-[52px] ss:text-[62px] sm:text-[72px] md:text-[92px] md:leading-[100px] font-bold">
              Sonu Kumar
              </span1>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-Kalnia font-normal text-[18px] xs:text-[24px] text-white select-none">
          and I'm a <br className=" ss:hidden"/>
          <span className=" ml-1 font-Squada font-semibold text-[36px] xs:text-[36px] ss:text-[48px] sm:text-[56px] md:text-[68px] ss:leading-[70px]  leading-[40px] w-full">
           {" "}Software
            </span>
            <span className="ml-1 font-Squada font-semibold text-[36px] xs:text-[36px] ss:text-[48px] sm:text-[56px] md:text-[68px] ss:leading-[70px]  leading-[40px] w-full">
           {" "}Developer
            </span>
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 ss:mb-10 mb-5 text-[16px] ss:text-lg`}>
        Feel free to connect with me to discuss tech, share ideas, or explore
        potential opportunities. Let's embark on a journey of innovation
        together! 
        </p>

        
        <button className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 "
          onClick={() => {downloadAndOpenCV();}}>
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <a className={`${styles.paragraph} ml-2`}>
            Download My CV
          </a>
        </button>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} ss:my-0 my-10 relative`}>
        <img src={heroimg} alt="billing" className="w-auto h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`${styles.flexCenter}`}>
        <GetStarted className />
      </div>
    </section>
  );
};

export default Hero;
