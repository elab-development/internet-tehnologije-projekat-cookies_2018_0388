<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\Hitnost;
use App\Models\User;
use App\Models\Usluga;

class ZahtevResurs extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $user = User::find($this->user_id);
        $usluga = Usluga::find($this->usluga_id);
        $hitnost = Hitnost::find($this->hitnost_id);
        return [
            'id' => $this->id,
            'nazivLjubimca' => $this->nazivLjubimca,
            'vrstaLjubimca' => $this->vrstaLjubimca,
            'user' => new UserResurs($user),
            'usluga' => new UslugaResurs($usluga),
            'hitnost' => new HitnostResurs($hitnost),
            'status' => $this->status,
        ];
    }
}
