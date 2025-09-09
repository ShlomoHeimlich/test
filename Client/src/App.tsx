import Layout from "./components/application-layout/Layout.tsx";
import Content from "./components/application-layout/Content.tsx"
import { BrowserRouter, Routes, Route } from "react-router";
import PostId from "./components/post/Import.PostId.tsx"
import Creat from "./components/post/Creat.tsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Content/>} />
             <Route path="/post/:id" element={<PostId />} />
             <Route path="/creat" element={<Creat />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}
// a {
//   text-decoration: none;
// }
export default App;
