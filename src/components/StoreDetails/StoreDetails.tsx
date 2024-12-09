import React from 'react';
import styles from './StoreDetails.module.css';

interface StoreDetailsProps {
    name: string;
    address: string;
    phone: string;
    website: string;
    description?: string;
}

const StoreDetails: React.FC<StoreDetailsProps> = ({ name, address, phone, website, description }) => {
    return (
        <div className={styles.storeDetails}>
            <h2>{name}</h2>
            <p><strong>Address:</strong> {address}</p>
            <p><strong>Phone:</strong> {phone}</p>
            {description && <p><strong>Description: </strong> {description}</p>}
            <p><a
              href={website}
              target="_blank"
            >
              <button className={styles.button + " " + styles.website}>
                Website
              </button>
            </a></p>
        </div>
    );
};

export default StoreDetails;