import { useQuery } from "react-query";
import { request } from "../Utils/axios-utils";

const fetchBrands = async ({ queryKey }) => {
  return await request({ url: `/brands?isDeleted=${queryKey[1]}` });
};

export const useFetchBrands = (type) => {
  return useQuery(["brands", type], fetchBrands);
};
