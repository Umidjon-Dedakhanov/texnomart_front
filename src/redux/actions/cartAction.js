export function  addProductSuccess(productdata){
  console.log("actions",productdata);
    return {
      type: "ADD_TO_CART_SUCCESS",
      payload: productdata
    }
}

// export { addProductSuccess }