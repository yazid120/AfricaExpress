<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminAuthController;

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

Route::get('/', function () {
    return view('index');
});



