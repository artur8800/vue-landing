import axios from "axios";

export const getUsers = async (url, params) => {
  try {
    const { data } = await axios.get(url, { params: params });
    const { success, users, total_pages, page } = data;

    if (success)
      return {
        users,
        total_pages,
        page,
      };
  } catch (e) {
    console.log("Getting users is failed!", e);
    return null;
  }
};

export const getPositionsList = async (url) => {
  try {
    const { data } = await axios.get(url);
    const { positions, success } = data;

    if (success) return positions;
  } catch (e) {
    console.log("Getting positions is failed!", e);
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
    console.log("Getting token is failed!", e);
    return null;
  }
};

export const postUserData = async (url, params, headers) => {
  let data;
  try {
    data = await axios.post(url, params, headers);
  } catch (e) {
    console.log("Form sending is failed!", e.response);
    data = e.response;
  }
  return data;
};
