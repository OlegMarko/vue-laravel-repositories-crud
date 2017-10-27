## Build app

### Steps
- git clone `https://github.com/OlegMarko/vue-laravel-repositories-crud.git`
- `cd vue-laravel-repositories-crud`
- run command: `composer install`
- run command: `npm install`
- add permissions 777 to ./public ./storage ./bootstrap
- change `.env` file similar to `.env.example`
- run command: `php artisan migrate`
- run command: `php artisan serve`
- set base url to `resources/assets/config.js`
- visit to if your base url `http://localhost:8000` [http://127.0.0.1:8000](http://127.0.0.1:8000)