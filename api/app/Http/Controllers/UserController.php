<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResurs;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'password' => 'required',
            'email' => 'required|email',
        ]);

        if($validator->fails())
        {
            return response()->json([
                'poruka' => 'Niste uneli sve podatke',
            ], 400);
        }

        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {

            $user = Auth::user();

            //generate token
            $token = $user->createToken('auth')->plainTextToken;
            return response()->json([
                'poruka' => 'Uspesno ste se ulogovali',
                'podaci' => [
                    'user' => new UserResurs($user),
                    'token' => $token,
                ]
            ], 200);
        }

        return response()->json([
            'poruka' => 'Pogresni email ili password',
        ], 401);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json([
            'poruka' => 'Uspesno ste se izlogovali',
        ], 200);
    }

    //register

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'password' => 'required',
            'email' => 'required|email',
            'name' => 'required',
            'confirm_password' => 'required|same:password',
            'brojTelefona' => 'required',
        ]);

        if($validator->fails())
        {
            return response()->json([
                'poruka' => 'Niste uneli sve podatke',
                'podaci' => $validator->errors()
            ], 400);
        }

        $user = User::create([
            'password' => Hash::make($request->password),
            'email' => $request->email,
            'name' => $request->name,
            'brojTelefona' => $request->brojTelefona,
            'rolaUsera' => User::ROLE_VLASNIK,
        ]);

        $token = $user->createToken('auth')->plainTextToken;

        return response()->json([
            'poruka' => 'Uspesno ste se registrovali',
            'podaci' => [
                'user' => new UserResurs($user),
                'token' => $token,
            ]
        ], 201);
    }

}
