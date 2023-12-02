import styles from "../style";
import { discount, robot, heroimg } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="profile" className={`flex md:flex-row flex-col sm:py-[100px] py-6`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] md:text-[64px] text-[32px] text-white ss:leading-[70px] leading-[60px]">
            Hello, I'm<br className="ss:block hidden" />{" "}
            <span className="text-gradient ss:text-[68px] md:text-[80px] md:leading-[100px] font-bold">Sonu Kumar</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[70pxpx] leading-[60px] w-full">
          Developer
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 ss:mb-10 mb-5 text-[16px] ss:text-lg`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>

        
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 ">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            Download My CV
          </p>
        </div>
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
