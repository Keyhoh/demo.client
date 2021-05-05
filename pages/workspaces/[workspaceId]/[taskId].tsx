import {NextPage} from 'next';
import {useRouter} from 'next/router';
import {Layout} from '../../../components/templates/Layout';
import {Box} from '@material-ui/core';

const Page: NextPage = () => {
  const {workspaceId, taskId} = useRouter().query
  return <Layout title={`task: ${taskId}`}>
    <Box>task {taskId} of workspace {workspaceId}</Box>
  </Layout>
}

export default Page
