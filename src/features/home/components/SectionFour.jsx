import {
  SectionFourFirstImage,
  SectionFourSecondImage,
  SectionFourThirdImage,
} from "../../../assets/images";

const SectionFour = () => {
  const feedbacks = [
    {
      id: 1,
      image: <SectionFourFirstImage className="section-four-card-img" />,
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ex velit reprehenderit tempora! Accusantium, at accusamus quo magni fugiat quam inventore minus dolores! Voluptatum quam earum laborum. Repellat, commodi sequi! ",
      names: "Pedro Fernandes",
      company: "Koa & Sons",
    },
    {
      id: 2,
      image: <SectionFourSecondImage className="section-four-card-img" />,
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ex velit reprehenderit tempora! Accusantium, at accusamus quo magni fugiat quam inventore minus dolores! Voluptatum quam earum laborum. Repellat, commodi sequi! ",
      names: "Leon France",
      company: "Wilderness Watchers Foundation",
    },
    {
      id: 3,
      image: <SectionFourThirdImage className="section-four-card-img" />,
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ex velit reprehenderit tempora! Accusantium, at accusamus quo magni fugiat quam inventore minus dolores! Voluptatum quam earum laborum. Repellat, commodi sequi! ",
      names: "Ellen Downing",
      company: "Hilford Press",
    },
  ];
  return (
    <div className="section-four">
      <div className="section-four-holder">
        <h2 className="section-four-title">
          <span className="marker">Feedback</span> from <span>our clients</span>
        </h2>
        <div className="section-four-card-holder">
          {feedbacks.map((feedback) => (
            <div className="section-four-card" key={feedback.id}>
              <div className="section-four-card-width-holder">
                {feedback.image}
                <div className="section-four-card-text-holder">
                  <p className="section-four-card-text">{feedback.text}</p>
                  <div className="info">
                    <p className="name">{feedback.names}</p>
                    <p className="companies">{feedback.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
