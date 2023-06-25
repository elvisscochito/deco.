import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import GetStarted from "../pages/GetStarted";
import "../pages/LandingPage";
import LandingPage from "../pages/LandingPage";
import PageNotFound from "../pages/PageNotFound";
import Post from "../pages/Posts";
import Tweets from "../pages/Tweets";
import Whats from "../pages/Whats";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index path="/" element={<LandingPage />} />
          <Route path="tweets" element={<Tweets />} />
          <Route path="post" element={<Post />} />
          <Route path="whats" element={<Whats />} />
          <Route path="getstarted" element={<GetStarted />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
