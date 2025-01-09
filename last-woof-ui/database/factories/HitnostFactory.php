<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class HitnostFactory extends Factory
{

    public function definition()
    {
        return [
            'naziv' => $this->faker->word(),
        ];
    }
}
