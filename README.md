# Laptop Accounting

This is a simple Accounting program.

# Workflow

- All commits should be pushed to the `dev` branch.
- When the `dev` branch becomes stable it will be merged to the `staging` branch.
- So that the `staging` branch can be deployed and viewed by the client.
- After that, if the client approves the staging, then it will be merged to `production`.
- The `production` branch is the production environment on the server.


# Development Environment

Clone the repo to your local computer:
```shell
git clone https://github.com/Laravel-AAA/Laptop-Accounting
```
Navigate to the cloned project folder:
```shell
cd laptop-accounting
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

I don't know what is this but I found someone doing it and it looks safe 🙃:
```shell
php artisan storage:link
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
