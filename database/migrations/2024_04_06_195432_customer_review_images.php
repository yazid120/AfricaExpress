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
        Schema::create('customer_review_images', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('customer_review_id');
            $table->string('image_url'); // Assuming you'll store the image URL
            $table->timestamps();
            # Foreign keys
            $table->foreign('customer_review_id')->references('id')->on('customer_reviews')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customer_review_images');
    }
};
