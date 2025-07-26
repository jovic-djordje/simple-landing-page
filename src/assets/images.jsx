import sectionOneImage from "./section-one-image.png";

const SectionOneImage = ({ className }) => {
  return (
    <img
      src={sectionOneImage}
      alt="Section illustration"
      className={className}
    />
  );
};

export { SectionOneImage };
