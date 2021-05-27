import { Fragment } from 'react';
import { Route, useParams, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import NoQuotesFound from '../components/quotes/NoQuotesFound';

const DUMMY_QUOTES = [
  {
    id: 'q1',
    author: 'Hung',
    text: 'Learning new thing',
  },
  {
    id: 'q2',
    author: 'Phuoc',
    text: 'Learning new thing',
  },
];

const QuoteDetail = (props) => {
  const params = useParams();
  const match = useRouteMatch();

  const selectedQuote = DUMMY_QUOTES.find(
    (quote) => quote.id === params.quoteId
  );
  if (!selectedQuote) {
    return <NoQuotesFound />;
  }

  return (
    <Fragment>
      <HighlightedQuote
        author={selectedQuote.author}
        text={selectedQuote.text}
      />

      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
