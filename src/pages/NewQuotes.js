import { useEffect } from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import { useNavigate } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

const NewQuotes = () => {
  const navigate = useNavigate();
  const { sendRequest, status } = useHttp(addQuote);
  useEffect(() => {
    if (status === "completed") navigate("/quotes");
  }, [status, navigate]);

  const quoteDataHandler = (quoteData) => {
    sendRequest(quoteData);
  };
  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={quoteDataHandler} />
  );
};

export default NewQuotes;
