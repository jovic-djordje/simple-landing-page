import { SectionTwoImage } from "../../../assets/images";

const SectionTwo = () => {
  return (
    <div className="section-two">
      <div className="section-two-holder">
        <div className="section-two-text-holder">
          <h2 className="section-two-title"> About our mission</h2>
          <p className="section-two-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis quo labore maiores sapiente quibusdam debitis deserunt
            quas eaque aliquid, alias facilis eos fuga unde odit deleniti
            asperiores sit? Est, sit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
        </div>
        <SectionTwoImage className="section-two-img" />
      </div>
    </div>
  );
};

export default SectionTwo;
