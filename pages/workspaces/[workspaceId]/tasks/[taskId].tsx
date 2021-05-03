import {NextPage} from 'next';
import {useRouter} from 'next/router';
import {Box} from '@material-ui/core';

const Page: NextPage = () => {
  const {workspaceId, taskId} = useRouter().query
  return <Box>task {taskId} of workspace {workspaceId}</Box>
}

export default Page
