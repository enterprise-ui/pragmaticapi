import * as fs from 'fs'
import * as yaml from 'js-yaml'
import * as Ajv from 'ajv'


const taskSchema = yaml.safeLoad(fs.readFileSync('./examples/taskmanager_v1/task.Task.yaml', 'utf8'))
const taskStatusSchema = yaml.safeLoad(fs.readFileSync('./examples/taskmanager_v1/task.TaskStatus.yaml', 'utf8'))
const dataFile = JSON.parse(fs.readFileSync('./examples/taskmanager_v1/data.json', 'utf8'))

const ajv = new Ajv({ allErrors: true, verbose: true })

ajv.addSchema(taskSchema)
ajv.addSchema(taskStatusSchema)

const validate = ajv.getSchema('task.Task')
const valid = validate(dataFile)
if (valid) {
    console.log('data is valid')
} else {
    console.log('data is invalid')
    console.log(validate.errors)
}
