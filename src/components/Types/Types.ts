export interface Store {
  storeName: string;
  websiteURL: string;
  address: string;
  phoneNumber: string;
  // weeklyEvents: {
  //   day: string;
  //   format: string;
  //   description: string;
  // }[];
}

export interface WizardsStore {
  emailAddress: string;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  postalAddress: string;
  distance: number;
  phoneNumber: string;
  website: string;
  description: string;
}

export interface WizardsStoreEvent {
  description: string;
  emailAddress: string;
  id: number;
  organization: {
    postalAddress: string;
    website: string | undefined; id: number; isPremium: boolean; name: string; __typename: string 
};
  phoneNumber: string;
  tags: string[];
  title: string;
  scheduledStartTime: string;
}
