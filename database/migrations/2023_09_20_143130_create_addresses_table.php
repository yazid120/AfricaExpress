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
            $table->unsignedBigInteger('user_id'); // Foreign key for users table
            $table->string('address_line_1', 255);
            $table->string('address_line_2', 255)->nullable();
            $table->string('city', 100)->nullable();
            $table->string('postal_code', 20)->nullable();
            $table->string('country', 100)->nullable();
            $table->string('telephone', 20)->nullable();
            $table->string('mobile', 20)->nullable();
            $table->timestamps();

            // If you have a users table and want to enforce foreign key constraint
            $table->foreign('user_id')->references('id')->on('user')->onDelete('cascade');
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
