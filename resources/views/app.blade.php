<!DOCTYPE html>
<html data-theme="light">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    @inertiaHead
</head>
<main>
    <input type="checkbox" value="dark" class="toggle theme-controller" />
    <div class="text-blue-500 dark:text-red-500">BLUE RED</div>

    <body>
        @inertia
    </body>
</main>

</html>
