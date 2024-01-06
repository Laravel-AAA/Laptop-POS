<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\BillController;
use App\Http\Controllers\BusinessController;
use App\Http\Controllers\SubscriptionController;
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
|    Method	   |  URI	                        | Action       | Route Name
|    ----------|--------------------------------|--------------|--------------------
|    GET	   |  /photos	                    | index        | photos.index
|    GET	   |  /photos/create	            | create       | photos.create
|    POST	   |  /photos	                    | store        | photos.store
|    GET	   |  /photos/{photo}               | show         | photos.show
|    GET	   |  /photos/{photo}/edit          | edit         | photos.edit
|    PUT/PATCH |  /photos/{photo}               | update       | photos.update
|    DELETE	   |  /photos/{photo}               | destroy      | photos.destroy
|    POST	   |  /photos/{photo}/restore       | restore      | photos.restore
|    DELETE	   |  /photos/{photo}/force-destroy | forceDestroy | photos.forceDestroy
*/

Route::middleware(['auth', 'verified', 'role:Owner'])->group(function () {

    Route::get('/business', [BusinessController::class, 'edit'])
        ->name('business.edit');
    Route::patch('/business/{business}', [BusinessController::class, 'update'])
        ->name('business.update');
    Route::delete('/business/{business}', [BusinessController::class, 'destroy'])
        ->name('business.destroy');

    // Route::Resource('account', UserController::class)->only(['store', 'update', 'destroy', 'forceDestroy', 'restore']);
    Route::post('/account', [UserController::class, 'store'])->name('account.store');
    Route::patch('/account/{account}', [UserController::class, 'update'])->name('account.update');
    Route::delete('/account/{account}', [UserController::class, 'destroy'])->name('account.destroy');
    Route::post('/account/{id}/restore', [UserController::class, 'restore'])->name('account.restore');
    Route::delete('/account/{id}/force-destroy', [UserController::class, 'forceDestroy'])->name('account.forceDestroy');

    Route::get('/update-payment-method', [SubscriptionController::class, 'updatePaymentMethod'])->name('subscription.updatePaymentMethod');
    Route::get('/subscription/swap-to-advanced/{period}', [SubscriptionController::class, 'swapToAdvanced'])->name('subscription.swapToAdvanced');
    Route::get('/subscription/swap-to-enhanced/{period}', [SubscriptionController::class, 'swapToEnhanced'])->name('subscription.swapToEnhanced');
    Route::get('/subscription/swap-to-basic/{period}', [SubscriptionController::class, 'subscription.swapToBasic'])->name('subscription.swapToBasic');
    Route::get('/subscription/pause', [SubscriptionController::class, 'pause'])->name('subscription.pause');
    Route::get('/subscription/pause-now', [SubscriptionController::class, 'pauseNow'])->name('subscription.pauseNow');
    Route::get('/subscription/resume', [SubscriptionController::class, 'resume'])->name('subscription.resume');
});

Route::middleware(['auth', 'verified', 'subscribed'])->group(function () {
    Route::post('/inventory', [ProductController::class, 'store'])->name('product.store');
    Route::patch('/inventory/{product}', [ProductController::class, 'update'])->name('product.update');
    Route::delete('/inventory/{product}', [ProductController::class, 'destroy'])->name('product.destroy');
    Route::Resource('bill', BillController::class)->only(['store', 'create', 'edit', 'update', 'destroy']);
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/bill', [BillController::class, 'index'])->name('bill.index');
    Route::get('/inventory', [ProductController::class, 'index'])->name('product.index'); //notice the endpoint `/inventory` can easily change but the real deal url is `product.index` that will be used in frontend.
    Route::get('/inventory/{product}', [ProductController::class, 'show'])->name('product.show');


    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
});

Route::middleware(['auth', 'role:Owner', 'unsubscribed'])->group(function () {
    Route::get('/subscribe', [SubscriptionController::class, 'subscribe'])->name('subscription.subscribe');
    Route::get('/subscription/plans', [SubscriptionController::class, 'plans'])->name('subscription.plans');
});

Route::middleware(['auth'])->group(function () {
    Route::get('/profile', [UserController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [UserController::class, 'update'])->name('profile.update');
});

Route::middleware(['guest'])->group(function () {
    Route::get('/', function () {
        return Inertia::render('Guest/Welcome/index', [
            'plansMaxRes' => config('constants.planResources'),
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            //'laravelVersion' => Application::VERSION,//10.25.2
            //'phpVersion' => PHP_VERSION,//8.1.10
        ]);
    });
});

//Anyone
Route::get('/bill/{bill}', [BillController::class, 'show'])->name('bill.show');

//if you changed privacy & terms url you have to redirect the old url; it used on third party such as X(twitter).
Route::get('/privacy-policy', function () {
    return Inertia::render('Anyone/PrivacyPolicy');
})->name('privacyPolicy');
//if you changed privacy & terms url you have to redirect the old url; it is used on third party such as X(twitter).
Route::get('/terms-and-conditions', function () {
    return Inertia::render('Anyone/TermsAndConditions');
})->name('termsAndConditions');
Route::get('/payment-service-policy', function () {
    return Inertia::render('Anyone/PaymentServicePolicy');
})->name('paymentServicePolicy');





require __DIR__ . '/auth.php';
