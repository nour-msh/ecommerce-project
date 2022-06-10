<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use app\Http\Controllers\AddController;
use app\Http\Controllers\GetController;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix("admin")->group(function(){
    Route::post("/add_product", [AddController::class, "addProduct"]);
    Route::post("/add_category", [AddController::class, "addCategory"]);
});

Route::prefix("customer")->group(function(){
    Route::get("/get_products/{id?}", [GetController::class, "getProducts"]);
    Route::get("/get_categories/{id?}", [GetController::class, "getCategories"]);

});