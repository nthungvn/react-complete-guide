import { Route, useParams, useRouteMatch } from "react-router";
import Comments from "../components/comments/Comments";

const QuoteDetail = (props) => {
  const params = useParams();
  const match = useRouteMatch();

  return (
    <section>
      <h2>Quote Detail Pages</h2>
      <p>{params.quoteId}</p>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </section>
  );
};

export default QuoteDetail;
