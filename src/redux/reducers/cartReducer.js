const initialState = {
    product: [],
    error: false,
    message: '',
    status: null,
}

const cartReducer = (state = initialState, action) => {
  console.log("dhbuvsichk",action.payload);
    switch(action.type){
      case "ADD_TO_CART_SUCCESS":
        return {
          product: [...state.product, action.payload],
          message: action.payload.message,
          status: action.payload.status,
          error: false
        }
        default:
          return state
        }
      }

export default cartReducer;