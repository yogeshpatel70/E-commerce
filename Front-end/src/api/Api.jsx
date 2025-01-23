import axios from "axios";

const api = axios.create(
  {
    baseURL: "https://e-commerce-git-main-yogeshs-projects-0b3218f5.vercel.app/api"
  }
);

export const postData = () => {
  return api.post("/products")
}
export const getOurData = (page, limit) => {
  return api.get(`/products?page=${page}&limit=${limit}`)
}
export const getDataById = (id) => {
  return api.get(`/products/${id}`)
}
export const getData = (filters, sort, page, limit) => {
  console.log("filters")
  const { isFilter } = filters;
  if (isFilter) {
    console.log("data send")
    return api.get(`/products?minPrice=${filters.priceRange[0]}&maxPrice=${filters.priceRange[1]}&sort=price-asc&page=${page}&limit=${limit}`)
  }
  if (sort == 'default') {
    console.log("default")
    return api.get(`/products?page=${page}&limit=${limit}`)
  }
  else if (sort == 'ascending') {
    console.log("asc")
    return api.get(`/products?page=${page}&limit=${limit} &sort=price-asc`);
  }
  else if (sort == 'descending') {
    console.log("desc")
    return api.get(`/products?page=${page}&limit=${limit} &sort=price-desc`);
  }
  else {
    console.log("newest")
    return api.get(`/products?page=${page}&limit=${limit} &sort=price-newest`);
  }
}
