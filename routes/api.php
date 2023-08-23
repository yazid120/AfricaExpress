<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\ProductsController;
use App\Http\Controllers\API\UsersController;
use App\Http\Controllers\API\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//Users Api Controller
Route::post('/user',[UsersController::class,'store']);

//SignUp Api Controller
Route::get('/signup', [AuthController::class,'signup']);

Route::post('/signup', [AuthController::class,'signup']);

//Login Api Controller
Route::post('/login', [AuthController::class,'login']);

Route::get('/login', [AuthController::class,'login']);

//Product Api Controller
Route::get('/product',[ProductsController::class, 'index']);
//Product Api Controller
Route::post('/product',[ProductsController::class, 'store']);
