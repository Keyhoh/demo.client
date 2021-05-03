import Layout from '../components/Layout'
import {Link} from '@material-ui/core';

const IndexPage = () => (
  <Layout title='Home | Next.js + TypeScript Example'>
    <h1>Hello Next.js 👋</h1>
    <Link href='/workspaces'>workspaces</Link>
  </Layout>
)

export default IndexPage
