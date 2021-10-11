<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\People;

class PeopleTasks extends Model
{
    protected $hidden = ['created_at', 'updated_at'];

    protected $fillable = [
        "person_id",
        "title",
        "description",
        "status",
    ];

    public function user() {
        return $this->belongsTo(People::class, 'person_id', 'id');
    }
}
