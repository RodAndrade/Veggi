<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\People;

class PeopleController extends Controller
{

    public function index(Request $request) {
        $people = new People();

        if ($request->query('name')) {
            $people = $people->where(
                'name',
                'LIKE',
                $this->queryFind($request->query('name'))
            );
        }

        $people = $people->orderBy('name', 'asc');

        return response()->json($people->paginate(10));
    }

    public function show($id) {
        $person = People::findOrFail($id);

        return response()->json($person);
    }

    public function store(Request $request) {
        $validated = $request->validate([
            'name' => 'required',
        ]);

        $data = $request->all();
        $person = People::create($data);

        return response()->json($person);
    }

    public function update(Request $request, $id) {
        $validated = $request->validate([
            'name' => 'required',
        ]);
        $person = People::findOrFail($id);

        $data = $request->all();
        $person->update($data);

        return response()->json($person);
    }

    public function destroy($id) {
        $person = People::findOrFail($id);
        $person->delete();

        return response()->json([
            'message' => 'Person successfully deleted'
        ]);
    }

    private function queryFind($str) {
        return '%' . str_replace(' ', '%', $str) . '%';
    }
}
