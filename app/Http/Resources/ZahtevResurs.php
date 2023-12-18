<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ZahtevResurs extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'nazivLjubimca' => $this->nazivLjubimca,
            'vrstaLjubimca' => $this->vrstaLjubimca,
            'user' => new UserResurs($this->user),
            'usluga' => new UslugaResurs($this->usluga),
            'hitnost' => new HitnostResurs($this->hitnost),
            'status' => $this->status,
        ];
    }
}
