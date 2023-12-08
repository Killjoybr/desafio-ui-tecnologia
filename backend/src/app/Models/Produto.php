<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produto extends Model
{
    protected $table = 'produtos';

    protected $primaryKey = 'id';

    protected $fillable = [
        'nome_do_produto',
        'categoria_id',
        'valor_do_produto',
        'data_de_vencimento',
        'quantidade_em_estoque',
        'produto_perecivel'
    ];

    public $timestamps = false;

    public function categoria()
    {
        return $this->belongsTo(Categoria::class);
    }
}
