import { Routes, Route } from "react-router-dom"
import DrawResults from "../Pages/DrawResults";
import Layout from "../Layouts/Layout";
import Home from "../Pages/Home";
import AllDrawList from "../Pages/AllDrawList";

const DefaultRouter = () => {
  return(
    <Routes>
      <Route path="/" element={
        <Layout><Home/></Layout>
        }/>
      <Route path="/cekilisler" element={
        <Layout><AllDrawList/></Layout>
        }/>
      <Route path="/cekilis-sonuclari" element={
        <Layout><DrawResults/></Layout>
        }/>
    </Routes>
  )
}

export default DefaultRouter;