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
        Schema::create('bills', function (Blueprint $table) {
            $table->ulid('id')->primary();
            $table->decimal('cashReceived')->nullable();
            $table->timestamps();
            $table->foreignUlid('createdBy_id')->constrained('users'); //created by
            $table->foreignUlid('business_id')
                ->constrained('business')
                ->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bills');
    }
};
