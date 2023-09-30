import Header from "./components/Header";
import Card from "./components/Card";
import "./App.css";
import MenuCard from "./components/MenuCard";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const data = [
  {
    id: "1",
    img: "./images/airline_logo.jpg",
    title: "Batu, East Java",
    desc: "86 Destinations",
  },
  {
    id: "2",
    img: "./images/logo2.jpg",
    title: "Mount Everest",
    desc: "Tallest Mountain",
  },
  {
    id: "3",
    img: "./images/logo3.jpg",
    title: "Grand Canyon",
    desc: "Natural Wonder",
  },
  {
    id: "4",
    img: "./images/logo4.jpg",
    title: "Machu Picchu",
    desc: "Ancient Ruins",
  },
  {
    id: "5",
    img: "./images/logo5.jpg",
    title: "Paris, France",
    desc: "City of Love",
  },
  {
    id: "6",
    img: "./images/logo6.jpg",
    title: "Tokyo, Japan",
    desc: "Metropolitan City",
  },
  {
    id: "7",
    img: "./images/logo7.jpg",
    title: "Sydney Opera House",
    desc: "Iconic Landmark",
  },
  {
    id: "8",
    img: "./images/logo8.jpg",
    title: "Great Wall of China",
    desc: "Historical Wonder",
  },
];

function App() {
  return (
    <>
      <Header />
      <div className="hero-container">
        <div className="hero-heading">
          <h1>Amazing Flight to Switzerland</h1>
          <h2>Find and book a great experience</h2>
        </div>
      </div>
      <div className="hero-menu">
        <MenuCard />
      </div>
      <div className="sub-heroContainer">
        <h1>Search a best place in the world</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
          tempora perferendis tempore facere quos, voluptates cupiditate dolor
          fugiat mollitia enim ut nemo incidunt quasi corrupti aut earum
          accusamus aperiam nobis!
        </p>
        <div className="card-cantainer">
          {data.map((item) => {
            return <Card key={item.id} {...item} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;