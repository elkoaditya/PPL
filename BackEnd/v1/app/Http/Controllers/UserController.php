<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Spatie\QueryBuilder\QueryBuilder;
use Spatie\QueryBuilder\QueryBuilderServiceProvider;
use Throwable;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class UserController extends Controller
{
    public function authenticate(Request $request)
    {
        $credentials = $request->only('email', 'password');

        try {
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 400);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }
        $user = Auth::user();
        return response()->json(compact('user', 'token'));
    }

    /********************************************************************************************************
     * Fungsi Untuk Admin
     */
    public function register_admin(Request $request)
    {
            $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);
        if($validator->fails()){
                return response()->json($validator->errors(), 400);
        }
        $user = User::create([
            'name' => $request->get('name'),
            'email' => $request->get('email'),
            'role' => 'admin',
            'password' => Hash::make($request->get('password')),
        ]);
        $token = JWTAuth::fromUser($user);
        return response()->json(compact('user','token'),201);
    }
    /**********************************************************************************************************
     * Fungsi Untuk Player
     */
    public function register_player(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);
        if($validator->fails()){
            return response()->json($validator->errors(), 400);
        }
        $user = User::create([
            'name' => $request->get('name'),
            'email' => $request->get('email'),
            'role' => 'player',
            'password' => Hash::make($request->get('password')),
        ]);
        $token = JWTAuth::fromUser($user);
        return response()->json(compact('user','token'),201);
    }
    public function remove_player(Request $req){
        $validator = Validator::make($req->all(), [
            'id' => 'required|integer|max:255',
        ]);
        if($validator->fails()){
            return response()->json($validator->errors(), 400);
        }

        $response = User::where('id', $req->id)
                    ->where('role', 'player')
                    ->delete();

        if(!$response){
            return response()->json([
                'status' => "Data user gagal di Hapus"
            ]);
        }else{
            $id = (int)$req->id;
            return response()->json([
                'status' => "Id Player ".$id." Berhasil di Hapus",
            ]);
        }
    }
    public function update_player(Request $req){
        $validator = Validator::make($req->all(), [
            'id' => 'required|integer|max:255',
            'name' => 'required|string|max:255',
            'email' => 'required|string|max:255',
            'password' => 'required|string|max:255',
        ]);
        if($validator->fails()){
            return response()->json($validator->errors(), 500);
        }
        $response = User::where('id', $req->id)
                    ->where('role', 'player')
                    ->update([
                        'name' => $req->name,
                        'email' => $req->email,
                        'password' => Hash::make($req->get('password')),
                    ]);
        if(!$response){
            return response()->json([
                'status' => "Data Player gagal di Update",
            ]);
        } else {
            return response()->json([
                'status' => "Berhasil",
            ]);
        }
    }
    public function get_player(Request $req){
        $userPlayer = QueryBuilder::for(User::class)->allowedFilters('name')->get();
        return response()->json(compact('userPlayer'));
    }

    /********************************************************************************************************* */
    public function getAuthenticatedUser(){
        $allUser = QueryBuilder::for(User::class)->allowedFilters('name')->get();
        return response()->json(compact('allUser'));
    }
    public function isLogin() {

    }
}
