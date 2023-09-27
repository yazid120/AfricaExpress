<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />

        <!-- Styles -->
        <style>
            /* ! tailwindcss v3.2.4 | MIT License | https://tailwindcss.com */
        </style>
        <script src="https://cdn.tailwindcss.com"></script>

    </head>
    <body class="antialiased">
        <h1 class="text-2xl">BackEnd end point api</h1>
        @yield('section')
        <div >
            <a href="http://localhost:8000/api/admin/user/show">user</a>
            <a href="">product</a>
            <a href="">categories</a>
            <a href="">sub-categories</a>
        </div>
    </body>
</html>
