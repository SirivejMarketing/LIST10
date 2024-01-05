<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class AppController
{
    public function index(): Response
    {
        // event(new \App\Events\Mytest('This is testing data'));
        event(new \App\Events\Dingdong('DONGGGGGG!'));
        return Inertia::render('Index', [
            'title' => 'Laravel 10, Inertia.js, Svelte, Tailwind CSS',
        ]);
    }
}
