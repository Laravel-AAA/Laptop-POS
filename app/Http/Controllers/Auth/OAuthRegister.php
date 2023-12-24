<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\URL;
use Laravel\Socialite\Facades\Socialite;

class OAuthRegister extends Controller
{
    public function redirect(string $provider)
    {
        if (
            $provider == 'github'
            || $provider == 'x'
            || $provider == 'google'
        ) {
            if ($provider == 'x')
                $provider = 'twitter-oauth-2';
            if (($plan = request()->query('plan')) && ($period = request()->query('period')) && !empty($plan) && !empty($period))
                $with = ['state' => 'plan=' . $plan . '&period=' . $period];
            else $with = [];
            // $query = request
            return Socialite::driver($provider)->with($with)->redirect();
        }
        abort(404);
    }

    public function callback(string $provider)
    {
        if ($provider == 'github' || $provider == 'x' || $provider == 'google') {
            if ($provider == 'x')
                $provider = 'twitter-oauth-2';

            try {
                $userInfo = Socialite::driver($provider)->stateless()->user();
            } catch (\Exception $e) {
                return redirect()->back()->with('error', 'Whoops, something went wrong!');
            }

            if (isset($userInfo->name))
                $name = $userInfo->name;
            else
                $name = $userInfo->nickname;

            $emailParam = [];
            if (isset($userInfo->email))
                $emailParam['email'] =  $userInfo->email;
            $url = URL::temporarySignedRoute('register', now()->addDay(), $emailParam);

            //append other unsigned params
            $otherParams = [];
            if (isset($name))
                $otherParams['name'] =  $name;
            $state = request()->input('state');
            parse_str($state, $result);
            //empty() treats null and empty string as the same falsy value
            if (isset($result) && !empty($result['plan']) && !empty($result['period'])) {
                $otherParams['plan'] = $result['plan'];
                $otherParams['period'] = $result['period'];
            }

            if (isset($otherParams['name']))
                $url = $url . '&' . http_build_query($otherParams);
            return redirect($url);
        }

        abort(404);
    }
}
