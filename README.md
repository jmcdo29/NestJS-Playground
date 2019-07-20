# Configuration Module Loading Issue

## The problem

For whatever reason, my `DatabaseModule` is loaded before my `ConfigModule` is even though I am trying to inject `ConfigService` into the `DatabaseModule` to allow for dynamic database configuration after having my environment variables verified. I'm using `DynamicModule` set ups similar to `TypeORM` or the `JwtModule`. In my main project I'm also using a similar set up for the `GraphQLModule` and having no issues with it, only the `DatabaseModule` so I'm trying to figure out what is happening.

## Steps to Reproduce

1. `git clone` this repo
2. `npm install` the dependencies
3. run `npm run start:dev` or `npm run start` and notice the error

## Things to Note

1. The project works fine if in the `DatabaseModule.forRootAsync()` function I use `useFactory` instead of `useClass`
2. This is still using the old nodemon set up with `wait-on`, but I'm noticing the same issues when using an `Nx` workspace.

## The Error

```shell
2:43:00 PM - Starting compilation in watch mode...
[1] 
[0] [nodemon] 1.19.1
[0] [nodemon] to restart at any time, enter `rs`
[0] [nodemon] watching: ~/Documents/code/nestjs-playground/dist/**/*
[0] [nodemon] starting `node dist/main`
[0] [Nest] 7054   - 07/20/2019, 2:43 PM   [NestFactory] Starting Nest application...
[0] Constructing DatabaseModuleConfig
[0] Constructing configService
[0] [Nest] 7054   - 07/20/2019, 2:43 PM   [InstanceLoader] ConfigModule dependencies initialized +34ms
[0] [Nest] 7054   - 07/20/2019, 2:43 PM   [ExceptionHandler] Cannot read property 'get' of undefined +1ms
[0] TypeError: Cannot read property 'get' of undefined
[0]     at DatabaseModuleConfig.<anonymous> (~/Documents/code/nestjs-playground/dist/options/database.config.js:19:51)
[0]     at Generator.next (<anonymous>)
[0]     at ~/Documents/code/nestjs-playground/dist/options/database.config.js:7:71
[0]     at new Promise (<anonymous>)
[0]     at __awaiter (~/Documents/code/nestjs-playground/dist/options/database.config.js:3:12)
[0]     at DatabaseModuleConfig.createDatabaseOptions (~/Documents/code/nestjs-playground/dist/options/database.config.js:17:16)
[0]     at Function.<anonymous> (~/Documents/code/nestjs-playground/dist/database/database.module.js:58:120)
[0]     at Generator.next (<anonymous>)
[0]     at ~/Documents/code/nestjs-playground/dist/database/database.module.js:13:71
[0]     at new Promise (<anonymous>)
[0] [nodemon] app crashed - waiting for file changes before starting...
```