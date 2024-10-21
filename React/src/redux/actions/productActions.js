import { ActionsTypes } from "../constants/actions-types"

export const setProducts = (products)=>{
  return{
    type: ActionsTypes.SET_PRODUCT,
    payload: products
  }
}

export const selectedProducts = (products)=>{
  return{
    type: ActionsTypes.SELECTED_PRODUCT,
    payload: products
  }
}

export const removeSelectedProduct = (products)=>{
  return{
    type: ActionsTypes.REMOVE_SELECTED_PRODUCT,
    payload: products
  }
}


