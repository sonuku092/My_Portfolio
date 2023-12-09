import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="justify-between flex-col p-5 rounded-[18px] border-2  max-w-[320px] md:mr-10 sm:mr-5 mr-0 my-5">
    <img src={quotes} alt="double_quotes" className="w-[32px] h-[32px] object-contain" />
    <p className="font-poppins font-normal text-[18px] leading-[28.4px] text-white my-2">
      {content}
    </p>

    <div className="flex flex-row">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
);


export default FeedbackCard;
