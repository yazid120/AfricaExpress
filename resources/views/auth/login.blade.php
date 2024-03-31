<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Admin Template – AfricaExpress</title>
        <meta name="description" content="A high-quality &amp; free Bootstrap admin dashboard template pack that comes with lots of templates and components.">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <link rel="stylesheet" id="main-stylesheet" data-version="1.1.0" href="/style/shards-dashboards.1.1.0.min.css">
        <link rel="stylesheet" href="/style/extras.1.1.0.min.css">
        <script async defer src="https://buttons.github.io/buttons.js"></script>
        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="../js/app.js"></script>
    </head>
<body class="bg-gray-300 h-screen flex items-center justify-center">
    <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 class="text-2xl font-semibold mb-6 text-center">Login</h2>


        <!-- Form -->
        <form action="{{ route('admin.login') }}" method="post">
            @csrf
            <!-- Email Input -->
            <div class="mb-4">
                <label for="email" class="block text-gray-600 text-sm font-medium mb-2">Email Address</label>
                <input type="email" id="email" name="email"
                    class="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                    placeholder="Your email address" required>
            </div>

            <!-- Password Input -->
            <div class="mb-6">
                <label for="password" class="block text-gray-600 text-sm font-medium mb-2">Password</label>
                <input type="password" id="password" name="password"
                    class="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                    placeholder="Your password" required>
            </div>

            <!-- Submit Button -->
            <button type="submit"
                class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
                Login
            </button>
        </form>

        <!-- Additional Links (e.g., Forgot Password, Register) -->
        <div class="mt-6 text-center">
            <a href="{{ url("#") }}" class="text-blue-500 hover:underline">Forgot Password?</a>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js"></script>
    <script src="https://unpkg.com/shards-ui@latest/dist/js/shards.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Sharrre/2.0.1/jquery.sharrre.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</body>
</html>
