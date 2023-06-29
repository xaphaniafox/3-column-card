import Sedan from "../assets/svgs/icon-sedans.svg";

const Card = () => {
  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <img src={Sedan} />
      <h2>Sedans</h2>
      <p>
        Choose a sedan for its affordability and excellent fuel economy. Ideal
        for cruising in the city or on your next road trip.
      </p>
    </div>
  );
};

export default Card;