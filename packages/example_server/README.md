# API

## Development
```
// Start database
$ docker-compose -f docker-compose-db.yaml up -d
// Run migrations
$ yarn typeorm migration:run
// Run api
$ yarn dev
// Open docs
http://localhost:3001/docs
```
