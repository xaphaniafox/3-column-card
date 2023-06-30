const Card = ({ image, title, description, color }) => {
  return (
    <div
      className="card-container justify-content-center col-lg-3"
      style={{ backgroundColor: color }}
    >
      <img className="card--image" src={image} />
      <h2 className="card--header">{title}</h2>
      <p className="card--description">{description}</p>
      <button className="card--button" style={{ color: color }}>
        Learn More
      </button>
    </div>
  );
};

export default Card;
