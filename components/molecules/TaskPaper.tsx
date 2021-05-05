import {Task} from '../../schemas';
import {FC} from 'react';
import {Grid, Link, Paper} from '@material-ui/core';

type Props = {
  href: string
  task: Task
}
export const TaskPaper: FC<Props> = ({href, task}: Props) => {
  return <Grid key={task.id} lg={3} md={4} sm={6} xs={6} item>
    <Link href={href}><Paper>{task.id}</Paper></Link>
  </Grid>
}
