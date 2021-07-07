<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
    // Route::post('register', 'UserController@register');

    Route::post('login', 'App\Http\Controllers\UserController@authenticate');

    /**
     * Route Untuk Player
     */
    Route::post('register/player', 'App\Http\Controllers\UserController@register_player');
    Route::delete('player/delete', 'App\Http\Controllers\UserController@remove_player');
    Route::post('player/update', 'App\Http\Controllers\UserController@update_player');
    Route::get('player/get', 'App\Http\Controllers\UserController@get_player');
    /**
     * Route Untuk Admin
     */
    Route::post('register/admin', 'App\Http\Controllers\UserController@register_admin');


    Route::group(['middleware' => ['jwt.verify']], function() {
        Route::get('user', 'App\Http\Controllers\UserController@getAuthenticatedUser');
        Route::get('closed', 'DataController@closed');
    });

    Route::group([
        'middleware' => 'jwt.verify',
        'prefix' => 'game'
    ], function ($router) {
        Route::get('/get', [\App\Http\Controllers\GameController::class, 'get']);
        Route::post('/create', [\App\Http\Controllers\GameController::class, 'create']);
        Route::get('/detail', [\App\Http\Controllers\GameController::class, 'detail']);
        Route::post('/update', [\App\Http\Controllers\GameController::class, 'update']);
        Route::delete('/delete', [\App\Http\Controllers\GameController::class, 'delete']);
    });
    Route::group([
        'middleware' => 'jwt.verify',
        'prefix' => 'partisipant'
    ], function ($router) {
        Route::get('/get', [\App\Http\Controllers\PartisipantController::class, 'get']);
        Route::post('/create', [\App\Http\Controllers\PartisipantController::class, 'create']);
        Route::get('/detail', [\App\Http\Controllers\PartisipantController::class, 'detail']);
        Route::post('/update', [\App\Http\Controllers\PartisipantController::class, 'update']);
        Route::delete('/delete', [\App\Http\Controllers\PartisipantController::class, 'delete']);
    });
