import {NextPage, NextPageContext} from 'next';
import {Task, Workspace} from '../../schemas';
import {WorkspacePage} from '../../components/pages/WorkspacePage';

type Props = {
  workspace: Workspace
}

const Page: NextPage<Props> = ({workspace}: Props) => {
  return <WorkspacePage workspace={workspace} href={(task: Task) => `/${workspace.id}/${task.id}`}/>
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
