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
        Schema::create('businesses', function (Blueprint $table) {
            $table->ulid('id')->primary();
            $table->string('name', 50);
            $table->string('logo')->nullable();
            $table->string('phone', 15)->unique();
            $table->decimal('taxPercent')->default(0);// 0.5 is 50% tax rate
            $table->string('currency', 10)->default('$');// '$' or '﷼'
            $table->string('country', 50);
            $table->string('city', 50);
            $table->string('address');
            $table->string('taxIdentificationNumber')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('businesses');
    }
};
