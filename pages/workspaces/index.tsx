import {NextPage, NextPageContext} from 'next';
import 'whatwg-fetch'
import {Workspaces} from '../../components/pages/Workspaces';

type Props = {
  workspaces: any[]
}

const Page: NextPage<Props> = (props: Props) => <Workspaces {...props}/>

Page.getInitialProps = async (_: NextPageContext) => {
  const workspaces: any[] = await fetch(`${process.env.SERVER_HOST}/workspaces`)
    .then(response => response.json())
  return {
    workspaces: workspaces
  }
}

export default Page
