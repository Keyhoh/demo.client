import {NextPage, NextPageContext} from 'next';
import 'whatwg-fetch'
import {WorkspacesPage} from '../../components/pages/WorkspacesPage';
import {Workspace} from '../../schemas';

type Props = {
  workspaces: Workspace[]
}

const Page: NextPage<Props> = (props: Props) =>
  <WorkspacesPage {...props} href={(workspace: Workspace) => `/workspaces/${workspace.id}`}/>

Page.getInitialProps = async (_: NextPageContext) => {
  const workspaces: Workspace[] = await fetch(`${process.env.SERVER_HOST}/workspaces`)
    .then(response => response.json())
  return {
    workspaces: workspaces
  }
}

export default Page
