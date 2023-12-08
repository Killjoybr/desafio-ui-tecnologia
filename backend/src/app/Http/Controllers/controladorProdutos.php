<?php

namespace App\Http\Controllers;

use App\Models\Produto;
use Illuminate\Http\Request;

class controladorProdutos extends Controller
{
    public function index()
    {
        return Produto::all();
    }

    public function show($id)
    {
        return response()->json(Produto::findOrFail($id));
    }
    
    public function store(Request $request)
    {
        return response()->json(Produto::create($request->all()));
    }

    public function update(Request $request, $id)
    {
        $produto = Produto::findOrFail($id);
        $produto->update($request->all());
        
        return response()->json($produto);
    }

    public function destroy($id)
    {
        $produto = Produto::findOrFail($id);
        $produto->delete();

        return response()->json(null, 204);
    }
}
