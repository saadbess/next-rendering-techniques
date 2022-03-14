export default function HotelsList({ hotels }) {
  return (
    <ul className="list-group">
      {hotels.map(({ id, name }) => {
        return (
          <li key={id} className="list-group-item">
            {id} - {name}
          </li>
        );
      })}
    </ul>
  );
}
