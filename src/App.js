import { BrowserRouter, Routes, Route } from "react-router-dom";
import StackComponent from "./components/Stack/Stack";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import QueueComponent from "./components/Queue/Queue";
import SetComponent from "./components/Set/Set";
import Practice from "./components/Practice/Practice";
import Visualize from "./components/Visualize/Visualize";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="practice" element={<Practice />} />
        <Route path="visual" element={<Visualize />} />
        <Route path="visual/stack" element={<StackComponent />} />
        <Route path="visual/queue" element={<QueueComponent />} />
        <Route path="visual/set" element={<SetComponent />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
