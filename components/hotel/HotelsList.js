import { useSWRConfig } from "swr";
import SWR_KEYS from "../../constants/SwrKeys";

export default function HotelsList({ hotels }) {
  const { mutate } = useSWRConfig();

  function deleteHotel(id) {
    fetch(`http://localhost:4000/hotels/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => mutate(SWR_KEYS.HOTELS))
      .catch((error) => console.error(error));
  }

  return (
    <ul className="list-group">
      {hotels.map(({ id, name }, index) => {
        return (
          <li key={id} className="list-group-item" style={{ fontSize: 20 }}>
            {index + 1} - {name}
            <div style={{ float: "right" }}>
              <button onClick={() => deleteHotel(id)}>X</button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
