import {FC} from 'react';
import {Task} from '../../schemas';
import {Grid} from '@material-ui/core';
import {TaskPaper} from '../molecules/TaskPaper';

type Props = {
  href: (task: Task) => string
  tasks: Task[]
}

export const TaskBoard: FC<Props> = ({href, tasks}: Props) => {
  return <Grid container spacing={2}>
    {tasks.map(task => <TaskPaper key={task.id} href={href(task)} task={task}/>)}
  </Grid>
}
