import sectionOneImage from "./section-one-image.png";
import sectionTwoImage from "./section-two-image.png";
import sectionThreeFirstImage from "./section-three-image (2).jpg";
import sectionThreeSecondImage from "./section-three-image.jpg";
import sectionThreeThirdImage from "./section-three-image (3).jpg";

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

export {
  SectionOneImage,
  SectionTwoImage,
  SectionThreeFirstImage,
  SectionThreeSecondImage,
  SectionThreeThirdImage,
};
