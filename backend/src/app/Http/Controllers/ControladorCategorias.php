<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use Illuminate\Http\Request;

class ControladorCategorias extends Controller
{
    public function index()
    {
        return response()->json(Categoria::all());
    }

    public function show($id)
    {
        return response()->json(Categoria::findOrFail($id));
    }
}
