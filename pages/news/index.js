import Link from 'next/link';
import { Fragment } from 'react';

const News = (props) => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-great">The Next.js is great</Link>
        </li>
        <li>
          <Link href="/news/another-news">Another News</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default News;
