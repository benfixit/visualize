import { Link } from "react-router-dom";
import "./Visualize.css";

const Visualize = () => {
    return (
        <div className="wrapper">
            <Link to={"/visual/queue"}>Queue</Link>
            <Link to={"/visual/stack"}>Stack</Link>
            <Link to={"/visual/set"}>Set</Link>
            <Link to={"/visual/dictionary"}>Dictionary</Link>
            <Link to={"/visual/linkedlist"}>LinkedList</Link>
            <Link to={"/visual/tree"}>Tree</Link>
        </div>
    );
}

export default Visualize;