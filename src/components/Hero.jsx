import styles from "../style";
import { discount,  heroimg, Resume } from "../assets";

const Hero = () => {
  const downloadAndOpenCV = () => {
    // Displaying an alert message while downloading
    const alertDiv = document.createElement("div");
    alertDiv.className =
      " w-fit fixed top-1 left-0 right-0 mx-auto bg-green-500 text-bold text-white p-4 rounded shadow-lg";
    alertDiv.innerText = "Downloading CV...";
    document.body.appendChild(alertDiv);

    fetch(Resume)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "SonuKumar_CV.pdf");
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
        // window.open(url, '_blank'); // Open the downloaded PDF in a new tab
        setTimeout(() => {
          alertDiv.remove();
        }, 1500); // Adjust the duration as needed (in milliseconds)
      })
      .catch((error) => {
        console.error("Error downloading CV:", error);
        alertDiv.remove();
        const errorAlertDiv = document.createElement("div");
        errorAlertDiv.className =
          "fixed top-0 left-0 right-0 mx-auto bg-red-500 text-white p-4 rounded shadow-lg";
        errorAlertDiv.innerText = "Error downloading CV: " + error;
        document.body.appendChild(errorAlertDiv);
        setTimeout(() => {
          errorAlertDiv.remove();
        }, 1000); // Adjust the duration as needed (in milliseconds)
      });
  };

  return (
    <section
      id="profile"
      className={`flex md:flex-row flex-col sm:py-[100px] py-6 sm:h-[100vh] h-auto`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 mt-10 xs:mt-5`}
      >
        <div className="flex flex-row justify-between items-center w-full select-none">
          <h1 className="flex-1 font-Kalnia text-[18px] xs:text-[20px] ss:text-[24px] sm:text-[28px] md:text-[32px] text-white ss:leading-[55px] leading-[45px]">
            Hello, I'm Sonu Kumar
          </h1>
        </div>

        <h1 className="font-Kalnia font-normal text-[18px] xs:text-[24px] text-white select-none">
          a
          <span className=" ml-1 font-Squada font-semibold text-[36px] xs:text-[36px] ss:text-[48px] sm:text-[56px] md:text-[68px] ss:leading-[70px]  leading-[40px] w-full">
            {" "}
            Software Developer
          </span>
        </h1>
        <p
          className={`${styles.paragraph} max-w-[470px] mt-5 ss:mb-10 mb-5 text-[16px] ss:text-lg`}
        >
          Feel free to connect with me to discuss tech, share ideas, or explore
          potential opportunities. Let's embark on a journey of innovation
          together!
        </p>

        <button
          className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 "
          onClick={downloadAndOpenCV}
        >
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>Download CV</p>
        </button>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} ss:my-0 my-10 relative`}
      >
        <img
          src={heroimg}
          alt="billing"
          className="w-auto h-[100%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
