import Layout from "./components/application-layout/Layout.tsx";
import Content from "./components/application-layout/Content.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import PostId from "./components/post/Import.PostId.tsx";
import Creat from "./components/post/Creat.tsx";
import Login from "./components/auth/Login.tsx";
import Register from "./components/auth/Register.tsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/app"
          element={
            <Layout>
              <Content />
            </Layout>
          }
        />
        <Route
          path="/app/post/:id"
          element={
            <Layout>
              <PostId />
            </Layout>
          }
        />
        <Route
          path="/app/creat"
          element={
            <Layout>
              <Creat />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
