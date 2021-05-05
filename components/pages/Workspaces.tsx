import {FC} from 'react';
import {Grid, Paper} from '@material-ui/core';
import {Layout} from '../templates/Layout';

type Props = {
  workspaces: any[]
}
export const Workspaces: FC<Props> = (props: Props) => {
  const items = props.workspaces.map(workspace => <Grid key={workspace.id} lg={3} md={4} sm={6} xs={6}
                                                        item><Paper>{workspace.name || 'unnamed'}</Paper></Grid>)
  return <Layout title='ワークスペース'>
    <Grid container spacing={2}>
      {items}
    </Grid>
  </Layout>
}
