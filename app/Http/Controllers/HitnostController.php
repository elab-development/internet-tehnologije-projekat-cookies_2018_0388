<?php

namespace App\Http\Controllers;

use App\Http\Resources\HitnostResurs;
use App\Models\Hitnost;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class HitnostController extends Controller
{
    //index

    public function index()
    {
        $hitnosti = Hitnost::all();

        return response()->json([
            'poruka' => 'Uspesno ucitane hitnosti',
            'podaci' => HitnostResurs::collection($hitnosti),
        ], 200);
    }

    //show

    public function show($id)
    {
        $hitnost = Hitnost::find($id);

        if(!$hitnost)
        {
            return response()->json([
                'poruka' => 'Ne postoji hitnost sa tim id',
            ], 404);
        }

        return response()->json([
            'poruka' => 'Uspesno ucitana hitnost',
            'podaci' => new HitnostResurs($hitnost),
        ], 200);
    }

    //store

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'naziv' => 'required',
        ]);

        if($validator->fails())
        {
            return response()->json([
                'poruka' => 'Niste uneli sve podatke',
                'podaci' => $validator->errors(),
            ], 400);
        }

        $hitnost = Hitnost::create([
            'naziv' => $request->naziv,
        ]);

        return response()->json([
            'poruka' => 'Uspesno kreirana hitnost',
            'podaci' => new HitnostResurs($hitnost),
        ], 201);
    }

    //update

    public function update(Request $request, $id)
    {
        $hitnost = Hitnost::find($id);

        if(!$hitnost)
        {
            return response()->json([
                'poruka' => 'Ne postoji hitnost sa tim id',
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'naziv' => 'required',
        ]);

        if($validator->fails())
        {
            return response()->json([
                'poruka' => 'Niste uneli sve podatke',
                'podaci' => $validator->errors(),
            ], 400);
        }

        $hitnost->update([
            'naziv' => $request->naziv,
        ]);

        return response()->json([
            'poruka' => 'Uspesno izmenjena hitnost',
            'podaci' => new HitnostResurs($hitnost),
        ], 200);
    }

    //destroy

    public function destroy($id)
    {
        $hitnost = Hitnost::find($id);

        if(!$hitnost)
        {
            return response()->json([
                'poruka' => 'Ne postoji hitnost sa tim id',
            ], 404);
        }

        $hitnost->delete();

        return response()->json([
            'poruka' => 'Uspesno obrisana hitnost',
        ], 200);
    }
}
