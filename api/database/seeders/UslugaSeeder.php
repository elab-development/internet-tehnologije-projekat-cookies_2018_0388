<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UslugaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $usluge = ['Sahrana', 'Kremacija', 'Eutanazija', 'Umrlica', 'Kovceg', 'Urna'];

        foreach ($usluge as $usluga) {
            \App\Models\Usluga::create([
                'nazivUsluge' => $usluga,
                'cena' => rand(100, 1000),
            ]);
        }
    }
}
