export interface Store{
    storeName: string;
    websiteURL: string;
    address: string;
    zone: string;
    phoneNumber: string;
    googleDirectionsURL: string;
    weeklyEvents: 
      {
        day: string,
        format: string,
        description: string
      }[];
}