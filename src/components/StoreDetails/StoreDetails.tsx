import React from 'react';
import styles from './StoreDetails.module.css';

interface StoreDetailsProps {
    name: string;
    address: string;
    phone: string;
    website: string;
}

const StoreDetails: React.FC<StoreDetailsProps> = ({ name, address, phone, website }) => {
    return (
        <div className={styles.storeDetails}>
            <h2>{name}</h2>
            <p><strong>Address:</strong> {address}</p>
            <p><strong>Phone:</strong> {phone}</p>
            <p><strong>Website:</strong> {website}</p>
        </div>
    );
};

export default StoreDetails;