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
        //update users
        Schema::table('users', function (Blueprint $table) {
            $table->string('brojTelefona')->after('email');
            $table->string('rolaUsera')->after('brojTelefona');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('brojTelefona');
            $table->dropColumn('rolaUsera');
        });
    }
};
