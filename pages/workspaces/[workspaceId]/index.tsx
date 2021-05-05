import {NextPage, NextPageContext} from 'next';
import {Box, createStyles, makeStyles} from '@material-ui/core';
import {Layout} from '../../../components/templates/Layout';
import {useRouter} from 'next/router';
import {Theme} from '@material-ui/core/styles';
import {Task, Workspace} from '../../../schemas';
import {TaskBoard} from '../../../components/organisms/TaskBoard';

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
  return <Layout title={workspace.name}>
    <Box className={classes.box}>id: {workspace.id}</Box>
    <Box className={classes.box}>name: {workspace.name}</Box>
    <TaskBoard href={(task: Task) => `/workspaces/${workspaceId}/tasks/${task.id}`} tasks={workspace.tasks}/>
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
