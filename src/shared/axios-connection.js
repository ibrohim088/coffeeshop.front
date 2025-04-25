import axios from "axios";
let token = localStorage.getItem("coffee-token");
token = token !== "undefined0" ? token : "false";


const api = axios.create({
   baseURL: "http://localhost:3000",
   headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${JSON.parse(token)}`,
   }
});

export const setAuthToken = (token) => {
   if(token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
   }else{
      delete api.defaults.headers.common["Authorization"];
   }
};

export default api;