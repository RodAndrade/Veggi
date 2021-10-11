<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePeopleTasksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('people_tasks', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('person_id')->unsigned()->nullable();
            $table->foreign('person_id')
                ->references('id')->on('people')
                ->onDelete('cascade');
            $table->string('title');
            $table->string('description');
            $table->enum('status', [
                'pendente',
                'fazendo',
                'teste',
                'feito'
            ]);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('people_tasks');
    }
}
