<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use GuzzleHttp\Client;

class AddressesController extends Controller
{


    public function fetchAddresses($countryCode = 'usa') {
            // Replace 'YOUR_GEONAMES_USERNAME' with your actual Geonames username
            $username = 'kevin_mak';

            // API endpoint and query parameters
            $url = 'https://secure.geonames.org/searchJSON';
            $queryParams = [
                'country' => $countryCode,
                'maxRows' => 10, // Adjust as needed
                'username' => $username,
            ];

            // Initialize Guzzle client
            $client = new Client();

            try {
                // Make GET request to Geonames API
                $response = $client->request('GET', $url, [
                    'query' => $queryParams,
                ]);

                // Decode JSON response
                $addresses = json_decode($response->getBody(), true);

                // Process the addresses or return them directly
                return $addresses;

            } catch (\Exception $e) {
                // Handle any errors, such as API request failures
                return response()->json(['error' => 'Failed to fetch addresses: ' . $e->getMessage()], 500);
            }
        }
}
