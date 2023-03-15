import React from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  const sportsPersons = [
    { name: "Virat Kohli", age: 32, country: "India", sport: "Cricket" },
    { name: "Lionel Messi", age: 34, country: "Argentina", sport: "Football" },
    { name: "Roger Federer", age: 39, country: "Switzerland", sport: "Tennis" },
    { name: "Rafael Nadal", age: 35, country: "Spain", sport: "Tennis" },
    {
      name: "Cristiano Ronaldo",
      age: 36,
      country: "Portugal",
      sport: "Football",
    },
  ];
  return (
    <div className="mt-5 container">
      <div className="row">
        {sportsPersons.map((card) => (
          <div className="col-3 g-4 rounded-bottom text-primary">
            <img
              src="https://www.w3schools.com/bootstrap4/img_avatar1.png"
              className="img-fluid rounded"
              alt="Responsive image"
            />
            <Card
              name={card.name}
              age={card.age}
              country={card.country}
              sport={card.sport}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
