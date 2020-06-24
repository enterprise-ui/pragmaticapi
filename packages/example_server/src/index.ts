import { resolve } from 'path'
import 'reflect-metadata'
import { config as dotenv } from 'dotenv'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ExpressAdapter } from '@nestjs/platform-express'
import express from 'express'

dotenv({ path: resolve(__dirname, `../.env.${process.env.NODE_ENV}`) })

async function bootstrap() {
  const expressApp: express.Application = express()
  const adapter = new ExpressAdapter(expressApp)
  const app = await NestFactory.create(AppModule, adapter)
  app.enableCors()

  const options = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .addBearerAuth()
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('docs', app, document)


  await app.listen(Number(process.env.PORT))
  console.log(`Application is running on: ${await app.getUrl()}`)
}

bootstrap()