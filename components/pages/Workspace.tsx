import {Layout} from '../templates/Layout';
import {Box, createStyles, makeStyles} from '@material-ui/core';
import {TaskBoard} from '../organisms/TaskBoard';
import {Task, Workspace} from '../../schemas';
import {FC} from 'react';
import {Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      margin: theme.spacing(2)
    }
  })
)

type Props = {
  href: (task: Task) => string
  workspace: Workspace
}

export const WorkspacePage: FC<Props> = ({href, workspace}: Props) => {
  const classes = useStyles()
  return <Layout title={workspace.name}>
    <Box className={classes.box}>id: {workspace.id}</Box>
    <Box className={classes.box}>name: {workspace.name}</Box>
    <TaskBoard href={href} tasks={workspace.tasks}/>
  </Layout>
}
