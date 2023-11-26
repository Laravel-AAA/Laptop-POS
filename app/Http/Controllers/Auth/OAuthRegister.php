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
            return Socialite::driver($provider)->redirect();
        }
        abort(404);
    }

    public function callback(string $provider)
    {
        if ($provider == 'github' || $provider == 'x' || $provider == 'google') {
            if ($provider == 'x')
                $provider = 'twitter-oauth-2';

            $userInfo = Socialite::driver($provider)->user();

            if (isset($userInfo->name))
                $name = $userInfo->name;
            else
                $name = $userInfo->nickname;

            $emailParam = [];
            $nameParam = [];
            if (isset($name))
                $nameParam['name'] =  $name;
            if (isset($userInfo->email))
                $emailParam['email'] =  $userInfo->email;
            $url = URL::temporarySignedRoute('register', now()->addDay(), $emailParam);
            if (isset($nameParam['name']))
                $url = $url . '&' . http_build_query($nameParam);
            return redirect($url);
        }

        abort(404);
    }
}


/**
 * Github user info structure:
 * {
 * +id: 81206551
 * +nickname: "Ahmad-Alkaf"
 * +name: null
 * +email: "Ahmad.Alkaf.AHK@gmail.com"
 * +avatar: "https://avatars.githubusercontent.com/u/81206551?v=4"
 * +user: array:32 [▼
 *   "login" => "Ahmad-Alkaf"
 *   "id" => 81201236551
 *   "node_id" => "MDQ6VXNabclcjgxMjA2NTUx"
 *   "avatar_url" => "https://avatars.githubusercontent.com/u/81206551?v=4"
 *   "gravatar_id" => ""
 *   "url" => "https://api.github.com/users/Ahmad-Alkaf"
 *   "html_url" => "https://github.com/Ahmad-Alkaf"
 *   "followers_url" => "https://api.github.com/users/Ahmad-Alkaf/followers"
 *   "following_url" => "https://api.github.com/users/Ahmad-Alkaf/following{/other_user}"
 *   "gists_url" => "https://api.github.com/users/Ahmad-Alkaf/gists{/gist_id}"
 *   "starred_url" => "https://api.github.com/users/Ahmad-Alkaf/starred{/owner}{/repo}"
 *   "subscriptions_url" => "https://api.github.com/users/Ahmad-Alkaf/subscriptions"
 *   "organizations_url" => "https://api.github.com/users/Ahmad-Alkaf/orgs"
 *   "repos_url" => "https://api.github.com/users/Ahmad-Alkaf/repos"
 *   "events_url" => "https://api.github.com/users/Ahmad-Alkaf/events{/privacy}"
 *   "received_events_url" => "https://api.github.com/users/Ahmad-Alkaf/received_events"
 *   "type" => "User"
 *   "site_admin" => false
 *   "name" => null
 *   "company" => null
 *   "blog" => "https://ahmad.alkaf.org"
 *   "location" => null
 *   "email" => "Ahmad.Alkaf.AHK@gmail.com"
 *   "hireable" => true
 *   "bio" => null
 *   "twitter_username" => null
 *   "public_repos" => 14
 *   "public_gists" => 0
 *   "followers" => 5
 *   "following" => 8
 *   "created_at" => "2021-03-23T03:02:19Z"
 *   "updated_at" => "2023-11-13T21:41:24Z"
 * ]
 * +attributes: array:6 [▼
 *   "id" => 81206123551
 *   "nodeId" => "MDQ6VXNabclcjgxMjA2NTUx"
 *   "nickname" => "Ahmad-Alkaf"
 *   "name" => null
 *   "email" => "Ahmad.Alkaf.AHK@gmail.com"
 *   "avatar" => "https://avatars.githubusercontent.com/u/81206551?v=4"
 * ]
 * +token: "blah blah"
 * +refreshToken: null
 * +expiresIn: null
 * +approvedScopes: array:1 [▼
 *   0 => "user:email"
 * ]
 *}
 *
 *
 *
 * X user structure:
 *{
 *  +id: "1678450000093642752"
 *  +nickname: "Ahmad_Alkaf_ahk"
 *  +name: "أحمد الكاف"
 *  +email: null
 *  +avatar: "https://pbs.twimg.com/profile_images/1680551353431515137/7i3yzkEt_normal.jpg"
 *  +user: array:4 [▼
 *    "profile_image_url" => "https://pbs.twimg.com/profile_images/1680551353431515137/7i3yzkEt_normal.jpg"
 *    "id" => "1678450000093642752"
 *    "username" => "Ahmad_Alkaf_ahk"
 *    "name" => "أحمد الكاف"
 *  ]
 *  +attributes: array:4 [▼
 *    "id" => "1678450000093642752"
 *    "nickname" => "Ahmad_Alkaf_ahk"
 *    "name" => "أحمد الكاف"
 *    "avatar" => "https://pbs.twimg.com/profile_images/1680551353431515137/7i3yzkEt_normal.jpg"
 *  ]
 *  +token: "blah bah"
 *  +refreshToken: null
 *  +expiresIn: 7200
 *  +approvedScopes: array:2 [▼
 *    0 => "users.read"
 *    1 => "tweet.read"
 *  ]
 *}
 * */
