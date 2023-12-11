<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class PaymentController extends Controller
{
    public function updatePaymentMethod(Request $request)
    {
        return $request->user()->business
            ->subscription()
            ->redirectToUpdatePaymentMethod();
    }
}
