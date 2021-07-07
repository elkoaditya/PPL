<?php

namespace App\Http\Controllers;

use App\Models\partisipant;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\QueryBuilder;
use Validator;

class PartisipantController extends Controller
{
    public function get()
    {
        $partisipant = QueryBuilder::for(partisipant::class)->allowedFilters('nama', 'point')->get();

        return response()->json([
            'massage' => 'get List Partisipant',
            'items' => $partisipant,
        ]);
    }
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nama' => 'required|string|max:255',
            'id_game' => 'required|integer|max:255',
            'point' => 'required|integer|max:255',
        ]);
        if($validator->fails()){
            return response()->json($validator->errors(), 400);
        }
        try {
            $partisipant = partisipant::create($validator->validated());
        } catch (\Exception $err){
            return response()->json($err);
        }

        return response()->json([
            'massage' => 'Create Partisipant',
            'items' => $partisipant,
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
            $partisipant = partisipant::where($validator->validated())->first();
        } catch (\Exception $err){
            return response()->json($err);
        }
        return response()->json([
            'massage' => 'Detail Partisipant',
            'items' => $partisipant,
        ]);
    }
    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required|integer|max:255',
            'nama' => 'required|string|max:255',
            'id_game' => 'required|integer|max:255',
            'point' => 'required|integer|max:255',
        ]);
        if($validator->fails()){
            return response()->json($validator->errors(), 400);
        }
        try {
            $partisipant = partisipant::where('id', $request->id)->update($validator->validated());
        } catch (\Exception $err){
            return response()->json($err);
        }


        return response()->json([
            'massage' => 'Update Partisipant',
            'items' => $partisipant,
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
            $partisipant = partisipant::where($validator->validated())->delete();
        } catch (\Exception $err){
            return response()->json($err);
        }
        return response()->json([
            'massage' => 'Delete Partisipant',
            'items' => $partisipant,
        ]);
    }
}
