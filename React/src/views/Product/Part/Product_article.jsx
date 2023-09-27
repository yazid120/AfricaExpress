import React, { useState,useEffect } from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {AiFillHeart} from "react-icons/ai";
import {BsCartPlusFill} from "react-icons/bs";


function GetProductArticle(link_api,SetproductID){
  useEffect(()=>{
    axios.get(link_api).then(response=>{
    SetproductID(response.data);
    })
  },[])
}

function ProductArticle(){
  const {id} = useParams();
  const [ProductArticle, SetProductArticle] = useState([]);
  const [ProductArticleImages, SetProductArticleImages] = useState([]);

  const [article, SetArticle] = useState('');
  const [articleName, SetarticleName] = useState('');
  const [articlePrice, SetarticlePrice] = useState('');
  const [articleQte, SetarticleQte] = useState(1);
  const GetProduct = GetProductArticle(`http://localhost:8000/api/product/${id}`,SetProductArticle);
  const GetProductImages = GetProductArticle(`http://localhost:8000/api/product/image/${id}`,SetProductArticleImages);

  const imgArticleUri = '../../src/assets/images/Products/articles/';
  const imgArticleMainUri = '../../src/assets/images/Products/';

  const setValueArticle =(value, SetValue)=>{
    SetArticle(value);
  }

  useEffect(()=>{
    if (ProductArticle.length > 0) {
      setValueArticle(ProductArticle[0].image);
    }
  }, [ProductArticle]);

  const HandleIncreaseQte = ()=>{
    SetarticleQte(articleQte +1);
  }
  const HandleDecreaseQte = ()=>{
    if(articleQte >1){
      SetarticleQte(articleQte -1)
    }
  }

  const HandleWishlist = async(e)=>{
    e.preventDefault();
    const whishlistID = localStorage.getItem('wishlist_id');
    const productID = ProductArticle[0]['id'];
    const fromData ={
      'product_id': productID,
      'whishlist_id': parseInt(whishlistID)
    }
  try{
    axios.post('http://localhost:8000/api/wishlist/items/add',fromData)
    .then(response=>{
      console.log(response.data);
    }).then((error)=>{
      // console.error('failed fetching data', error);
    })
  }catch(error){
    console.error(error);
  }

  }

  return(
    <>
  {/* breadcrumb */}
  <div className="container py-4 flex items-center gap-3">
    <a href="../index.html" className="text-primary text-base">
      <i className="fa-solid fa-house" />
    </a>
    <span className="text-sm text-gray-400">
      <i className="fa-solid fa-chevron-right" />
    </span>
    <p className="text-gray-600 font-medium">Product</p>
  </div>
  {/* ./breadcrumb */}
  {/* product-detail */}
  <div className="container p-6 grid grid-cols-2 gap-6">
    <div>
      <img
        src={imgArticleMainUri+article}
        alt="product"
        className="w-full"
      />
      <div className="grid grid-cols-5 gap-4 mt-4" >
      {
      ProductArticleImages.map((article, key)=>(
      <>
      <div key={key}>
        <img
          src={imgArticleUri+article}
          alt="product2"
          className="w-full h-full cursor-pointer border border-primary"
        />
      </div>
      </>
      ))
      }</div>
    </div>

    {
      ProductArticle.map((article, key)=>(
    <div key={key}>
      <h2 className="text-3xl font-medium uppercase mb-2">
        {article.name}
      </h2>
      <div className="flex items-center mb-4">
        <div className="flex gap-1 text-sm text-yellow-400">
          <span>
            <i className="fa-solid fa-star" />
          </span>
          <span>
            <i className="fa-solid fa-star" />
          </span>
          <span>
            <i className="fa-solid fa-star" />
          </span>
          <span>
            <i className="fa-solid fa-star" />
          </span>
          <span>
            <i className="fa-solid fa-star" />
          </span>
        </div>
        <div className="text-xs text-gray-500 ml-3">(150 Reviews)</div>
      </div>
      <div className="space-y-2">
        <p className="text-gray-800 font-semibold space-x-2">
          <span>Availability: </span>
          <span className="text-green-600">In Stock</span>
        </p>
        <p className="space-x-2">
          <span className="text-gray-800 font-semibold">Brand: </span>
          <span className="text-gray-600">{article.brand_name}</span>
        </p>
        <p className="space-x-2">
          <span className="text-gray-800 font-semibold">Category: </span>
          <span className="text-gray-600">{article.cat_name}</span>
        </p>
        <p className="space-x-2">
          <span className="text-gray-800 font-semibold">SKU: </span>
          <span className="text-gray-600">BE45VGRT</span>
        </p>
      </div>
      <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
        <p className="text-xl text-primary font-semibold">{article.price_unit}</p>
        <p className="text-base text-black line-through">$55.00</p>
      </div>
      <label className="" htmlFor="">description</label>
      <p className="mt-4 text-gray-600">
        {article.product_description}
      </p>
      <div className="pt-4">
        <h3 className="text-sm text-gray-800 uppercase mb-1">Size</h3>
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
      {/* quantity article */}
      <div className="mt-4">
        <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
        <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
          <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
          onClick={HandleDecreaseQte}>
            -
          </div>
          <div className="h-8 w-8 text-base flex items-center justify-center">
            {articleQte}
          </div>
          <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
          onClick={HandleIncreaseQte}>
            +
          </div>
        </div>
      </div>
      <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
        <a href="#" className="bg-primary border border-primary text-white bg-gray-700
        px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-gray-500 hover:text-primary transition">
          <BsCartPlusFill className="text-white-500 text-xl"/> Add to cart
        </a>
        <a href="#" className="border border-gray-300 text-gray-600 bg-gray-100 hover:bg-gray-200
         px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition"
         onClick={HandleWishlist}>
          <AiFillHeart className="text-red-500 text-xl"/> Wishlist
        </a>
      </div>
      <div className="flex gap-3 mt-4">
        <a
          href="#"
          className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex
          items-center justify-center"
        >
          <i className="fa-brands fa-facebook-f" />
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex
          items-center justify-center"
        >
          <i className="fa-brands fa-twitter" />
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex
          items-center justify-center"
        >
          <i className="fa-brands fa-instagram" />
        </a>
      </div>
    </div>
    ))
    }
  </div>

  {/* ./product-detail */}
  {/* description */}
  <div className="container pb-16">
    <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">
      Product details
    </h3>
    <div className="w-3/5 pt-6">
      <div className="text-gray-600">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          necessitatibus deleniti natus dolore cum maiores suscipit optio itaque
          voluptatibus veritatis tempora iste facilis non aut sapiente dolor
          quisquam, ex ab.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quae
          accusantium voluptatem blanditiis sapiente voluptatum. Autem ab,
          dolorum assumenda earum veniam eius illo fugiat possimus illum dolor
          totam, ducimus excepturi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quia
          modi ut expedita! Iure molestiae labore cumque nobis quasi fuga,
          quibusdam rem? Temporibus consectetur corrupti rerum veritatis numquam
          labore amet.
        </p>
      </div>
      <table className="table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6">
        <tbody>
          <tr>
            <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
              Color
            </th>
            <th className="py-2 px-4 border border-gray-300 ">
              Blank, Brown, Red
            </th>
          </tr>
          <tr>
            <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
              Material
            </th>
            <th className="py-2 px-4 border border-gray-300 ">Latex</th>
          </tr>
          <tr>
            <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
              Weight
            </th>
            <th className="py-2 px-4 border border-gray-300 ">55kg</th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  {/* ./description */}
  {/* related product */}
  <div className="container pb-16">
    <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
      Related products
    </h2>
    <div className="grid grid-cols-4 gap-6">
      <div className="bg-white shadow rounded overflow-hidden group">
        <div className="relative">
          <img
            src="../assets/images/products/product1.jpg"
            alt="product 1"
            className="w-full"
          />
          <div
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center
              justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
          >
            <a
              href="#"
              className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
              title="view product"
            >
              <i className="fa-solid fa-magnifying-glass" />
            </a>
            <a
              href="#"
              className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
              title="add to wishlist"
            >
              <i className="fa-solid fa-heart" />
            </a>
          </div>
        </div>
        <div className="pt-4 pb-3 px-4">
          <a href="#">
            <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
              Guyer Chair
            </h4>
          </a>
          <div className="flex items-baseline mb-1 space-x-2">
            <p className="text-xl text-primary font-semibold">$45.00</p>
            <p className="text-sm text-gray-400 line-through">$55.90</p>
          </div>
          <div className="flex items-center">
            <div className="flex gap-1 text-sm text-yellow-400">
              <span>
                <i className="fa-solid fa-star" />
              </span>
              <span>
                <i className="fa-solid fa-star" />
              </span>
              <span>
                <i className="fa-solid fa-star" />
              </span>
              <span>
                <i className="fa-solid fa-star" />
              </span>
              <span>
                <i className="fa-solid fa-star" />
              </span>
            </div>
            <div className="text-xs text-gray-500 ml-3">(150)</div>
          </div>
        </div>
        <a
          href="#"
          className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
        >
          Add to cart
        </a>
      </div>
      <div className="bg-white shadow rounded overflow-hidden group">
        <div className="relative">
          <img
            src="../assets/images/products/product4.jpg"
            alt="product 1"
            className="w-full"
          />
          <div
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center
              justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
          >
            <a
              href="#"
              className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
              title="view product"
            >
              <i className="fa-solid fa-magnifying-glass" />
            </a>
            <a
              href="#"
              className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
              title="add to wishlist"
            >
              <i className="fa-solid fa-heart" />
            </a>
          </div>
        </div>
        <div className="pt-4 pb-3 px-4">
          <a href="#">
            <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
              Bed King Size
            </h4>
          </a>
          <div className="flex items-baseline mb-1 space-x-2">
            <p className="text-xl text-primary font-semibold">$45.00</p>
            <p className="text-sm text-gray-400 line-through">$55.90</p>
          </div>
          <div className="flex items-center">
            <div className="flex gap-1 text-sm text-yellow-400">
              <span>
                <i className="fa-solid fa-star" />
              </span>
              <span>
                <i className="fa-solid fa-star" />
              </span>
              <span>
                <i className="fa-solid fa-star" />
              </span>
              <span>
                <i className="fa-solid fa-star" />
              </span>
              <span>
                <i className="fa-solid fa-star" />
              </span>
            </div>
            <div className="text-xs text-gray-500 ml-3">(150)</div>
          </div>
        </div>
        <a href="#" className="block w-full py-1 text-center text-white bg-primary border border-primary
          rounded-b hover:bg-transparent hover:text-primary transition">
          Add to cart
        </a>
      </div>
      <div className="bg-white shadow rounded overflow-hidden group">
        <div className="relative">
          <img
            src="../assets/images/products/product2.jpg"
            alt="product 1"
            className="w-full"
          />
          <div
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center
              justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
          >
            <a
              href="#"
              className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
              title="view product"
            >
              <i className="fa-solid fa-magnifying-glass" />
            </a>
            <a
              href="#"
              className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
              title="add to wishlist"
            >
              <i className="fa-solid fa-heart" />
            </a>
          </div>
        </div>
        <div className="pt-4 pb-3 px-4">
          <a href="#">
            <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
              Couple Sofa
            </h4>
          </a>
          <div className="flex items-baseline mb-1 space-x-2">
            <p className="text-xl text-primary font-semibold">$45.00</p>
            <p className="text-sm text-gray-400 line-through">$55.90</p>
          </div>
          <div className="flex items-center">
            <div className="flex gap-1 text-sm text-yellow-400">
              <span>
                <i className="fa-solid fa-star" />
              </span>
              <span>
                <i className="fa-solid fa-star" />
              </span>
              <span>
                <i className="fa-solid fa-star" />
              </span>
              <span>
                <i className="fa-solid fa-star" />
              </span>
              <span>
                <i className="fa-solid fa-star" />
              </span>
            </div>
            <div className="text-xs text-gray-500 ml-3">(150)</div>
          </div>
        </div>
        <a
          href="#"
          className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
        >
          Add to cart
        </a>
      </div>
      <div className="bg-white shadow rounded overflow-hidden group">
        <div className="relative">
          <img
            src="../assets/images/products/product3.jpg"
            alt="product 1"
            className="w-full"
          />
          <div
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center
              justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
          >
            <a
              href="#"
              className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
              title="view product"
            >
              <i className="fa-solid fa-magnifying-glass" />
            </a>
            <a
              href="#"
              className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
              title="add to wishlist"
            >
              <i className="fa-solid fa-heart" />
            </a>
          </div>
        </div>
        <div className="pt-4 pb-3 px-4">
          <a href="#">
            <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
              Mattrass X
            </h4>
          </a>
          <div className="flex items-baseline mb-1 space-x-2">
            <p className="text-xl text-primary font-semibold">$45.00</p>
            <p className="text-sm text-gray-400 line-through">$55.90</p>
          </div>
          <div className="flex items-center">
            <div className="flex gap-1 text-sm text-yellow-400">
              <span>
                <i className="fa-solid fa-star" />
              </span>
              <span>
                <i className="fa-solid fa-star" />
              </span>
              <span>
                <i className="fa-solid fa-star" />
              </span>
              <span>
                <i className="fa-solid fa-star" />
              </span>
              <span>
                <i className="fa-solid fa-star" />
              </span>
            </div>
            <div className="text-xs text-gray-500 ml-3">(150)</div>
          </div>
        </div>
        <a href="#" className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b
          hover:bg-transparent hover:text-primary transition">
          Add to cart
        </a>
      </div>
    </div>
  </div>
  {/* ./related product */}
    </>
  )
}
export default ProductArticle;
