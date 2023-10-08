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
        Schema::create('users', function (Blueprint $table) {
            $table->ulid('id')->primary();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();

            //TODO: make these on Business table which will have many users.
            $table->string('businessLongName', 64)->nullable();
            $table->string('businessShortName', 16);
            $table->string('businessLogo')->nullable();
            $table->string('businessPhone',18)->nullable();
            $table->decimal('taxPercent');
            $table->string('businessAddress')->nullable();
            $table->string('taxIdentificationNumber')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};