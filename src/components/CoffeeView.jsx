export function CoffeeView({ coffee }) {
  return (
    <li>
      <h3> {coffee.brand}</h3>
      <div>
        <p>
          <span>{coffee.name}</span>
        </p>
        <p>
          <span>{coffee.price}</span>
        </p>
      </div>
      <div>
        <p>{coffee.addedBy}</p>
      </div>
    </li>
  );
}
