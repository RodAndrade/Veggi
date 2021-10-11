<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\PeopleTasks;

class People extends Model
{
    protected $hidden = ['created_at', 'updated_at'];

    protected $fillable = [
        "name",
        'email',
    ];

    public function tasks() {
        return $this->hasMany(PeopleTasks::class, 'person_id', 'id');
    }
}
