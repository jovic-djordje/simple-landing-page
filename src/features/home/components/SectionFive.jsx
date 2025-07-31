const SectionFive = () => {
  const cardsArr = [
    {
      id: 1,
      title:
        "Sontag Sustainable Design offers free accessibility audits for nonprofits",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa odit eum repellendus cupiditate harum. Enim deleniti culpa cupiditate beatae recusandae mollitia.",
    },
    {
      id: 2,
      title: "What to expect for Global Accessibility Awareness Day 2030",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa odit eum repellendus cupiditate harum. Enim deleniti culpa cupiditate beatae recusandae mollitia.",
    },
    {
      id: 3,
      title: "Annual Inclusive Design Challenge Launches on May 18",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa odit eum repellendus cupiditate harum. Enim deleniti culpa cupiditate beatae recusandae mollitia.",
    },
  ];

  return (
    <div className="section-five">
      <div className="section-five-holder">
        <h2 className="section-five-title">
          In the <span>news</span>
        </h2>
        <div className="section-five-card-holder">
          {cardsArr.map((card) => (
            <div className="section-five-card" key={card.id}>
              <div className="section-five-card-width-holder">
                <p className="section-five-card-title">{card.title}</p>
                <p className="section-five-card-text">{card.text}</p>
                <button className="section-five-card-btn">Read more</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
