<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::create([
            'name'=> 'Saeed (Admin)',
            'password'=> bcrypt('admin-uk-571'),
            'phone_number'=> '447930443571',
        ]);
    }
}
