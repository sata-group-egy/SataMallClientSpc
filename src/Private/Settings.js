import { useQuery } from "react-query";
import { request } from "../Utils/axios-utils";

const fetchSettingById = async () => {
  return await request({ url: `/settings/6227701961feffea6ce9c840` });
};

export const useFetchSettings = () => {
  return useQuery("settings", fetchSettingById);
};
