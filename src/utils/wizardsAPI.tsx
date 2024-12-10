import { WizardsStoreEvent } from "../components/Types/Types";

export async function getStoreEventData(startDate: string, endDate: string) : Promise<WizardsStoreEvent[]> {
  const response = await fetch(
    "https://api.tabletop.wizards.com/silverbeak-griffin-service/graphql",
    {
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/json",
        "sec-ch-ua":
          '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "x-wotc-client":
          "client:locator version:local_version platform:Windows/Chrome/131.0.0.0",
        Referer: "https://locator.wizards.com/",
      },
      body: `{"operationName":"queryEvents","variables":{"latitude":53.5460983,"longitude":-113.4937266,"maxMeters":16093,"tags":["magic:_the_gathering"],"sort":"date","sortDirection":"Asc","startDate":"${startDate}","endDate":"${endDate}","orgs":[],"pageSize":50,"page":0},"query":"query queryEvents($latitude: Float!, $longitude: Float!, $maxMeters: maxMeters_Int_NotNull_min_1!, $tags: [String!]!, $sort: EventSearchSortField, $sortDirection: EventSearchSortDirection, $orgs: [ID!], $startDate: DateTime, $endDate: DateTime, $page: page_Int_min_0, $pageSize: pageSize_Int_min_1) {\\n  searchEvents(\\n    query: {latitude: $latitude, longitude: $longitude, maxMeters: $maxMeters, tags: $tags, sort: $sort, sortDirection: $sortDirection, orgs: $orgs, startDate: $startDate, endDate: $endDate, page: $page, pageSize: $pageSize}\\n  ) {\\n    events {\\n      id\\n      capacity\\n      description\\n      distance\\n      emailAddress\\n      hasTop8\\n      isAdHoc\\n      isOnline\\n      latitude\\n      longitude\\n      title\\n      eventTemplateId\\n      pairingType\\n      phoneNumber\\n      requiredTeamSize\\n      rulesEnforcementLevel\\n      scheduledStartTime\\n      startingTableNumber\\n      status\\n      tags\\n      timeZone\\n      cardSet {\\n        id\\n        __typename\\n      }\\n      entryFee {\\n        amount\\n        currency\\n        __typename\\n      }\\n      organization {\\n        id\\n        isPremium\\n        name\\n        __typename\\n      website\\n      postalAddress\\n}\\n      eventFormat {\\n        id\\n        __typename\\n      }\\n      __typename\\n    }\\n    pageInfo {\\n      page\\n      pageSize\\n      totalResults\\n      __typename\\n    }\\n    __typename\\n  }\\n}"}`,
      method: "POST",
    }
  );

  const data = await response.json();

  return data.data.searchEvents.events;
}

export async function getAllStoreInfo(){
  const response = await fetch("https://api.tabletop.wizards.com/silverbeak-griffin-service/graphql", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "application/json",
      "sec-ch-ua": "\"Google Chrome\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "x-wotc-client": "client:locator version:local_version platform:Windows/Chrome/131.0.0.0",
      "Referer": "https://locator.wizards.com/",
    },
    "body": "{\"operationName\":\"getStoresByLocation\",\"variables\":{\"latitude\":53.5460983,\"longitude\":-113.4937266,\"maxMeters\":16093,\"isPremium\":false,\"pageSize\":1000,\"page\":0},\"query\":\"query getStoresByLocation($latitude: Float!, $longitude: Float!, $maxMeters: Int!, $pageSize: pageSize_Int_min_1, $page: page_Int_min_0, $isPremium: Boolean) {\\n  storesByLocation(\\n    input: {latitude: $latitude, longitude: $longitude, maxMeters: $maxMeters, pageSize: $pageSize, page: $page, isPremium: $isPremium}\\n  ) {\\n    stores {\\n      emailAddress\\n      id\\n      isPremium\\n      latitude\\n      longitude\\n      name\\n      postalAddress\\n      showEmailInSEL\\n      showInInternalSearch\\n      distance\\n      phoneNumber\\n      website\\n      __typename\\n    }\\n    pageInfo {\\n      page\\n      pageSize\\n      totalResults\\n      __typename\\n    }\\n    __typename\\n  }\\n}\"}",
    "method": "POST"
  });

  const data = await response.json();

  return data.data.storesByLocation.stores;
}

export function findFormatInTags(tags: string[]) {
  const listOfTags = [
    "standard",
    "commander",
    "booster_draft",
    "sealed",
    "modern",
    "pioneer",
    "pauper",
    "legacy",
  ];

  for (let i = 0; i < tags.length; i++) {
    if (listOfTags.includes(tags[i].toLowerCase())) {
      if(tags[i].toLowerCase() === "booster_draft") return "DRAFT";
      return tags[i].toUpperCase();
    }
  }
}
