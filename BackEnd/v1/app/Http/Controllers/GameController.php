<?php

namespace App\Http\Controllers;

use App\Models\game;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\QueryBuilder;
use Validator;

class GameController extends Controller
{
    public function get()
    {
        $game = QueryBuilder::for(game::class)->allowedFilters('name', 'type', 'kesusahan')->get();

        return response()->json([
            'massage' => 'get List Game',
            'items' => $game,
        ]);
    }
    public function create(Request $req)
    {
        $validator = Validator::make($req->all(), [
            'name' => 'required|string|max:255',
            'kesusahan' => 'required|string|max:255',
            'type' => 'required|string|max:255',
        ]);
        if($validator->fails()){
            return response()->json($validator->errors(), 400);
        }
        try {
            $game = game::create($validator->validated());
        } catch (\Exception $err){
            return response()->json($err);
        }


        return response()->json([
            'massage' => 'Create Game',
            'items' => $game,
        ]);
    }
    public function detail(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required|integer|max:255',
        ]);
        if($validator->fails()){
            return response()->json($validator->errors(), 400);
        }
        try {
            $game = game::where($validator->validated())->first();
        } catch (\Exception $err){
            return response()->json($err);
        }
        return response()->json([
            'massage' => 'Detail game',
            'items' => $game
        ]);

    }
    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required|integer',
            'name' => 'required|string|max:255',
            'kesusahan' => 'required|string|max:255',
            'type' => 'required|string|max:255',
        ]);
        if($validator->fails()){
            return response()->json($validator->errors(), 400);
        }
        try {
            $game = game::where('id', $request->id)->update($validator->validated());
        } catch (\Exception $err){
            return response()->json($err);
        }
        return response()->json([
            'massage' => 'Update Game',
            'items' => $game,
        ]);
    }
    public function delete(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required|integer|max:255',
        ]);
        if($validator->fails()){
            return response()->json($validator->errors(), 400);
        }
        try {
            $game = game::where($validator->validated())->delete();
        } catch (\Exception $err){
            return response()->json($err);
        }
        return response()->json([
            'massage' => 'remove Game',
            'items' => $game
        ]);
    }
}
