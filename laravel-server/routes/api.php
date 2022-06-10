<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AddController;
use App\Http\Controllers\GetController;
use App\Http\Controllers\AuthController;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix("admin")->group(function(){
    Route::middleware([Admin::class])->group(function(){
    Route::post("/add_product", [AddController::class, "addProduct"]);
    Route::post("/add_category", [AddController::class, "addCategory"]);
});
});

Route::prefix("customer")->group(function(){
    Route::get("/get_products/{id?}", [GetController::class, "getProducts"]);
    Route::get("/get_categories/{id?}", [GetController::class, "getCategories"]);
    Route::post("/register", [AuthController::class, "register"]);
    Route::post("/logout", [AuthController::class, "logout"]);
    Route::post("/login", [AuthController::class, "login"]);
});