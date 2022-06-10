<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Category;


class GetController extends Controller
{
    public function getProducts($id=null){
        if($id != null){
            $products = Product::find($id);
        }else{
            $products = Product::all();
        }
        
        return response()->json([
            "status" => "Success",
            "products" => $products
        ], 200);
        }

        public function getCategories($id=null){
            if($id != null){
                $categories = Category::find($id);
            }else{
                $categories = Category::all();
            }
            
            return response()->json([
                "status" => "Success",
                "categories" => $categories
            ], 200);
            }
}
