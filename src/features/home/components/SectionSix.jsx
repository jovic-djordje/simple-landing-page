import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SectionSixImage } from "../../../assets/images";

const SectionSix = () => {
  return (
    <div className="section-six">
      <div className="section-six-holder">
        <div className="section-six-left-side">
          <div className="section-six-text-holder">
            <div className="section-six-text-width-holder">
              <h2 className="section-six-title">Contact us</h2>
              <p className="section-six-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                nulla nihil voluptates quisquam
              </p>
              <div className="socials-holder">
                <FaFacebookF className="icon" />
                <FaInstagram className="icon" />
              </div>
            </div>
          </div>
          <div className="section-six-info-holder">
            <div className="contact">
              <div className="section-six-info-width-holder">
                <p className="contact-text">Phone</p>
                <p className="contact-text">(123) 456-7890</p>
              </div>
            </div>
            <div className="contact">
              <div className="section-six-info-width-holder">
                <p className="contact-text">Email</p>
                <p className="contact-text">hello@frontend.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="section-six-right-side">
          <SectionSixImage className="section-six-img" />
          <p className="cta">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            impedit magni
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
