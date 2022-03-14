import styles from "../../styles/Swr.module.css";
import Header from "../../components/Header";
import HotelsList from "../../components/hotel/HotelsList";
import AddHotelForm from "../../components/hotel/AddHotelForm";
import Spinner from "../../components/hotel/Spinner";
import Error from "../../components/hotel/Error";
import SWR_KEYS from "../../constants/SwrKeys";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

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
              {!hotels && !error && <Spinner />}
              {hotels && <HotelsList hotels={hotels} />}
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
