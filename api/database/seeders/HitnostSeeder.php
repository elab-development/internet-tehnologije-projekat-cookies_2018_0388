<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class HitnostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $hitnosti = [
            'Do 24h',
            'Do 72h',
            'Do 7 dana',
        ];

        foreach ($hitnosti as $hitnost) {
            \App\Models\Hitnost::create([
                'naziv' => $hitnost,
            ]);
        }
    }
}
