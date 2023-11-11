<?php

use App\Http\Controllers\BillController;
use App\Http\Controllers\BusinessController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
|
|    Method	   |  URI	               | Action  | Route Name
|    ----------|-----------------------|---------|---------------
|    GET	   |  /photos	           | index   | photos.index
|    GET	   |  /photos/create	   | create  | photos.create
|    POST	   |  /photos	           | store   | photos.store
|    GET	   |  /photos/{photo}      | show    | photos.show
|    GET	   |  /photos/{photo}/edit | edit    | photos.edit
|    PUT/PATCH |  /photos/{photo}      | update  | photos.update
|    DELETE	   |  /photos/{photo}      | destroy | photos.destroy
*/

Route::get('/', function () {
    return Inertia::render('Guest/Welcome/index', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        //'laravelVersion' => Application::VERSION,//10.25.2
        //'phpVersion' => PHP_VERSION,//8.1.10
    ]);
})->middleware(['guest']);

Route::get('/dashboard', function () {
    return Inertia::render('Authenticated/Dashboard/index'); //tsx component location on resources/js/Pages folder
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/inventory', [ProductController::class, 'index'])->name('product.index'); //notice the endpoint `/inventory` can easily change but the real deal url is `product.index` that will be used in frontend.
    Route::post('/inventory', [ProductController::class, 'store'])->name('product.store');
    Route::patch('/inventory/{product}', [ProductController::class, 'update'])->name('product.update');
    Route::delete('/inventory/{product}', [ProductController::class, 'destroy'])->name('product.destroy');
    Route::get('/inventory/{product}', [ProductController::class, 'show'])->name('product.show');

    Route::Resource('bill', BillController::class)->only(['index', 'store', 'create', 'show', 'update', 'destroy']);

    Route::get('/checkout/{bill}', [BillController::class, 'show'])->name('bill.show');
    Route::get('/checkout', [BillController::class, 'create'])->name('bill.create');

    Route::get('/business', [BusinessController::class, 'edit'])
        ->name('business.edit');
    Route::patch('/business/{business}', [BusinessController::class, 'update'])
        ->name('business.update');
    Route::delete('/business/{business}', [BusinessController::class, 'destroy'])
        ->name('business.destroy');

});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [UserController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [UserController::class, 'update'])->name('profile.update');
});

require __DIR__ . '/auth.php';