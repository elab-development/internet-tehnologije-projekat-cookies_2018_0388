<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ZahtevSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = \Faker\Factory::create();

        $vrsteLjubimca = [
            'Pas',
            'Macka',
            'Ptica',
            'Ribica',
            'Zec',
            'Kornjaca',
            'Hrcak',
        ];

        $statusi = [
            'Odobren',
            'Odbijen',
            'Na cekanju',
            'Zavrsen'
        ];

        for ($i = 0; $i < 1000; $i++) {
            \App\Models\Zahtev::create([
                'user_id' => \App\Models\User::all()->random()->id,
                'usluga_id' => \App\Models\Usluga::all()->random()->id,
                'hitnost_id' => \App\Models\Hitnost::all()->random()->id,
                'nazivLjubimca' => $faker->name,
                'vrstaLjubimca' => $vrsteLjubimca[rand(0, 6)],
                'status' => $statusi[rand(0, 3)]
            ]);
        }
    }
}
