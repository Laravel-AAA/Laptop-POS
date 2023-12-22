<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RedirectSubdomain
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (env('APP_DOMAIN') === $request->getHttpHost())
            return $next($request);

        return redirect()->to(str_replace($request->getHttpHost(), env('APP_DOMAIN'), $request->fullUrl()));
    }
}
