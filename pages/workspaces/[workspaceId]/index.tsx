import {NextPage, NextPageContext} from 'next';
import {Box} from '@material-ui/core';
import {Layout} from '../../../components/templates/Layout';

type Props = {
  workspace: any
}

const Page: NextPage<Props> = ({workspace}: Props) => {
  return <Layout title={workspace.name}><Box>id: {workspace.id}</Box><Box>name: {workspace.name}</Box></Layout>
}

Page.getInitialProps = async (context: NextPageContext) => {
  const {workspaceId} = context.query
  const workspace: any = await fetch(`${process.env.SERVER_HOST}/workspaces/${workspaceId}`)
    .then(response => response.json())
  return {
    workspace: workspace
  }
}

export default Page
