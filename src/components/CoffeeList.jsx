import { CoffeeView } from "./CoffeeView.jsx";

export function CoffeeList({ coffees }) {
  return (
    <div>
      <ul className="list list-coffees">
        {coffees?.map((coffee) => (
          <CoffeeView coffee={coffee} key={coffee.id} />
        ))}
      </ul>
    </div>
  );
}
