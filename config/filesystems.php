<?php
//disks are consider as folders.
//FILESYSTEM_DISK is determine weather the files will be stored in `local` or in the cloud `s3`.

//for DRY
$cloudDriver = [
    'driver' => 's3',
    'key' => env('AWS_ACCESS_KEY_ID'),
    'secret' => env('AWS_SECRET_ACCESS_KEY'),
    'region' => env('AWS_DEFAULT_REGION'),
    'bucket' => env('AWS_BUCKET'),
    'url' => env('AWS_URL'),
    'endpoint' => env('AWS_ENDPOINT'),
    'use_path_style_endpoint' => env('AWS_USE_PATH_STYLE_ENDPOINT', false),
    'throw' => true,
    'visibility' => 'public',
    'root' => '',
    'scheme' => 'http' //todo: remove this line when the server is served on https.
];
//for DRY
$localDriver = [
    'driver' => 'local',
    'root' => storage_path('app'),
    'throw' => false,
];

$isLocal = env('FILESYSTEM_DISK') == 'local';
if ($isLocal) {
    $appDisk = [...$localDriver, 'root' => storage_path('app')];
    $publicDisk = [
        ...$localDriver,
        'root' => storage_path('app/public'),
        'url' => env('APP_URL') . '/storage',
        'visibility' => 'public',
    ];
    $productsImages = [...$localDriver, 'root' => storage_path('app/public/products-images')];
} else { //Cloud
    $appDisk = [...$cloudDriver, 'root' => 'app'];
    $publicDisk = [...$cloudDriver, 'root' => 'app/public'];
    $productsImages = [...$cloudDriver, 'root' => 'products-images'];
}


return [

    /*
    |--------------------------------------------------------------------------
    | Default Filesystem Disk
    |--------------------------------------------------------------------------
    |
    | Here you may specify the default filesystem disk that should be used
    | by the framework. The "local" disk, as well as a variety of cloud
    | based disks are available to your application. Just store away!
    |
    */

    'default' => env('FILESYSTEM_DISK', 'local'),

    /*
    |--------------------------------------------------------------------------
    | Filesystem Disks
    |--------------------------------------------------------------------------
    |
    | Here you may configure as many filesystem "disks" as you wish, and you
    | may even configure multiple disks of the same driver. Defaults have
    | been set up for each driver as an example of the required values.
    |
    | Supported Drivers: "local", "ftp", "sftp", "s3"
    |
    */

    'disks' => [
        //here local is `app` folder/disk. Don't confuse with local driver.
        'local' => $appDisk,

        'public' => $publicDisk,

        'products-images' => $productsImages,

    ],

    /*
    |--------------------------------------------------------------------------
    | Symbolic Links
    |--------------------------------------------------------------------------
    |
    | Here you may configure the symbolic links that will be created when the
    | `storage:link` Artisan command is executed. The array keys should be
    | the locations of the links and the values should be their targets.
    |
    */

    'links' => [
        //this is used only for local files. On the cloud we don't use such an approach.
        public_path('products-images') => storage_path('app/public/products-images'),
    ],

];