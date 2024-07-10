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
                <div>
                    <button id="openModalBtn" class="bg-blue-500 mb-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add New Product
                    </button>
                </div>
            <div class="row">
                
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
                                    <th>more infos</th>
                                    <th>option</th>
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
                                        <td>
                                            <a href="/products/{{$product->id}}">more infos</a>
                                        </td>
                                <td>
                            <button  class="text-blue-600 hover:text-blue-900">Update</button>
                              <span class="mx-2">|</span>
                        <form action="{{ route('admin.product.delete', $product->id) }}" method="POST" class="inline">
                            @csrf
                            @method('PUT') <!-- Use PUT method for updating logical_delete -->
                          <button type="submit" class="text-red-600 hover:text-red-900">Delete</button>
                        </form>
                              </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    @else
                        <p>No products found.</p>
                    @endif
                </div>


                <!-- Modal for updating product -->
<div id="updateModal{{ $product->id }}" class="fixed inset-0 z-50 overflow-y-auto">
    <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:flex sm:p-0">
        <!-- Background overlay -->
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <!-- Modal content -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                    <div class="mt-3 text-center sm:mt-0 sm:text-left w-full">
                        <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4">Update Product</h3>
                        <!-- Update form (you can use Livewire/Alpine.js for dynamic form handling) -->
                        <form action="{{ route('admin.product.update', $product->id) }}" method="POST">
                            @csrf
                            @method('PUT')
                            <!-- Form fields for updating product attributes -->
                            <div class="mb-4">
                                <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                                <input type="text" name="name" id="name" value="{{ $product->name }}" class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                            </div>
                            <!-- Add more fields as needed (brand_name, price_unit, etc.) -->
                            <div class="mb-4">
                                <input type="text" value='{{ $product->name }}' id="productName" placeholder="Product Name" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required>
                            </div>
                            <div class="mb-4">
                                <input type="text" value='{{ $product->price_unit }}' id="priceUnit" placeholder="Price Unit" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required>
                            </div>
                            <div class="mb-4">
                                <label for="productImage">Product Image</label>
                                <input type="file" id="productImage" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" accept="image/*" required>
                            </div>
                            <div class="mb-4">
                                <input type="number" value='{{ $product->quantity }}' id="quantityAvailable" placeholder="Quantity Available" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required>
                            </div>
                            <div class="mb-4">
                                <select id="brandName" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required>
                                    <option value="">{{ optional($product->brand)->brand_name }}</option>
                                    @foreach ($brands as $brand)
                                        <option value="{{ $brand->id }}">{{ $brand->brand_name }}</option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="mb-4">
                                <textarea value="{{ $product->product_description }}" id="productDescription"
                                 placeholder="Product Description" class="w-full px-4 py-2 border rounded-md 
                                 focus:outline-none focus:border-blue-500"></textarea>
                            </div>

                            <div class="mt-4">
                                <button type="submit" class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm">
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
