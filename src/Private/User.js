import { useMutation } from "react-query";
import { request } from "../Utils/axios-utils";

const addUser = async (values) => {
  const formData = new FormData();
  formData.append("fullname", values.fullname);
  formData.append("email", values.email);
  formData.append("password", values.password);
  formData.append("role", values.role);
  formData.append("telephone", values.telephone);
  formData.append("mobile", values.mobile);
  formData.append("image", values.image);
  return await request({
    url: `/auth/register`,
    method: "post",
    data: formData,
  });
};

export const useRegister = () => {
  return useMutation(addUser);
};
