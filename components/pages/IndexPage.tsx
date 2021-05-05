import {FC} from 'react';
import {Layout} from '../templates/Layout';
import {Workspace} from '../../schemas';
import {WorkspaceBoard} from '../organisms/WorkspaceBoard';

type Props = {
  href: (workspace: Workspace) => string
  workspaces: Workspace[]
}

export const IndexPage: FC<Props> = (props: Props) => {
  return <Layout title='ワークスペース'>
    <WorkspaceBoard {...props}/>
  </Layout>
}
