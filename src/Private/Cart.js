import { useMutation, useQuery, useQueryClient } from "react-query";
import { request } from "../Utils/axios-utils";

// find cart of user
const userCart = async ({ queryKey }) => {
  return queryKey[1] ? await request({ url: `/cart/user` }) : undefined;
};

export const useFetchUserCart = (user) => {
  return useQuery(["usr-cart", user], userCart);
};

// دى الهدف منها انى اعمل شرط لو المنتج موجود
//فى العربه ميظهرش الزرار بتاع اضف للعربه فى المنتجات
const checkUsrProductCart = async ({ queryKey }) => {
  return !queryKey[1] ? undefined : await request({ url: `/cart/prod-user` });
};

export const useCheckProdCart = (user) => {
  return useQuery(["usr-prod-cart", user], checkUsrProductCart);
};

// delete product from cart
const deleteFromCart = async (values) => {
  return await request({
    url: `/cart/user`,
    method: "delete",
    data: {
      items: [values],
    },
  });
};

// add to cart
const addToCart = async (values) => {
  return await request({
    url: `/cart`,
    method: "post",
    data: {
      items: [
        {
          product: values.product,
          quantity: !values.quantity ? 1 : values.quantity,
          size: !values.size ? "" : values.size,
          color: !values.color ? "" : values.color,
          price: values.price,
        },
      ],
    },
  });
};

export const useAddToCart = () => {
  const queryClient = useQueryClient();
  return useMutation(addToCart, {
    onSuccess: () => {
      queryClient.invalidateQueries(["usr-cart"]);
      queryClient.invalidateQueries(["usr-prod-cart"]);
    },
  });
};

export const useDeleteFromCart = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteFromCart, {
    onSuccess: () => {
      queryClient.invalidateQueries(["usr-cart"]);
      queryClient.invalidateQueries(["usr-prod-cart"]);
    },
  });
};

const updateCart = async (values) => {
  const total = values.items.reduce(
    (prev, curr) => prev + curr.quantity * curr.price,
    0
  );
  return await request({
    url: `/cart/user`,
    method: "put",
    data: {
      items: values.items,
      total,
    },
  });
};

export const useUpdateCart = () => {
  const queryClient = useQueryClient();

  return useMutation(updateCart, {
    onSuccess: () => {
      queryClient.invalidateQueries(["usr-cart"]);
      queryClient.invalidateQueries(["usr-prod-cart"]);
    },
  });
};
