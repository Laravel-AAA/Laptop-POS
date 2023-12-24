<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\User;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class UserRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, string|array ...$roles): Response
    {
        if (empty(array_diff($roles, User::$ROLES))) {
            if (in_array($request->user()->role, $roles)) {
                return $next($request);
            } else {
                abort(401, 'Unauthorized');
            }
        } else
            abort(403, 'Unexpected role: ', array_diff($roles, User::$ROLES));
    }
}
