import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div className="m-20">
      <h1 className="text-3xl text-center text-purple-800">
        Hot Hot Cold Coffee: {coffees.length}
      </h1>
      <div className="grid md:grid-cols-2 gap-3 mt-8">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffees._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
