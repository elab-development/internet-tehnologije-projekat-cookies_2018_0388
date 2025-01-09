<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hitnost extends Model
{
    use HasFactory;

    protected $table = 'hitnost';
    
    protected $fillable = [
        'naziv',
    ];
    public function zahtevi()
    {
        return $this->hasMany(Zahtev::class);
    }
}
