<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Zahtev extends Model
{
    use HasFactory;

    protected $table = 'zahtevi';

    protected $fillable = [
        'nazivLjubima',
        'vrstaLjubimca',
        'user_id',
        'usluga_id',
        'hitnost_id',
        'status',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function usluga()
    {
        return $this->belongsTo(Usluga::class);
    }
    public function hitnost()
    {
        return $this->belongsTo(Hitnost::class);
    }
}
