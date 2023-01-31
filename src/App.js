import { BrowserRouter, Routes, Route } from "react-router-dom";
import StackComponent from "./components/Stack/Stack";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import QueueComponent from "./components/Queue/Queue";
import SetComponent from "./components/Set/Set";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route element={<Layout />}>
        <Route path="stack" element={<StackComponent />} />
        <Route path="queue" element={<QueueComponent />} />
        <Route path="set" element={<SetComponent />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
