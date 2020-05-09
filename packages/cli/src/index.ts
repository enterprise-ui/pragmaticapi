import * as fs from 'fs'
import * as yaml from 'js-yaml'
import * as Ajv from 'ajv'


const schema = yaml.safeLoad(fs.readFileSync('./examples/taskmanager_v1/schema.yaml', 'utf8'))
const file = JSON.parse(fs.readFileSync('./examples/taskmanager_v1/data.json', 'utf8'))

const ajv = new Ajv({ allErrors: true, verbose: true })
const validate = ajv.compile(schema)
const valid = validate(file)
if (!valid) console.log(validate.errors)
