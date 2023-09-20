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
        Schema::create('addresses', function (Blueprint $table) {
            $table->id();

            $table->string('Country/region', 90)->nullable();
            $table->string('address_street', 35)->nullable();
            $table->string('address_street_apt_floor_build', 45)->nullable();
            $table->string('city', 28)->nullable();
            $table->string('state', 46)->nullable();
            $table->integer('zip_code')->nullable(); 
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('addresses');
    }
};
