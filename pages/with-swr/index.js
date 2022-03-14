import styles from "../../styles/Swr.module.css";
import Header from "../../components/Header";
import HotelsList from "../../components/hotel/HotelsList";
import AddHotelForm from "../../components/hotel/AddHotelForm";
import Spinner from "../../components/hotel/Spinner";
import Error from "../../components/hotel/Error";
import SWR_KEYS from "../../constants/SwrKeys";
import useSWR from "swr";

async function fetcher() {
  const response = await fetch("http://localhost:4000/hotels");
  const hotels = await response.json();
  return hotels;
}

export default function IndexPage() {
  const { data: hotels, error } = useSWR(SWR_KEYS.HOTELS, fetcher);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Header />
      </header>
      <div className={styles.main}>
        <div className={styles.content}>
          <div className="row">
            <h4>With SWR</h4>
            <div className="col-md-4">
              {error && <Error />}
              {!hotels?.length && <Spinner />}
              {hotels?.length && <HotelsList hotels={hotels} />}
            </div>
            <div className="col-md-2">
              <AddHotelForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
