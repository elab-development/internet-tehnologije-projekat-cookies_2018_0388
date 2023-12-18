<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usluga extends Model
{
    use HasFactory;

    protected $table = 'usluge';

    protected $fillable = [
        'nazivUsluge',
        'cena',
    ];
    public function zahtevi()
    {
        return $this->hasMany(Zahtev::class);
    }
}
