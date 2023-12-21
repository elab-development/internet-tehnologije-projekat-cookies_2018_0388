<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ZahtevFactory extends Factory
{

    public function definition()
    {
        return [
            'nazivLjubima' => $this->faker->word(),
            'vrstaLjubimca' => $this->faker->word(),
            'user_id' => $this->faker->numberBetween(1, 10),
            'usluga_id' => $this->faker->numberBetween(1, 6),
            'hitnost_id' => $this->faker->numberBetween(1, 3),
            'status' => $this->faker->randomElement(['u obradi', 'odobren', 'odbijen'])
        ];
    }
}
{

}
