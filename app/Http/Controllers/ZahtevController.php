<?php

namespace App\Http\Controllers;

use App\Http\Resources\ZahtevResurs;
use App\Models\Zahtev;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ZahtevController extends Controller
{
    //idnex

    public function index()
    {
        $zahtevi = Zahtev::all();

        return response()->json([
            'poruka' => 'Uspesno ucitani zahtevi',
            'podaci' => ZahtevResurs::collection($zahtevi),
        ], 200);
    }

    //show

    public function show($id)
    {
        $zahtev = Zahtev::find($id);

        if(!$zahtev)
        {
            return response()->json([
                'poruka' => 'Ne postoji zahtev sa tim id',
            ], 404);
        }

        return response()->json([
            'poruka' => 'Uspesno ucitan zahtev',
            'podaci' => new ZahtevResurs($zahtev),
        ], 200);
    }

    //store

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nazivLjubimca' => 'required',
            'vrstaLjubimca' => 'required',
            'user_id' => 'required',
            'hitnost_id' => 'required',
            'usluga_id' => 'required',
        ]);

        if($validator->fails())
        {
            return response()->json([
                'poruka' => 'Niste uneli sve podatke',
                'podaci' => $validator->errors(),
            ], 400);
        }

        $zahtev = Zahtev::create([
            'nazivLjubimca' => $request->nazivLjubimca,
            'vrstaLjubimca' => $request->vrstaLjubimca,
            'user_id' => $request->user_id,
            'hitnost_id' => $request->hitnost_id,
            'usluga_id' => $request->usluga_id,
            'status' => 'Na cekanju',
        ]);

        return response()->json([
            'poruka' => 'Uspesno kreiran zahtev',
            'podaci' => new ZahtevResurs($zahtev),
        ], 201);
    }

    //update

    public function update(Request $request, $id)
    {
        $zahtev = Zahtev::find($id);

        if(!$zahtev)
        {
            return response()->json([
                'poruka' => 'Ne postoji zahtev sa tim id',
            ], 404);
        }

        $zahtev->update([
            'nazivLjubimca' => $request->nazivLjubimca,
            'vrstaLjubimca' => $request->vrstaLjubimca,
            'user_id' => $request->user_id,
            'hitnost_id' => $request->hitnost_id,
            'usluga_id' => $request->usluga_id,
        ]);

        return response()->json([
            'poruka' => 'Uspesno izmenjen zahtev',
            'podaci' => new ZahtevResurs($zahtev),
        ], 200);
    }

    //destroy

    public function destroy($id)
    {
        $zahtev = Zahtev::find($id);

        if(!$zahtev)
        {
            return response()->json([
                'poruka' => 'Ne postoji zahtev sa tim id',
            ], 404);
        }

        $zahtev->delete();

        return response()->json([
            'poruka' => 'Uspesno obrisan zahtev',
        ], 200);
    }

    public function findByUserId(Request $request, $id)
    {
        $zahtevi = Zahtev::where('user_id', $id)->get();

        return response()->json([
            'poruka' => 'Uspesno ucitani zahtevi',
            'podaci' => ZahtevResurs::collection($zahtevi),
        ], 200);
    }

    public function findByUslugaId(Request $request, $id)
    {
        $zahtevi = Zahtev::where('usluga_id', $id)->get();

        return response()->json([
            'poruka' => 'Uspesno ucitani zahtevi',
            'podaci' => ZahtevResurs::collection($zahtevi),
        ], 200);
    }

    public function findByHitnostId(Request $request, $id)
    {
        $zahtevi = Zahtev::where('hitnost_id', $id)->get();

        return response()->json([
            'poruka' => 'Uspesno ucitani zahtevi',
            'podaci' => ZahtevResurs::collection($zahtevi),
        ], 200);
    }

    public function paginate(Request $request)
    {
        $perPage = $request->query('per_page', 5);

        $zahtevi = Zahtev::paginate($perPage);

        return response()->json([
            'poruka' => 'Uspesno ucitani zahtevi',
            'podaci' => ZahtevResurs::collection($zahtevi),
        ], 200);
    }
}
