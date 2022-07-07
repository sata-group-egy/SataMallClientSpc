import { useMutation, useQuery, useQueryClient } from "react-query";
import { request } from "../Utils/axios-utils";

const checkProdWishList = async ({ queryKey }) => {
  return !queryKey[1] ? undefined : await request({ url: `/wishlist/user` });
};

export const useCheckProdWishList = (user) => {
  return useQuery(["usr-prod-wishlist", user], checkProdWishList);
};

// add to wish list
const addToWishList = async (values) => {
  return await request({ url: "/wishlist", method: "POST", data: values });
};

export const useAddToWishList = () => {
  const queryClient = useQueryClient();
  return useMutation(addToWishList, {
    onSuccess: () => {
      queryClient.invalidateQueries(["usr-prod-wishlist"]);
    },
  });
};

// delete from wishlist
const deleteFromWishList = async (values) => {
  return await request({ url: `/wishlist/${values._id}`, method: "delete" });
};

export const useDeleteFromWishList = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteFromWishList, {
    onSuccess: () => {
      queryClient.invalidateQueries(["usr-prod-wishlist"]);
    },
  });
};
