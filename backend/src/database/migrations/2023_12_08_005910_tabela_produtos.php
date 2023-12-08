<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        schema::create('produtos', function(){
            $table->id('id');
            $table->string('nome_do_produto', 150);
            $table->foreignId('categoria_id');
            $table->float('valor_do_produto');
            $table->date('data_de_vencimento');
            $table->integer('quantidade_em_estoque');
            $table->boolean('produto_perecivel');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
