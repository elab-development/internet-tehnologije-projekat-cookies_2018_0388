<?php

namespace App\Http\Controllers;

use App\Http\Resources\UslugaResurs;
use App\Models\Usluga;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UslugaController extends Controller
{
    //index

    public function index()
    {
        $usluge = Usluga::all();

        return response()->json([
            'poruka' => 'Uspesno ucitane usluge',
            'podaci' => UslugaResurs::collection($usluge),
        ], 200);
    }

    //show

    public function show($id)
    {
        $usluga = Usluga::find($id);

        if(!$usluga)
        {
            return response()->json([
                'poruka' => 'Ne postoji usluga sa tim id',
            ], 404);
        }

        return response()->json([
            'poruka' => 'Uspesno ucitana usluga',
            'podaci' => new UslugaResurs($usluga),
        ], 200);
    }

    //store

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nazivUsluge' => 'required',
            'cena' => 'required',
        ]);

        if($validator->fails())
        {
            return response()->json([
                'poruka' => 'Niste uneli sve podatke',
                'podaci' => $validator->errors(),
            ], 400);
        }

        $usluga = Usluga::create([
            'nazivUsluge' => $request->nazivUsluge,
            'cena' => $request->cena,
        ]);

        return response()->json([
            'poruka' => 'Uspesno kreirana usluga',
            'podaci' => new UslugaResurs($usluga),
        ], 201);
    }

    //update

    public function update(Request $request, $id)
    {
        $usluga = Usluga::find($id);

        if(!$usluga)
        {
            return response()->json([
                'poruka' => 'Ne postoji usluga sa tim id',
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'nazivUsluge' => 'required',
            'cena' => 'required',
        ]);

        if($validator->fails())
        {
            return response()->json([
                'poruka' => 'Niste uneli sve podatke',
                'podaci' => $validator->errors(),
            ], 400);
        }

        $usluga->update([
            'nazivUsluge' => $request->nazivUsluge,
            'cena' => $request->cena,
        ]);

        return response()->json([
            'poruka' => 'Uspesno izmenjena usluga',
            'podaci' => new UslugaResurs($usluga),
        ], 200);
    }

    //destroy

    public function destroy($id)
    {
        $usluga = Usluga::find($id);

        if(!$usluga)
        {
            return response()->json([
                'poruka' => 'Ne postoji usluga sa tim id',
            ], 404);
        }

        $usluga->delete();

        return response()->json([
            'poruka' => 'Uspesno obrisana usluga',
        ], 200);
    }
}
