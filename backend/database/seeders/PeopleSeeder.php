<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class PeopleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('people')->insert([
            'name' => 'Rodrigo Andrade',
            'email' => 'rcandrade@my.com',
        ]);
        DB::table('people')->insert([
            'name' => 'Jane Doe',
            'email' => 'janedow@gmail.com',
        ]);
        DB::table('people')->insert([
            'name' => 'Lorem Ipsum',
            'email' => 'loremipsum@gmail.com',
        ]);
    }
}
