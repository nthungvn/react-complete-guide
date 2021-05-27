import { Route, useParams, useRouteMatch } from 'react-router';
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
    return <NoQuotesFound />
  }

  return (
    <section>
      <HighlightedQuote
        author={selectedQuote.author}
        text={selectedQuote.text}
      />
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </section>
  );
};

export default QuoteDetail;
