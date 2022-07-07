import { useQuery } from "react-query";
import { request } from "../Utils/axios-utils";

const fetchAllCountries = async () => {
  return await request({ url: `/country` });
};

export const useFetchCountries = () => {
  return useQuery("all-countries", fetchAllCountries);
};

const fetchCityByCountry = async ({ queryKey }) => {
  return await request({ url: `/city/country/${queryKey[1]}` });
};

export const useFetchByCntId = (id) => {
  return useQuery(["related-city", id], fetchCityByCountry, {
    enabled: id !== "",
  });
};

const fetchRegionByCityId = async ({ queryKey }) => {
  return await request({ url: `/region/getRegionsByCityId/${queryKey[1]}` });
};

export const useFetchRegion = (id) => {
  return useQuery(["related-region", id], fetchRegionByCityId, {
    enabled: id !== "",
  });
};
