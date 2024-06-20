<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Cart;
use App\Models\product;
use App\Models\Cart_items;

class CartItemsController extends Controller
{
    public function index()
    {
        $cartItems = Cart_items::all();
        if ($cartItems->isEmpty()) {
            return response()->json(['response' => null]);
        } else {
            return response()->json(['response' => $cartItems]);
        }
    }

    public function add(Request $request)
    {
        $validatedData = $request->validate([
            'cart_id' => 'required|integer',
            'product_id' => 'required|integer',
            'product_qte' => 'required|integer',
        ]);

        // Check if the product already exists in the cart
        $existingCartItem = Cart_items::where('cart_id', $validatedData['cart_id'])
            ->where('product_id', $validatedData['product_id'])
            ->first();

        if ($existingCartItem) {
            // Product already exists in the cart, update the quantity
            $existingCartItem->product_qte += $validatedData['product_qte'];
            $existingCartItem->save();
        } else {
            $cartItem = new Cart_items();
            $cartItem->cart_id = $validatedData['cart_id'];
            $cartItem->product_id = $validatedData['product_id'];
            $cartItem->product_qte = $validatedData['product_qte'];
            $cartItem->save();
        }

        return response()->json(['response'=>true ,'message' => 'Product added to cart successfully'], 200);
    }

    public function CartItems()
    {
        $cart_items = Cart_items::with('product')
        ->get();
        return response()->json($cart_items);
    }

    public function UserCartitems($cartId)
    {
    $cartItems = Cart_items::where('cart_id', $cartId)->get();
    $products = [];

    foreach ($cartItems as $cartItem) {
        $product = Product::find($cartItem->product_id);

        if ($product) {
            $products[] = $product;
        }
    }
    // Return the array of product information
    return response()->json(['response'=> $products]);
    }


    public function RemoveItemCart(){

    }
}
