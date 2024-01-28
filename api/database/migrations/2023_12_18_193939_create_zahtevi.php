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
        Schema::create('zahtevi', function (Blueprint $table) {
            $table->id();
            $table->string('nazivLjubimca');
            $table->string('vrstaLjubimca');
            $table->bigInteger('user_id')->unsigned();
            $table->bigInteger('usluga_id')->unsigned();
            $table->bigInteger('hitnost_id')->unsigned();
            $table->string('status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('zahtevi');
    }
};
