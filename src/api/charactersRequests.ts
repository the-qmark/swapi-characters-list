import axiosInstance from "./axiosInstance";

export const loadAllCharacters = (page = 1) => {
  return axiosInstance.get("people/", {
    params: {
      page,
    },
  });
};

export const loadCharactersBySearch = (search: string) => {
  return axiosInstance.get("people/", {
    params: {
      search,
    },
  });
};

export const loadCharacterById = (id: string) => {
  return axiosInstance.get(`people/${id}`);
};
