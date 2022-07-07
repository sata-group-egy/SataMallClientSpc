import { useQuery } from "react-query";
import { request } from "../Utils/axios-utils";

// مستخدمها فى افضل المبيعات
const fetchByCatId = async ({ queryKey }) => {
  return await request({ url: `/products/filtCatSub/${queryKey[1]}` });
};

export const useFetchProdByCatId = (id) => {
  return useQuery(["prod-cat-sub", id], fetchByCatId);
};

// مستخدمها فى الحته بتاعت العروض اللى جمب افضل المبيعات
const fetchMostBought = async () => {
  return await request({ url: `/products/mostBought` });
};

export const useFetchMostBought = () => {
  return useQuery("prod-most-bought", fetchMostBought);
};

// بجيب منها المنتجات الجديده
const fetchNews = async () => {
  return await request({ url: `/products/newProduct` });
};

export const useFetchNews = () => {
  return useQuery("news", fetchNews);
};

const findById = async ({ queryKey }) => {
  return await request({ url: `/products/${queryKey[1]}` });
};

export const useFindById = (id) => {
  return useQuery(["prod-detail", id], findById);
};

const fetchLatest = async () => {
  return await request({ url: `/products/latest` });
};

export const useFetchLatest = () => {
  return useQuery("latest", fetchLatest);
};

// مستخدمها فى الحته بتاعت البحث بالاسم او
// القسم او القسم الفرعى او العلامهز التجاريه او السعر
const filterProducts = async ({ queryKey }) => {
  return await request({
    url: `/products/search-prod?title=${queryKey[1]}&subCategory=${queryKey[2]}&brand=${queryKey[3]}&minPrice=${queryKey[4]}&maxPrice=${queryKey[5]}&category=${queryKey[6]}`,
  });
};

export const useFilterProducts = (
  title,
  subCategory,
  brand,
  minPrice,
  maxPrice,
  category
) => {
  return useQuery(
    ["filt-prod", title, subCategory, brand, minPrice, maxPrice, category],
    filterProducts
  );
};
