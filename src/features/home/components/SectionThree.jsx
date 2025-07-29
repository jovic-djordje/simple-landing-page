import {
  SectionThreeFirstImage,
  SectionThreeSecondImage,
  SectionThreeThirdImage,
} from "../../../assets/images";

const SectionThree = () => {
  const cards = [
    {
      id: 1,
      imageUrl: <SectionThreeFirstImage className="section-three-card-img" />,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    {
      id: 2,
      imageUrl: <SectionThreeSecondImage className="section-three-card-img" />,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.  ",
    },
    {
      id: 3,
      imageUrl: <SectionThreeThirdImage className="section-three-card-img" />,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
    },
  ];
  return (
    <div className="section-three">
      <div className="section-three-holder">
        <div className="section-three-text-holder">
          <h2 className="section-three-title">Our work</h2>
          <p className="section-three-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officia
            cupiditate provident, fuga sequi assumenda quidem odit soluta totam
            quis alias nesciunt modi iusto nemo quaerat ut beatae tenetur ipsa.
          </p>
        </div>
        <div className="section-three-card-holder">
          {cards.map((card) => (
            <div className="section-three-card" key={card.id}>
              <div className="section-three-card-width-holder">
                {card.imageUrl}
                <p className="section-three-card-text">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
