<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Events\RouteLinkStored;

class CookieController extends Controller
{

    public function storeRouteLink(Request $request)
    {
        // Your logic to store the route link...

        $routeLink = $request->url(); // Get the full URL, including query parameters

        // Broadcast the event
        broadcast(new RouteLinkStored($routeLink));

        return response()->json(['message' => 'Route link stored successfully']);
    }
}
