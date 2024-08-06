import { Helmet } from 'react-helmet'
import { useEffect} from 'react';
import BlogList from './BlogList';

function Blog() {
  return (
    <>
    <Helmet>
      <title>Katana's Blog</title>
      <link rel="canonical" href={window.location.href} />
      <meta property="og:description" content="Software Development" />
    </Helmet>
    <BlogList/>
    </>
  )
}

export default Blog