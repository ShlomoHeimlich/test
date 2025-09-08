import Layout from "./components/application-layout/Layout.tsx";
import Home from "./components/application-layout/Home.tsx"
import { BrowserRouter, Routes, Route } from "react-router";
import PostId from "../src/components/post/PostId.tsx"
function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>} />
             <Route path="/post/:id" element={<PostId />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
