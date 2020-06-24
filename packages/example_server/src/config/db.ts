import { resolve } from 'path'
import {ConnectionOptions} from 'typeorm'
import { config as dotenv } from 'dotenv'

dotenv({ path: resolve(__dirname, `../../.env.${process.env.NODE_ENV}`) })

// console.log('process.env.DB_USER', process.env.DB_USER)

const db: ConnectionOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: !!process.env.DB_SYNC,
    // entities: ['src/entities/*.{js,ts}'],
    entities: ['src/**/*.entity.{js,ts}'],
    migrations: ['src/migrations/*.{js,ts}'],
    cli: {
        migrationsDir: 'src/migrations',
        entitiesDir: 'src/entities',
    },
}

export = db // used by CLI