<!DOCTYPE html>
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
        <link rel="stylesheet" href="/style/admin/products.css"/>
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="antialiased h-100">
            <div class="color-switcher animated">
              <h5>Accent Color</h5>
              <ul class="accent-colors">
                <li class="accent-primary active" data-color="primary">
                  <i class="material-icons">check</i>
                </li>
                <li class="accent-secondary" data-color="secondary">
                  <i class="material-icons">check</i>
                </li>
                <li class="accent-success" data-color="success">
                  <i class="material-icons">check</i>
                </li>
                <li class="accent-info" data-color="info">
                  <i class="material-icons">check</i>
                </li>
                <li class="accent-warning" data-color="warning">
                  <i class="material-icons">check</i>
                </li>
                <li class="accent-danger" data-color="danger">
                  <i class="material-icons">check</i>
                </li>
              </ul>
              <div class="actions mb-4">
                <a class="mb-2 btn btn-sm btn-primary w-100 d-table mx-auto extra-action" href="https://designrevision.com/downloads/shards-dashboard-lite/">
                  <i class="material-icons">cloud</i> Download</a>
                <a class="mb-2 btn btn-sm btn-white w-100 d-table mx-auto extra-action" href="https://designrevision.com/docs/shards-dashboard-lite">
                  <i class="material-icons">book</i> Documentation</a>
              </div>
              <div class="social-wrapper">
                <div class="social-actions">
                  <h5 class="my-2">Help us Grow</h5>
                  <div class="inner-wrapper">
                    <a class="github-button" href="https://github.com/DesignRevision/shards-dashboard" data-icon="octicon-star" data-show-count="true" aria-label="Star DesignRevision/shards-dashboard on GitHub">Star</a>
                  </div>
                </div>
                <div id="social-share" data-url="https://designrevision.com/downloads/shards-dashboard-lite/" data-text="🔥 Check out Shards Dashboard Lite, a free and beautiful Bootstrap 4 admin dashboard template!" data-title="share"></div>
                <div class="loading-overlay">
                  <div class="spinner"></div>
                </div>
              </div>
              <div class="close">
                <i class="material-icons">close</i>
              </div>
            </div>
            <div class="container-fluid">
              <div class="row">
                @include('partials/sidebar')
                <!-- End Main Sidebar -->
            <main class="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
            <div class="main-navbar sticky-top bg-white">
                @include('partials/navbar')
            </div>
            <!-- / .main-navbar -->
            <div class="main-content-container container-fluid px-4">
              <!-- Page Header -->
              <div class="page-header row no-gutters py-4">
                <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
                  <h3 class="page-title">aperçu du tableau de bord</h3>
                </div>
              </div>
              <!-- End Page Header -->

            <div class="row">
                <div>
                    <button id="openModalBtn" class="bg-blue-500 mb-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add New Product
                    </button>
                </div>
                <!-- Modal -->
                <div id="modal" class="modal-add-product">
                    <div class="modal-content">
                        <span id="closeModalBtn" class="close">&times;</span>
                        <!-- Add New Product Form -->
                        <h2 class="text-lg font-semibold mb-4">Add New Product</h2>
                        <form id="addProductForm">
                            <div class="mb-4">
                                <input type="text" id="productName" placeholder="Product Name" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required>
                            </div>
                            <div class="mb-4">
                                <input type="text" id="priceUnit" placeholder="Price Unit" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required>
                            </div>
                            <div class="mb-4">
                                <label for="productImage">Product Image</label>
                                <input type="file" id="productImage" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" accept="image/*" required>
                            </div>
                            <div class="mb-4">
                                <input type="number" id="quantityAvailable" placeholder="Quantity Available" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required>
                            </div>
                            <div class="mb-4">
                                <select id="brandName" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required>
                                    <option value="">Select Brand</option>
                                    @foreach ($brands as $brand)
                                        <option value="{{ $brand->id }}">{{ $brand->brand_name }}</option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="mb-4">
                                <textarea id="productDescription" placeholder="Product Description" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"></textarea>
                            </div>
                            <button type="submit" class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Product</button>
                        </form>
                    </div>
                </div>

                <!-- products Stats -->
                <div class="products-table">
                    @if ($products->isNotEmpty())
                        <table class="styled-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Brand Name</th>
                                    <th>Price Unit</th>
                                    <th>Quantity Available</th>
                                    <th>Images</th>
                                    <th>description</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($products as $product)
                                    <tr>
                                        <td>{{ $product->id }}</td>
                                        <td>{{ $product->name }}</td>
                                        <td>{{ optional($product->brand)->brand_name }}</td>
                                        <td>{{ $product->price_unit }}</td>
                                        <td>{{ $product->quantity }}</td>
                                        <td class="images">
                                            @if ($product->images !== null && $product->images->isNotEmpty())
                                                @foreach ($product->images as $image)
                                                    <img src="{{ asset($image->image_uri) }}" alt="Product Image">
                                                @endforeach
                                            @else
                                                <!-- Display a default placeholder image or render nothing -->
                                                <img src="{{ asset('placeholder.jpg') }}" alt="Placeholder Image">
                                            @endif
                                        </td>
                                        <td class="product-description">{{ $product->product_description }}</td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    @else
                        <p>No products found.</p>
                    @endif
                </div>



            </div>

        <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js"></script>
        <script src="https://unpkg.com/shards-ui@latest/dist/js/shards.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Sharrre/2.0.1/jquery.sharrre.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <script src="/js/admin/product.js"></script>
    </body>
</html>
