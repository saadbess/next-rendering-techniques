import { useEffect, useState, useRef } from "react";
import { useSWRConfig } from "swr";
import SWR_KEYS from "../../constants/SwrKeys";

export default function AddHotelForm() {
  const { mutate } = useSWRConfig();
  const inputRef = useRef(null);
  const [name, setName] = useState("");

  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.focus();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:4000/hotels", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.id) {
          setName("");
          inputRef.current.focus();
          mutate(SWR_KEYS.HOTELS);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div className="form-group">
        <input
          ref={inputRef}
          type={"text"}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="form-control"
          placeholder="type name...."
        />
      </div>
      <div className="form-group" style={{ padding: 10, textAlign: "center" }}>
        <input type={"submit"} value="Save" className="btn btn-success" />
      </div>
    </form>
  );
}
