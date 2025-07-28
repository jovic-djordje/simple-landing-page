import sectionOneImage from "./section-one-image.png";
import sectionTwoImage from "./section-two-image.png";

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

export { SectionOneImage, SectionTwoImage };
