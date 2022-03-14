import { useEffect, useState } from "react";
import styles from "../../styles/Swr.module.css";
import Header from "../../components/Header";
import Spinner from "../../components/hotel/Spinner";
import HotelsList from "../../components/hotel/HotelsList";
import AddHotelForm from "../../components/hotel/AddHotelForm";

export default function IndexPage() {
  const [State, SetState] = useState({ isLoading: false, hotels: [] });

  useEffect(() => {
    async function getHotels() {
      SetState({ ...State, isLoading: true });
      const response = await fetch("http://localhost:4000/hotels");
      const hotels = await response.json();
      SetState({ isLoading: false, hotels });
    }
    getHotels();
  }, []);

  const { isLoading, hotels } = State;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.main}>
        <div className={styles.content}>
          <div className="row">
            <h4>Normal fetch</h4>
            <div className="col-md-4">
              {isLoading && !hotels.length && <Spinner />}
              {!isLoading && hotels.length && <HotelsList hotels={hotels} />}
            </div>
            <div className="col-md-2">
              <AddHotelForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
