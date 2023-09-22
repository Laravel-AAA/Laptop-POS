[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Laravel-AAA_Laptop-POS&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Laravel-AAA_Laptop-POS)

# Laptop Point of Sale

This is a simple Point of Sale (POS) application.

# Workflow

- All commits should be pushed to the `dev` branch.
- When the `dev` branch becomes stable it will be merged to the `staging` branch.
- So that the `staging` branch can be deployed and viewed by the client.
- After that, if the client approves the staging, then it will be merged to `production`.
- The `production` branch is the production environment on the server.


# Development Environment

Clone the repo to your local computer:
```shell
git clone https://github.com/Laravel-AAA/Laptop-POS
```
Navigate to the cloned project folder:
```shell
cd laptop-pos
```
Install the dependencies:
```shell
composer install
```
copy `.env.example` file and rename the copy to `.env`. This file is not in the repo because it is sensitive:
```shell
cp .env.expample .env
```

Configure the database information in the `.env` file (`DB_*`).
```js
DB_DATABASE=yourdatabase_name
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

Sets the `APP_KEY` value in your `.env` file:
```shell
php artisan key:generate
```

Create the `database/migrations` schema:
```shell
php artisan migrate
//OR to drop all existing tables
php artisan migrate:fresh
```

Seed the database with fake data. 
Note: there will be a user with email of `asdf@asdf.asdf` and password of `asdfasdf`, you can login directly with it. 
```bash
php artisan db:seed
```

Install all dependencies:
```shell
npm install
```

Run Vite, to hot module reloading (HMR):
```shell
npm run dev
```

In a separate terminal run the Laravel app:
```shell
php artisan serve
```

# Powered by

- **Laravel** as a backend.
- **Inertia** as a glow between the backend and frontend.
- **React** as a frontend (Typescript).
- **Tailwind** as a salt and black pepper for React.
- **Breeze** to create a starting scaffold of the above (Welcome, Login, Register, ...etc) pages.
- **React Icons** to use icons from different libraries in React.
