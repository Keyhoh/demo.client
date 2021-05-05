import {NextPage, NextPageContext} from 'next';
import {Box, createStyles, Grid, makeStyles} from '@material-ui/core';
import {Layout} from '../../../components/templates/Layout';
import {useRouter} from 'next/router';
import {Theme} from '@material-ui/core/styles';
import {Task, Workspace} from '../../../schemas';
import {TaskPaper} from '../../../components/molecules/TaskPaper';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      margin: theme.spacing(4)
    }
  })
)

type Props = {
  workspace: Workspace
}

const Page: NextPage<Props> = ({workspace}: Props) => {
  const {workspaceId} = useRouter().query
  const classes = useStyles()
  const tasks = workspace.tasks.map(
    (task: Task) => <TaskPaper href={`/workspace/${workspaceId}/tasks/${task.id}`} task={task}/>
  )
  return <Layout title={workspace.name}>
    <Box className={classes.box}>id: {workspace.id}</Box>
    <Box className={classes.box}>name: {workspace.name}</Box>
    <Grid container spacing={2}>{tasks}</Grid>
  </Layout>
}

Page.getInitialProps = async (context: NextPageContext) => {
  const {workspaceId} = context.query
  const workspace: Workspace = await fetch(`${process.env.SERVER_HOST}/workspaces/${workspaceId}`)
    .then(response => response.json())
  return {
    workspace: workspace
  }
}

export default Page
