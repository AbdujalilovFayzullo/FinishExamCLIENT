import { create } from "zustand";
import { produckttype } from "../../components/product.type";
import axios from "axios";

export const getProducts = create<produckttype>((set) => ({
  loading: false,
  products: [],
  error: null,

  getproducts: async () => {
    set(() => ({ loading: true }));
    try {
      const res = await axios.get('https://65c17151dc74300bce8da4c7.mockapi.io/products');
      const data = res.data;
      set(() => ({
        products: data,
        loading: false
      }));
    } catch (error) {
      console.error(error);
    }
  },

}));

export default getProducts;