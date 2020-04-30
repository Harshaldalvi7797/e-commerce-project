import axios from "axios";
const PRODUCT_ENDPOINT = "http://localhost:4600/api/addproduct";
let config = {
  headers: {
    "Content-type": "application/json"
  }
};
export const Product = data => {
  return axios.post(PRODUCT_ENDPOINT, JSON.stringify(data), config);
};
// await axios
//   .post("http://localhost:4600/api/addproduct", data, {})
//   .then(res => {
//     console.log(res);
//     alert("Thank you");
//   });
