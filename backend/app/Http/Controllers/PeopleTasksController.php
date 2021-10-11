<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\People;
use App\Models\PeopleTasks;

class PeopleTasksController extends Controller
{
    public function index(Request $request){
        $tasks = new PeopleTasks();

        if ($request->query('user')) {
            $tasks = $tasks->where(
                'person_id', $request->query('user')
            );
        }

        return response()->json($tasks->with('user')->get());
    }

    public function store(Request $request){
        $validated = $request->validate([
            'title' => 'required',
            'status' => 'in:pendente,fazendo,teste,feito',
        ]);

        $task = PeopleTasks::create([
            'person_id' => $request->input('user_id') ?? NULL,
            'title' => $request->input('title'),
            'description' => $request->input('description') ?? '',
            'status' => $request->input('status'),
        ]);

        return response()->json($task);
    }

    public function show($id) {
        $task = PeopleTasks::findOrFail($id);
        $task['user_id'] = $task['person_id'];
        unset($task['person_id']);

        return response()->json($task);
    }

    public function update(Request $request, $id){
        $validated = $request->validate([
            'title' => 'required',
            'status' => 'in:pendente,fazendo,teste,feito',
        ]);

        $taskUpdate = PeopleTasks::findOrFail($id);
        $taskUpdate->update([
            'person_id' => $request->input('user_id') ?? NULL,
            'title' => $request->input('title'),
            'description' => $request->input('description') ?? '',
            'status' => $request->input('status'),
        ]);


        $task = PeopleTasks::findOrFail($id);
        $task['user_id'] = $task['person_id'];
        unset($task['person_id']);

        return response()->json($task);
    }
    public function destroy($id){
        $task = PeopleTasks::findOrFail($id);
        $task->delete();

        return response()->json([
            'message' => 'Task successfully deleted'
        ]);
    }
}
