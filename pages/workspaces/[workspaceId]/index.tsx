import {NextPage} from 'next';
import {useRouter} from 'next/router';
import {Box} from '@material-ui/core';

const Page: NextPage = () => {
  const {workspaceId} = useRouter().query
  return <Box>{workspaceId}</Box>
}

export default Page
