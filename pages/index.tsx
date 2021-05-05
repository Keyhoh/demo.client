import {NextPage, NextPageContext} from 'next';
import 'whatwg-fetch'
import {IndexPage} from '../components/pages/IndexPage';
import {Workspace} from '../schemas';

type Props = {
  workspaces: Workspace[]
}

const Page: NextPage<Props> = (props: Props) =>
  <IndexPage {...props} href={(workspace: Workspace) => `/${workspace.id}`}/>

Page.getInitialProps = async (_: NextPageContext) => {
  const workspaces: Workspace[] = await fetch(`${process.env.SERVER_HOST}/workspaces`)
    .then(response => response.json())
  return {
    workspaces: workspaces
  }
}

export default Page
