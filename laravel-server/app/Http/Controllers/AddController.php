<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use app\Models\Product;


class AddController extends Controller{
    
    public function addProduct(Request $request){
        $product = new Product;
        $product->name = $request->name;
        $product->price = $request->price;
        $product->quantity = $request->quantity;
        $product->save();
        
        return response()->json([
            "status" => "Success"
        ], 200);
    }


    public function addCategory(Request $request){
        $category = new Category;
        $category->name = $request->name;
        $category->save();
        
        return response()->json([
            "status" => "Success"
        ], 200);
    }

    };
