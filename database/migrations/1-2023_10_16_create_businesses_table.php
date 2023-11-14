<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
//Business table is referenced by User table. So, we need to created before user
return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('business', function (Blueprint $table) {
            $table->ulid('id')->primary();
            $table->string('logo')->nullable();
            $table->string('name', 50);
            $table->string('country', 50);
            $table->string('city', 50);
            $table->string('address');
            $table->string('currency', 5);// '$' or '﷼'
            $table->decimal('taxPercent');// 0.5 is 50% tax rate
            $table->string('countryCallingCode', 6);//Ex: '+966'
            $table->string('phone', 15)->unique();
            $table->string('taxIdentificationNumber')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('business');
    }
};
