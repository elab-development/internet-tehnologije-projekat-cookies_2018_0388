<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class UslugaFactory extends Factory
{

    public function definition()
    {
        return [
            'nazivUsluge' => $this->faker->word(),
            'cena' => $this->faker->numberBetween(100, 1000),
        ];
    }
}
