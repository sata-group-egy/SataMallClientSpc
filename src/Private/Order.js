import { useMutation } from "react-query";
import { request } from "../Utils/axios-utils";

const createOrder = async (values) => {
  navigator.geolocation.getCurrentPosition((pos) => {
    values.longitude = pos.coords.longitude;
    values.latitude = pos.coords.latitude;
  });
  return await request({ url: `/orders`, method: "post", data: values });
};

export const useCreateOrder = () => {
  return useMutation(createOrder, {
    onSuccess: (response) => {
      window.open(
        `https://accept.paymob.com/api/acceptance/iframes/349145?payment_token=${response.data.data.token}`
      );
    },
  });
};
