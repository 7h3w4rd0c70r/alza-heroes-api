
# BE for [alza-heroes](https://github.com/7h3w4rd0c70r/alza-heroes.git)

## Start up project

- Clone the project `git clone git@github.com:7h3w4rd0c70r/alza-heroes-api.git`
- Switch to new dir `cd alza-heroes-api`
- Run the project `npm start`

Server is running on port :8080 by default.

## MongoDB

Server requires local instance of MongoDB. By default it's connecting to mongodb://127.0.0.1:27017.

If you wish to change this uri, go the `src/config/env` and create new environment file from template `development.ts` (eg. `patrik-local.ts`). Change MongoDB uri in your environment file and save it.

Then set environment valiable CONFIG_ENV /eg. in your console/ to `your_env_file_name` - eg. on Mac `export CONFIG_ENV=patrik-local`, on Win (probably) `SET CONFIG_ENV=patrik-local`.

Then run the project `npm start`.
