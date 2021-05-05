import {FC} from 'react';
import {Grid, Link, Paper} from '@material-ui/core';
import {Layout} from '../templates/Layout';
import {Workspace} from '../../schemas';

type Props = {
  href: (workspace: Workspace) => string
  workspaces: Workspace[]
}

export const WorkspacesPage: FC<Props> = ({href, workspaces}: Props) => {
  const workspacePapers = workspaces.map(workspace =>
    <Grid key={workspace.id} lg={12} md={12} sm={12} xs={12} item>
      <Link href={href(workspace)}><Paper>{workspace.name || 'unnamed'}</Paper></Link>
    </Grid>)
  return <Layout title='ワークスペース'>
    <Grid container spacing={2}>
      {workspacePapers}
    </Grid>
  </Layout>
}
