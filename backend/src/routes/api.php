<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ControladorProdutos;
use App\Http\Controllers\ControladorCategorias;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::resource('produtos', ControladorProdutos::class);

Route::resource('categorias', ControladorCategorias::class);