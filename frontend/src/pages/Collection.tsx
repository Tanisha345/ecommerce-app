import React, { use, useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import { Product } from "../interfaces/interfaces";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<string[]>([]);
  const [subcategory, setSubcategory] = useState<string[]>([]);
  const [sortType, setSortType] = useState<string>("relavent");

  const toggleCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (category.includes(e.target.value)) {
      setCategory(category.filter((item) => item !== e.target.value));
    } else {
      setCategory([...category, e.target.value]);
    }
  };

  const toggleSubCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (subcategory.includes(e.target.value)) {
      setSubcategory(subcategory.filter((item) => item !== e.target.value));
    } else {
      setSubcategory([...subcategory, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subcategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subcategory.includes(item.subCategory)
      );
    }
    setFilterProducts(productsCopy);
  };

  const sortProducts = () => {
    let filteredProductsCopy = filterProducts.slice();
    switch (sortType) {
      case "low-high":
        setFilterProducts(
          filteredProductsCopy.sort((a, b) => a.price - b.price)
        );
        break;

      case "high-low":
        setFilterProducts(
          filteredProductsCopy.sort((a, b) => b.price - a.price)
        );
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subcategory]);

  useEffect(() => {
    sortProducts();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/*Filter Section */}
      <div className="min-w-60">
        <p
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
          onClick={() => setShowFilter(!showFilter)}
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt="dropdown"
          />
        </p>
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Men"}
                onChange={toggleCategory}
              />{" "}
              Men
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Women"}
                onChange={toggleCategory}
              />{" "}
              Women
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Kids"}
                onChange={toggleCategory}
              />{" "}
              Kids
            </p>
          </div>
        </div>

        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? "" : "hidden"} sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Topwear"}
                onChange={toggleSubCategory}
              />
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Bottomwear"}
                onChange={toggleSubCategory}
              />
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Winterwear"}
                onChange={toggleSubCategory}
              />
              Winterwear
            </p>
          </div>
        </div>
      </div>

      {/*Products Section */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1="All" text2="COLLECTIONS" />
          <select
            className="border-2 border-gra-300 text-sm px-2"
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="relavent">Sort By Relavence</option>
            <option value="low-high">Sort By Low to High</option>
            <option value="high-low">Sort By High to Low</option>
          </select>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
