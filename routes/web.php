<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminAuthController;
use App\Http\Controllers\AdminProductsController;
use App\Http\Controllers\AdminBrandsController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/login', [AdminAuthController::class, 'index'])->name('auth.login');
Route::post('/admin/login', [AdminAuthController::class, 'loginAuth'])->name('admin.login');
Route::post('admin/password/email', [AdminAuthController::class, 'sendResetLinkEmail']);
Route::post('admin/password/reset', [AdminAuthController::class, 'resetpwd']);
# products routes
Route::get('/products', [AdminProductsController::class, 'index']);
Route::get('/products/{product}', [AdminProductsController::class, 'article'])->name('product.article');
Route::post('/products/add', [AdminProductsController::class, 'add'])->name('admin.product.add');
Route::get('/products/{id}/edit', [AdminProductsController::class, 'edit'])->name('admin.product.edit');
Route::put('/products/{id}/update', [AdminProductsController::class, 'update'])->name('admin.product.update');
Route::delete('/products/{id}/delete', [AdminProductsController::class, 'delete'])->name('admin.product.delete');
# brands routes
Route::get('/brands', [AdminBrandsController::class, 'index'])->name('admin.brands.index');

Route::get('/', function () {
    return view('index');
});



