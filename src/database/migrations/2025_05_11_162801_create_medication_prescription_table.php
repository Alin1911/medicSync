
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('medication_prescription', function (Blueprint $table) {
            $table->id();
            $table->foreignId('prescription_id')->constrained()->onDelete('cascade');
            $table->foreignId('medication_id')->constrained()->onDelete('cascade');
            $table->integer('frecventa'); // ex: 2 (de 2 ori pe zi)
            $table->integer('interval_ore'); // ex: la fiecare 8 ore
            $table->timestamps();
        });
    }

    public function down(): void {
        Schema::dropIfExists('medication_prescription');
    }
};
