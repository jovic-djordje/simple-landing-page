import { SectionOneImage } from "../../../assets/images";
import { MdOutlineWebhook } from "react-icons/md";

const SectionOne = () => {
  return (
    <div className="section-one">
      <div className="header-holder">
        <div className="logo-holder">
          <MdOutlineWebhook className="logo" />
          <p>Frontend Developers</p>
        </div>
      </div>
      <div className="section-one-holder">
        <SectionOneImage className="section-one-img" />
        <div className="section-one-text-holder">
          <h1 className="section-one-title">
            We
            <span className="highlight"> are learning </span>
            react
          </h1>
          <p className="section-one-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet, consectetur.
          </p>
          <button className="btn section-one-btn">Click here</button>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
