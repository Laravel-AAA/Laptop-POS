<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="ltr">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    @php
        $favicon = '/favicon.ico';
        $title = 'Laptop POS';
        $description = 'Simplify your sales process and boost your productivity. Organize and manage your product inventory, Efficiently organize product information like names, descriptions, SKUs (Stock Keeping Units), and prices. Stay on top of your inventory with accurate and easily updated product details.';
        $url = env('APP_URL', 'http://localhost:8000');
        $mediumLogo = '/assets/logo/laptop-pos-logo.svg';

    @endphp

    <!-- General -->
    <link rel="icon" type="image/x-icon" href="{{ $favicon }}">
    <title inertia>{{ config('app.name', $title) }}</title>
    <meta name="title" content="{{ $title }}">
    <meta name="description" content="{{ $description }}">

    <!-- Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="{{ $url }}">
    <meta property="og:title" content="{{ $title }}">
    <meta property="og:description" content="{{ $description }}">
    <meta property="og:image" itemprop="image" content="{{ $mediumLogo }}">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary">
    <meta property="twitter:url" content="{{ $url }}">
    <meta property="twitter:title" content="{{ $title }}">
    <meta property="twitter:description" content="{{ $description }}">
    <meta property="twitter:image" content="{{ $mediumLogo }}">
    <meta name="twitter:site" content="@Ahmad_Alkaf_ahk">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:300,400,500,600,700,800,900&display=swap" rel="stylesheet" />
    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/Pages/{$page['component']}.tsx"])
    <!-- Styles -->
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>
