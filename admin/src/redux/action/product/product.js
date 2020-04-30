import { ADD_PRODUCT, ERROR } from "../product/product.type";
import { Product } from "../../api/product/product";
export const AddProduct1 = item => {
  return async dispatch => {
    try {
      let product = await Product(item);
      console.log(product);
      // localStorage.setItem("currentuser", JSON.stringify(product));
      dispatch({ type: ADD_PRODUCT, payload: product.data });
      //   alert("Login Done");
      //   history.push("/product");

      window.location.reload();
    } catch (ex) {
      dispatch({ type: ERROR, payload: ex });
    }
  };
};
// export const AddProduct1 = item => {
//   return async dispatch => {
//     try {
//       let response = await Product(item);
//       console.log(response);
//       setTimeout(() => {
//         dispatch({ type: ADD_PRODUCT, payload: response.data });
//       });
//       alert("Thank You");
//     } catch (ex) {

//     }
//   };
// };
