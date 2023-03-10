import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import CommentsList from "./CommentsList";
//
const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();
  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);
  const { quotesId } = params;

  //
  useEffect(() => {
    sendRequest(quotesId);
  }, [sendRequest, quotesId]);
  //
  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  //
  let comments;

  const addedCommentHandler = useCallback(() => {
    sendRequest(quotesId)
  },[sendRequest, quotesId]);
  if (status === "pending") {
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (status === "completed" && loadedComments && loadedComments.length > 0) {
    comments = (
      <div>
        <CommentsList comments={loadedComments} />
      </div>
    );
  }
  if (status === "completed" && (!loadedComments || loadedComments.length === 0)) {
    comments = <p className="centered"> No comments added yet!</p>;
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
          quotesId={quotesId}
          onAddComment={addedCommentHandler}
        />
      )}
      <p>Comments...</p>
      {comments}
    </section>
  );
};

export default Comments;
