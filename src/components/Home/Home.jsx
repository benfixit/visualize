import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    return (
        <div className="wrapper">
            <Link to={"/queue"}>Queue</Link>
            <Link to={"/stack"}>Stack</Link>
            <Link to={"/set"}>Set</Link>
            <Link to={"/dictionary"}>Dictionary</Link>
            <Link to={"/linkedlist"}>LinkedList</Link>
            <Link to={"/tree"}>Tree</Link>
        </div>
    );
}

export default Home;