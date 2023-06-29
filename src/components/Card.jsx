import Sedan from "../assets/svgs/icon-sedans.svg";

const Card = () => {
  return (
    <div className="card-container position-absolute top-50 start-50 translate-middle">
      <img className="card--image" src={Sedan} />
      <h2 className="card--header">Sedans</h2>
      <p className="card--description">
        Choose a sedan for its affordability and excellent fuel economy. Ideal
        for cruising in the city or on your next road trip.
      </p>
      <button className="card--button">Learn More</button>
    </div>
  );
};

export default Card;
