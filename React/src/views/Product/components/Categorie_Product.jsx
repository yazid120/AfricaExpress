import React from "react";
import {useEffect,useState} from "react";
import axios from "axios";

function ExtractData(link_api, SetDataExtracter){
  useEffect(()=>{
    axios.get(link_api).then(response=>{
      SetDataExtracter(response.data);
    }).catch(error=> console.error(error));
  },[]);
}

function CategorieProduct({HandleCategoriasation}){
  const [Categories, SetCategories] = useState([]);
  const [brands, SetBrands] = useState([]);
  const productCategories = ExtractData('http://127.0.0.1:8000/api/admin/product/category/index',SetCategories);
  const productBrands = ExtractData("http://127.0.0.1:8000/api/product/brands/index", SetBrands);


  return(
    <>
      {/* ./sidebar */}
    <div className="sideBar_product col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hiddenb hidden md:block">
      <div className="divide-y divide-gray-200 space-y-5">
        <div>
          <h3 className="text-xl text-gray-800 m-4 uppercase font-medium">
            Categories
          </h3>
          <div className="space-y-2">
            {
              Categories.map((Category,id)=>(
                <div className="flex items-center" key={id}>
                  <input
                  type="checkbox"
                  name={Category.cat_name}
                  id={Category.id}
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  value={Category.cat_name}
                  onClick={(event)=>HandleCategoriasation(event.target.value)}/>

                  <label htmlFor={Category.id}
                  className="text-gray-600 ml-3 cusror-pointer">
                    {Category.cat_name}
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(15)</div>
                </div>
              ))
            }
          </div>
        </div>

        <div className="pt-4">
          <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
            Brands
          </h3>
          <div className="space-y-2">

              {
              brands.map((brand)=>(
              <>
              <div className="flex items-center" key={brand.id}>
                <input
                type="checkbox"
                name="brand-1"
                id="brand-1"
                className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label htmlFor="brand-1" className="text-gray-600 ml-3 cusror-pointer"
                 >{brand.brand_name}
                </label>
               <div className="ml-auto text-gray-600 text-sm">(15)</div>
              </div>
              </>
                ))
              }
          </div>
        </div>
        <div className="pt-4">
          <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
            Price
          </h3>
          <div className="mt-4 flex items-center">
            <input
              type="text"
              name="min"
              id="min"
              className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
              placeholder="min"
            />
            <span className="mx-3 text-gray-500">-</span>
            <input
              type="text"
              name="max"
              id="max"
              className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
              placeholder="max"
            />
          </div>
        </div>
        <div className="pt-4">
          <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
            size
          </h3>
          <div className="flex items-center gap-2">
            <div className="size-selector">
              <input type="radio" name="size" id="size-xs" className="hidden" />
              <label
                htmlFor="size-xs"
                className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
              >
                XS
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" id="size-sm" className="hidden" />
              <label
                htmlFor="size-sm"
                className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
              >
                S
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" id="size-m" className="hidden" />
              <label
                htmlFor="size-m"
                className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
              >
                M
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" id="size-l" className="hidden" />
              <label
                htmlFor="size-l"
                className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
              >
                L
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" id="size-xl" className="hidden" />
              <label
                htmlFor="size-xl"
                className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
              >
                XL
              </label>
            </div>
          </div>
        </div>
        <div className="pt-4">
          <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
            Color
          </h3>
          <div className="flex items-center gap-2">
            <div className="color-selector">
              <input type="radio" name="color" id="red" className="hidden" />
              <label
                htmlFor="red"
                className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                style={{ backgroundColor: "#fc3d57" }}
              />
            </div>
            <div className="color-selector">
              <input type="radio" name="color" id="black" className="hidden" />
              <label
                htmlFor="black"
                className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                style={{ backgroundColor: "#000" }}
              />
            </div>
            <div className="color-selector">
              <input type="radio" name="color" id="white" className="hidden" />
              <label
                htmlFor="white"
                className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                style={{ backgroundColor: "#fff" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default CategorieProduct;
