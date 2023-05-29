# Movie API

- **Movie Endpoint**

  - **GET** - `/movie/` get all the movie
  - **GET** - `/movie/:id` gets movie by id

- **Favorite Endpoint (user auth required)**

  - **GET** - `/favorite/` get all the favorite
  - **GET** - `/favorite/:id` get favorite by id
  - **POST** - `/favorite/` add favorite
    - **id** - _string_ id of the movie
  - **DELETE** - `/favorite/:id` delete favorite by id

- **User Auth Endpoint (token expiration: 20mins)\*\***
  - **POST** - `/auth/signin` sign in
    - **email** - _string_
    - **password** - _string_
  - **POST** - `/auth/signup` sign up
    - **email** - _string_
    - **password** - _string_
    - **firstName** - _string_
    - **lastName** - _string_
  - **GET** - `/auth/verify/:token` email verification
  - **GET** - `/auth/forgot-password/:email` get token for password reset (request limit: 1 request / 5 mins)
  - **PUT** - `/reset-password/:token` reset password
    - **email** - _string_
    - **password** - _string_ new password

# Unit Testing Coverage

Only Favorite and Movie endpoints were unit tested due to time constraint.

# Tech Stack

- NestJS (framework)
- PassportJS (for authentication)
- bcrypt (for password hashing)
- TypeORM
- MySQL (DB)
- NodeMailer (for sending mail)
- Jest (UT)

## Run Docker

- docker compose up -d
- http://localhost:3000
  _Containers: mysql and api_

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test
```
