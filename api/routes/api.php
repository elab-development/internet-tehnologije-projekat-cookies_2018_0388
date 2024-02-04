<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post("login", "App\Http\Controllers\UserController@login");
Route::post("register", "App\Http\Controllers\UserController@register");

//sanctum group
Route::get('usluge', 'App\Http\Controllers\UslugaController@index');
Route::get('rase', 'App\Http\Controllers\ZahtevController@rase');
Route::get('grafik', 'App\Http\Controllers\ZahtevController@zahteviPoUsluzi');

Route::middleware('auth:sanctum')->group(function (){
    Route::post("logout", "App\Http\Controllers\UserController@logout");
    Route::resource("hitnosti", "App\Http\Controllers\HitnostController");
    Route::get('usluge/{id}', 'App\Http\Controllers\UslugaController@show');
    Route::post('usluge', 'App\Http\Controllers\UslugaController@store');
    Route::put('usluge/{id}', 'App\Http\Controllers\UslugaController@update');
    Route::delete('usluge/{id}', 'App\Http\Controllers\UslugaController@destroy');
    Route::get('zahtevi', 'App\Http\Controllers\ZahtevController@index');
    Route::get('zahtevi/{id}', 'App\Http\Controllers\ZahtevController@show');
    Route::post('zahtevi', 'App\Http\Controllers\ZahtevController@store');
    Route::put('zahtevi/{id}', 'App\Http\Controllers\ZahtevController@update');
    Route::delete('zahtevi/{id}', 'App\Http\Controllers\ZahtevController@destroy');
    Route::get('zahtevi/user/{id}', 'App\Http\Controllers\ZahtevController@findByUserId');
    Route::get('zahtevi/usluge/{id}', 'App\Http\Controllers\ZahtevController@findByUslugaId');
    Route::get('zahtevi/hitnosti/{id}', 'App\Http\Controllers\ZahtevController@findByHitnostId');
    Route::get('paginacija', 'App\Http\Controllers\ZahtevController@paginate');
});
