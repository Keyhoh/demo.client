import {FC} from 'react';
import {Workspace} from '../../schemas';
import {Grid} from '@material-ui/core';
import {WorkspacePaper} from '../molecules/WorkspacePaper';

type Props = {
  href: (workspace: Workspace) => string
  workspaces: Workspace[]
}

export const WorkspaceBoard: FC<Props> = ({href, workspaces}: Props) => {
  return <Grid container spacing={2}>
    {workspaces.map(workspace => <WorkspacePaper key={workspace.id} href={href(workspace)} workspace={workspace}/>)}
  </Grid>

}
