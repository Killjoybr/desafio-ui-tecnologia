<?php

namespace App\Http\Controllers;

use App\Models\Produto;
use Illuminate\Http\Request;

class ControladorProdutos extends Controller
{
    public function index()
    {
        return response()->json(Produto::all());
    }

    public function show($id)
    {
        return response()->json(Produto::findOrFail($id));
    }
    
    public function store(Request $request)
    {
        $dadosValidados = $request->validate([
            'nome_do_produto' => 'required|string|max:150',
            'categoria_id' => 'required|exists:categorias,id',
            'valor_do_produto' => 'required|numeric|min:0',
            'data_de_vencimento' => 'date',
            'quantidade_em_estoque' => 'required|numeric|min:0',
            'produto_perecivel' => 'required|boolean|',
        ]);

        $produto = Produto::create($dadosValidados);

        return response()->json(['mensagem' => 'Produto criado com sucesso'], 201);
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

