import "./App.css";
import Card from "./components/Card";
import Sedan from "./assets/svgs/icon-sedans.svg";
import Suv from "./assets/svgs/icon-suvs.svg";
import Luxury from "./assets/svgs/icon-luxury.svg";

function App() {
  const cars = [
    {
      image: Sedan,
      title: "sedans",
      description:
        "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
      color: "hsl(31, 77%, 52%)",
    },
    {
      image: Suv,
      title: "suvs",
      description:
        "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
      color: "hsl(184, 100%, 22%)",
    },
    {
      image: Luxury,
      title: "luxury",
      description:
        "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
      color: "hsl(179, 100%, 13%)",
    },
  ];

  return (
    <div className="card-list">
      {cars.map((car) => (
        <Card
          image={car.image}
          title={car.title}
          description={car.description}
          color={car.color}
        />
      ))}
    </div>
  );
}

export default App;
