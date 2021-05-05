import {FC} from 'react';
import {Workspace} from '../../schemas';
import {Grid, Link, Paper} from '@material-ui/core';

type Props = {
  href: string
  workspace: Workspace
}

export const WorkspacePaper: FC<Props> = ({href, workspace}: Props) => {
  return <Grid key={workspace.id} lg={12} md={12} sm={12} xs={12} item>
    <Link href={href}><Paper>{workspace.name || 'unnamed'}</Paper></Link>
  </Grid>
}
