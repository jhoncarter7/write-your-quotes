import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuotes from "./pages/AllQuotes";
import NewQuotes from "./pages/NewQuotes";
import QuotesDetails from "./pages/QuotesDetails";
import NotFound from "./pages/NotFound"

function App() {
  return (
    <Layout> 
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/quotes" />} />
        <Route path="/quotes" element={<AllQuotes />} />
        <Route path="/quotes/:quotesId/*" element={<QuotesDetails />} />
        <Route path="/new-quotes" element={<NewQuotes />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
    </Layout>
  );
}

export default App;
