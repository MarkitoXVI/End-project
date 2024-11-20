<?php

namespace Database\Seeders;

use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create sample posts for each user
        User::all()->each(function ($user) {
            Post::factory()->count(3)->create([
                'owner_id' => $user->id,
            ]);
        });
    }
}
