import Ajv, {Schema, ValidateFunction} from 'ajv';

const ajv = new Ajv()

export interface Task {
  id: string
  title: string
  description: string
}

const TaskSchema: Schema = {
  $id: 'Task',
  type: 'object',
  required: ['id', 'title', 'description'],
  properties: {
    id: {
      type: 'string',
      minLength: 36,
      maxLength: 36,
      pattern: '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$'
    },
    title: {type: 'string', maxLength: 64},
    description: {type: 'string', maxLength: 512}
  }
}

export const TaskValidate: ValidateFunction<Task> = ajv.compile<Task>(TaskSchema)


export interface Workspace {
  id: string
  name: string
  tasks: Task[]
}

export const WorkspaceSchema: Schema = {
  $id: 'Schemas',
  type: 'object',
  required: ['id', 'name', 'tasks'],
  properties: {
    id: {
      type: 'string',
      minLength: 36,
      maxLength: 36,
      pattern: '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$'
    },
    name: {type: 'string', maxLength: 64},
    tasks: {type: 'array', items: {$ref: 'Task'}}
  }
}

export const WorkspaceValidate: ValidateFunction<Workspace> = ajv.compile<Workspace>(WorkspaceSchema)
