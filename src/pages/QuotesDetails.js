import { Fragment, useEffect } from "react";
import { useLocation, Link, Route, Routes, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";


const QuotesDetails = () => {
  const location = useLocation();
  const param = useParams();
  const {sendRequest, status, data: loadedQuote, error} = useHttp(getSingleQuote, true)
  // const isIdLocation = location.pathname.includes("comments")
const {quotesId} = param

useEffect(() => {
  sendRequest(quotesId)
}, [sendRequest, quotesId])

if(status === "pending"){
  return<div className="centred">
    <LoadingSpinner/>
  </div>
}
if(error){
  return <div className="centered">{error}</div>
}

  if (!loadedQuote.text) {
    return <p>no quote found!</p>;
  }
  return (
    <Fragment>
      <HighlightedQuote
        text={loadedQuote.text}
        author={loadedQuote.author}
        id={loadedQuote.id}
      />

  {/* hidding button from appearing on other page  */}
      {location.pathname !== `/quotes/${param.quotesId}/comments` && (
       <div className="centered">
          <Link className="btn--flat" to="comments">
            add comment
          </Link>
        </div>
      )}

      <Routes>
        <Route path="comments" element={<Comments />} />
      </Routes>
    </Fragment>
  );
};

export default QuotesDetails;
