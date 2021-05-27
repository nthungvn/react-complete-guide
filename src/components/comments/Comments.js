import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';
import CommentsList from '../comments/CommentsList';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();
  const {
    sendRequest,
    data: loadedComments,
    status,
  } = useHttp(getAllComments, true);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  useEffect(() => {
    sendRequest(params.quoteId);
  }, [sendRequest, params.quoteId, isAddingComment]);

  const addedCommentHandler = useCallback(() => {
    setIsAddingComment(false);
  }, []);

  let comments;
  if (status === 'pending') {
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === 'completed' && loadedComments && loadedComments.length > 0) {
    comments = <CommentsList comments={loadedComments} />;
  }

  if (
    status === 'completed' &&
    !loadedComments &&
    loadedComments.length === 0
  ) {
    comments = <div className="centered">There was no comment yet</div>;
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          quoteId={params.quoteId}
          onAddedComment={addedCommentHandler}
        />
      )}
      {comments}
    </section>
  );
};

export default Comments;
