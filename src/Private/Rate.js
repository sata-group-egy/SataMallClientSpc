import { useMutation, useQuery } from "react-query";
import { request } from "../Utils/axios-utils";

const fetchProdComments = async ({ queryKey }) => {
  return await request({ url: `/rates/product/${queryKey[1]}` });
};

export const useFetchProdComments = (id) => {
  return useQuery(["prod-rates", id], fetchProdComments);
};

const addRate = async (values) => {
  return await request({ url: `/rates`, method: "post", data: values });
};

export const useAddRate = () => {
  return useMutation(addRate);
};
