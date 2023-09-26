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
        Schema::create('brand_categories_pivot', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('cat_id');
            $table->unsignedBigInteger('brand_id');
            $table->timestamps();
            // foreign key
            $table->foreign('cat_id')->references('id')->on('categories');
            $table->foreign('brand_id')->references('id')->on('brands');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('brand_categories_pivot');
    }
};
