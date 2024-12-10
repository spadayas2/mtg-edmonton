import StoreCard from "../StoreCard/StoreCard";
import styles from "./StoresSection.module.css";
import { useEffect, useState } from "react";
import {
  APIProvider,
  Map,
  Marker,
  InfoWindow
} from "@vis.gl/react-google-maps";
import { getAllStoreInfo } from "../../utils/wizardsAPI";
import StoreDetails from "../StoreDetails/StoreDetails";



export default function StoresSection() {
  const [storesInfoData, setStoresInfoData] = useState([]);
  const [showInfoWindow, setShowInfoWindow] = useState<boolean[]>([]);
  interface Store {
    storeName: string;
    websiteURL: string;
    address: string;
    phoneNumber: string;
  }

  const [selectedStore, setSelectedStore] = useState<Store | null>(null); // State to manage the selected store
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage the modal visibility

  useEffect(() => {
    async function fetchData() {
      const data = await getAllStoreInfo();
      setStoresInfoData(data);
      setShowInfoWindow(Array(data.length).fill(false));
    }
    fetchData();
  }, []);

  function toggleInfoWindow(index: number) {
    setShowInfoWindow((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  }

  function handleDetailsClick(storeData: Store) {
    setSelectedStore(storeData);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    setSelectedStore(null);
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>STORES</div>
      <div className={styles.justifyCenter}>
        <div className={styles.storeListContainer}>
          <ul
          >
            {storesInfoData.map(
              (storeData: {
                name: string;
                website: string;
                postalAddress: string;
                phoneNumber: string;
              }) => (
                <li key={storeData.name} style={{ marginRight: "2px" }}>
                  <StoreCard
                    store={{
                      storeName: storeData.name,
                      websiteURL: storeData.website,
                      address: storeData.postalAddress,
                      phoneNumber: storeData.phoneNumber,
                    }}
                    onDetailsClick={handleDetailsClick}
                  />
                </li>
              )
            )}
          </ul>
        </div>
        <div className={styles.mapContainer}>
          <APIProvider apiKey="AIzaSyA2EOgQ5G61Z-y7tHHldUJCbls8v4XF9Ag">
            <Map
            className={styles.map}
              defaultCenter={{ lat: 53.5266805, lng: -113.4927372 }}
              defaultZoom={10.5}
              gestureHandling={"greedy"}
              disableDefaultUI={false}
            >
              {storesInfoData.map(
                (
                  store: {
                    name: string;
                    postalAddress: string;
                    latitude: number;
                    longitude: number;
                  },
                  index: number
                ) => (
                  <>
                    <Marker
                    
                      key={store.name}
                      position={{ lat: store.latitude, lng: store.longitude }}
                      onClick={() => toggleInfoWindow(index)}
                    />

                    {showInfoWindow[index] && (
                      <InfoWindow
                      headerContent={<div className={styles.infoHeader}>{store.name}</div>}
                        position={{ lat: store.latitude, lng: store.longitude }}
                        onClose={() => toggleInfoWindow(index)}
                      >
                        <div>
                          <div>{store.postalAddress}</div>
                        </div>
                        
                      </InfoWindow>
                    )}
                  </>
                )
              )}
            </Map>
          </APIProvider>
        </div>
      </div>
      {isModalOpen && selectedStore && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.closeButton} onClick={closeModal}>
              &times;
            </span>
            <StoreDetails
              name={selectedStore.storeName}
              website={selectedStore.websiteURL}
              address={selectedStore.address}
              phone={selectedStore.phoneNumber}
            />
          </div>
        </div>
      )}
    </div>
  );
}
