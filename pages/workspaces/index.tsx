import {NextPage, NextPageContext} from 'next';
import 'whatwg-fetch'
import {Workspaces} from '../../components/pages/Workspaces';
import {Workspace} from '../../schemas';

type Props = {
  workspaces: Workspace[]
}

const Page: NextPage<Props> = (props: Props) => <Workspaces {...props}/>

Page.getInitialProps = async (_: NextPageContext) => {
  const workspaces: Workspace[] = await fetch(`${process.env.SERVER_HOST}/workspaces`)
    .then(response => response.json())
  return {
    workspaces: workspaces
  }
}

export default Page
