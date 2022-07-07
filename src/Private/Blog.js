import { useQuery } from "react-query";
import { request } from "../Utils/axios-utils";

const fetchBlogs = async () => {
  return await request({ url: `/blogs` });
};

export const useFetchBlogs = () => {
  return useQuery("blogs", fetchBlogs);
};

const findById = async ({ queryKey }) => {
  return await request({ url: `/blogs/${queryKey[1]}` });
};

export const useFindById = (id) => {
  return useQuery(["blog-id", id], findById);
};
