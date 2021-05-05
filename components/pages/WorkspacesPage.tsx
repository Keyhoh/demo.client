import {FC} from 'react';
import {Grid} from '@material-ui/core';
import {Layout} from '../templates/Layout';
import {Workspace} from '../../schemas';
import {WorkspacePaper} from '../molecules/WorkspacePaper';

type Props = {
  href: (workspace: Workspace) => string
  workspaces: Workspace[]
}

export const WorkspacesPage: FC<Props> = ({href, workspaces}: Props) => {
  const workspacePapers = workspaces.map(workspace => <WorkspacePaper href={href(workspace)} workspace={workspace}/>)
  return <Layout title='ワークスペース'>
    <Grid container spacing={2}>
      {workspacePapers}
    </Grid>
  </Layout>
}
