import {NextPage, NextPageContext} from 'next';
import {List, ListItem} from '@material-ui/core';
import 'whatwg-fetch'

type Props = {
  workspaces: any[]
}

const Page: NextPage<Props> = (props: Props) => {
  const items = props.workspaces.map(workspace => <ListItem>{workspace.id}</ListItem>)
  return <List>
    {items}
  </List>
}

Page.getInitialProps = async (_: NextPageContext) => {
  const workspaces: any[] = await fetch(`${process.env.SERVER_HOST}/workspaces`)
    .then(response => response.json())
  return {
    workspaces: workspaces
  }
}

export default Page
