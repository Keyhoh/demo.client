import {NextPage} from 'next';
import {Box} from '@material-ui/core';
import {useRouter} from 'next/router';

const Page: NextPage = () => {
  const {workspaceId} = useRouter().query
  return <Box>tasks of workspace {workspaceId}</Box>
}

export default Page
