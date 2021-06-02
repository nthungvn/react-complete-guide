import { useRouter } from 'next/router';
import { Fragment } from 'react';

const NewsDetail = (props) => {
  const router = useRouter();

  return (
    <Fragment>
      <h1>The New Detail Page</h1>
      <h3>{router.query.newsId}</h3>
    </Fragment>
  );
};

export default NewsDetail;
