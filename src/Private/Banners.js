import { useQuery } from "react-query";
import { request } from "../Utils/axios-utils";

const fetchBannersByType = async ({ queryKey }) => {
  return await request({ url: `/banner/type/${queryKey[1]}` });
};

export const useFetchBannersByType = (type) => {
  return useQuery(["banners", type], fetchBannersByType);
};
