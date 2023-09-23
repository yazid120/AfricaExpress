<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\ProductsController;
use App\Http\Controllers\API\UsersController;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\Api\ProfileController;
use App\Http\Controllers\API\AdminController;
use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\BrandsController;
use App\Models\Category;
use Illuminate\Foundation\Auth\User;

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


//user Authentication Api Controller
Route::post('/signup', [AuthController::class,'signup']);
Route::post('/login', [AuthController::class,'login']);
//Profile user Api Controllers
Route::get('/profile/{id}', [ProfileController::class, 'index']);

//Users Api Controller
Route::get('/admin/user/index/{id}', [UsersController::class, 'index']);
Route::get('/admin/user/show',[UsersController::class, 'show']);
Route::post('/admin/user/create', [UsersController::class, 'create']);
Route::put('/admin/user/update/{id}', [UsersController::class, 'update']);
Route::delete('/admin/user/delete/{id}', [UsersController::class, 'delete']); 
Route::get('/admin/user/delete/{id}', [UsersController::class, 'delete']); 

//Product Api Controller
Route::get('/product/{id}', [ProductsController::class, 'index']);
Route::get('/product',[ProductsController::class, 'show']);
Route::get('/product/article/images', [ProductsController::class, 'ProductArticleImages']);
Route::post('/admin/product/create', [ProductsController::class, 'create']);
Route::get('/admin/product/create', [ProductsController::class, 'create']);

Route::get('/product/brands/index', [BrandsController::class, 'index']);
Route::get('/product/brands/show', [BrandsController::class, 'show']);

//Admin Authentications Api Controller
Route::post('/admin/login', [AdminController::class, 'LoginAdmin']);
Route::post('/admin/signup', [AdminController::class, 'SignupAdmin']);

Route::get('/admin/product/category/index', [CategoryController::class, 'index']);
Route::post('/admin/product/category/create', [CategoryController::class, 'create']);
