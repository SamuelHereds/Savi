<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="">


    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        {{-- Inline script to detect system dark mode preference and apply it immediately --}}
        <script>
            (function() {
                const appearance = '{{ $appearance ?? "system" }}';

                if (appearance === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                    if (prefersDark) {
                        document.documentElement.classList.add('dark');
                    }
                }
            })();
        </script>

        {{-- Inline style to set the HTML background color based on our theme in app.css --}}
        <style>
            html {
                background-color: oklch(1 0 0);
            }

            html.dark {
                background-color: oklch(0.145 0 0);
            }
        </style>

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <link rel="icon" href="/favicon.ico" sizes="any">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">

        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

        @routes
        @viteReactRefresh
        @vite('resources/js/app.tsx')

        @inertiaHead
    </head>
    <body class="font-sans antialiased">
    <div id="blade-preloader"
     style="position:fixed;inset:0;z-index:50;display:flex;align-items:center;justify-content:center;background:white;">
    <style>
        @keyframes pulse {
            0%, 100% {
                transform: scale(1);
                opacity: 1;
            }
            50% {
                transform: scale(1.05);
                opacity: 0.85;
            }
        }

        #blade-preloader img {
            width: 8rem;
            height: 8rem;
            animation: pulse 1.5s ease-in-out infinite;
        }

        html.dark #blade-preloader {
            background-color: #18181b; /* mesma cor do dark:bg-zinc-900 */
        }
    </style>

    <img
        src="/images/logoazul.svg"
        alt="Logo"
    />
</div>

</div>
        @inertia
    </body>
</html>
