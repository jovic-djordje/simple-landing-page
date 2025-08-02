import sectionOneImage from "./section-one-image.png";
import sectionTwoImage from "./section-two-image.png";
import sectionThreeFirstImage from "./section-three-image (2).jpg";
import sectionThreeSecondImage from "./section-three-image.jpg";
import sectionThreeThirdImage from "./section-three-image (3).jpg";
import sectionFourFirstImage from "./section-four-card-img.jpg";
import sectionFourSecondImage from "./section-four-card-img (3).jpg";
import sectionFourThirdImage from "./section-four-card-img (2).jpg";
import sectionSixImage from "./section-six-image.png";

const SectionOneImage = ({ className }) => {
  return (
    <img
      src={sectionOneImage}
      alt="Section illustration"
      className={className}
    />
  );
};

const SectionTwoImage = ({ className }) => {
  return (
    <img
      src={sectionTwoImage}
      className={className}
      alt="Section two illustration"
    />
  );
};

const SectionThreeFirstImage = ({ className }) => {
  return (
    <img
      src={sectionThreeFirstImage}
      alt="section three illustration"
      className={className}
    />
  );
};

const SectionThreeSecondImage = ({ className }) => {
  return (
    <img
      src={sectionThreeSecondImage}
      alt="section three illustration"
      className={className}
    />
  );
};

const SectionThreeThirdImage = ({ className }) => {
  return (
    <img
      src={sectionThreeThirdImage}
      alt="section three illustration"
      className={className}
    />
  );
};

const SectionFourFirstImage = ({ className }) => {
  return (
    <img
      src={sectionFourFirstImage}
      alt="section four illustartion"
      className={className}
    />
  );
};

const SectionFourSecondImage = ({ className }) => {
  return (
    <img
      src={sectionFourSecondImage}
      alt="section four illustration"
      className={className}
    />
  );
};

const SectionFourThirdImage = ({ className }) => {
  return (
    <img
      src={sectionFourThirdImage}
      alt="section four illustration"
      className={className}
    />
  );
};

const SectionSixImage = ({ className }) => {
  return (
    <img
      src={sectionSixImage}
      alt="section six illustration"
      className={className}
    />
  );
};

export {
  SectionOneImage,
  SectionTwoImage,
  SectionThreeFirstImage,
  SectionThreeSecondImage,
  SectionThreeThirdImage,
  SectionFourFirstImage,
  SectionFourSecondImage,
  SectionFourThirdImage,
  SectionSixImage,
};
