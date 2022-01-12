import axios from "axios";

export const getUsers = async (url, params) => {
  try {
    const { data } = await axios.get(url, { params: params });
    const { success, users } = data;

    if (success) return users;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const getPositionsList = async (url) => {
  try {
    const { data } = await axios.get(url);
    const { positions, success } = data;

    if (success) return positions;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const getToken = async (url) => {
  try {
    const { data } = await axios.get(url);
    const { token, success } = data;
    if (success) {
      return token;
    }
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const postUserData = async (url, params, headers) => {
  let data;
  try {
    data = await axios.post(url, params, headers);
  } catch (e) {
    console.log("Error post data", e.response);
    data = e.response;
  }
  return data;
};
