export default function HotelsList({ hotels }) {
  return (
    <ul className="list-group">
      {hotels.map(({ id, name }) => {
        return (
          <li key={id} className="list-group-item" style={{ fontSize: 25 }}>
            {id} - {name}
          </li>
        );
      })}
    </ul>
  );
}
