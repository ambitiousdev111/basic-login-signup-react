import { api, post, get } from "../services.common";

export const adminLoginApi = async (payload) => {
  // console.log("payload: ", payload);
  return await post(`${api}/user/admin/signin`, payload);
};

export const adminSignupApi = async (payload) => {
  // console.log("payload: ", payload);
  return await post(`${api}/user/admin/signup`, payload);
};

export const getDataApi = async ({token,id}) => {
  // console.log("payload: ", payload);
  const authHeader = { Authorization: "Bearer " + token };
  return await get(`http://localhost:4000/api/getData?userId=${id}`, { ...authHeader });
};
