
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('qr_codes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('reteta_id')->constrained('prescriptions')->onDelete('cascade');
            $table->string('cod')->unique();
            $table->boolean('valid')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void {
        Schema::dropIfExists('qr_codes');
    }
};
