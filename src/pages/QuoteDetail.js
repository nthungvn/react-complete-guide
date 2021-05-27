import { useParams } from "react-router";

const QuoteDetail = (props) => {
  const params = useParams();

  return (
    <section>
      <h2>Quote Detail Pages</h2>
      <p>{params.quoteId}</p>
    </section>
  );
};

export default QuoteDetail;
