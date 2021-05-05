import {FC} from 'react';
import {Grid, Link, Paper} from '@material-ui/core';
import {Layout} from '../templates/Layout';
import {Workspace} from '../../schemas';

type Props = {
  workspaces: Workspace[]
}

export const WorkspacesPage: FC<Props> = (props: Props) => {
  const workspaces = props.workspaces.map(workspace =>
    <Grid key={workspace.id} lg={12} md={12} sm={12} xs={12} item>
      <Link href={`/workspaces/${workspace.id}`}><Paper>{workspace.name || 'unnamed'}</Paper></Link>
    </Grid>)
  return <Layout title='ワークスペース'>
    <Grid container spacing={2}>
      {workspaces}
    </Grid>
  </Layout>
}
