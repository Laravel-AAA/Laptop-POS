<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->ulid('id')->primary();
            $table->string('name');
            $table->string('img')->nullable();
            $table->string('barcode', 16)->nullable();
            $table->decimal('price')->nullable();
            $table->integer('stock')->nullable();
            $table->string('description', 500)->nullable();
            $table->timestamps();
            $table->foreignUlid('createdBy_id')->constrained('users');
            $table->foreignUlid('business_id')->constrained('business');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};