import { ajax } from "../tools/ajax";

export const getCities = async (countryCode) => {
  const opiopns = {
    method: "GET",
    url: "https://spott.p.rapidapi.com/places",
    headers: {
      "X-RapidAPI-Key": "30f6282c2amsh5f88eff6d3d7620p13d124jsn26806418027d",
      "X-RapidAPI-Host": "spott.p.rapidapi.com",
    },
    params: {
      limit: 100,
      skip: "0",
      type: "CITY",
      country: countryCode ?? "CO",
    },
  };
  return await ajax(opiopns);
};
