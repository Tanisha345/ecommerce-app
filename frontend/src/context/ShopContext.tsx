import { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";

export const ShopContext = createContext<ShopContextType>({
  products: [],
  currency: "$",
  deliveryFee: 0,
});

import { ReactNode } from "react";
import { ShopContextType } from "../interfaces/interfaces";

const ShopContextProvider = ({ children }: { children: ReactNode }) => {
  const currency = "$";
  const deliveryFee = 10;
  const [search, setSearch] = useState<string>("");
  const value = {
    products,
    currency,
    deliveryFee,
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
