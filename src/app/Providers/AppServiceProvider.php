<?php

namespace App\Providers;

use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use Laravel\Passport\Passport;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);
        Passport::enablePasswordGrant();
        \Inertia\Inertia::share([
            'auth' => fn() => [
                'user' => auth()->check() ? [
                    'id' => auth()->id(),
                    'name' => auth()->user()->name,
                    'email' => auth()->user()->email,
                    'roles' => auth()->user()->getRoleNames(),
                ] : null,
            ],
        ]);
    }
}
