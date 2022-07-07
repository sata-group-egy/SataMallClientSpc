import { useQuery } from "react-query";
import { request } from "../Utils/axios-utils";

// بجيب منها كل الكاتيجورى
const fetchCategories = async ({ queryKey }) => {
  return await request({ url: `/categories?isDeleted=${queryKey[1]}` });
};

export const useFetchCategories = (type) => {
  return useQuery(["all-categories", type], fetchCategories);
};

const fetchSubCategories = async () => {
  return await request({ url: `/subcategories` });
};

export const useFetchSubCategories = () => {
  return useQuery("sub-categories", fetchSubCategories);
};
