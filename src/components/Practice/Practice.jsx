import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTable, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Practice.css";

const questions = [
    { status: 0, problem: "First", difficulty: "Easy", code: "JavaScript"},
    { status: 1, problem: "Second", difficulty: "Easy", code: "JavaScript"},
    { status: 1, problem: "Third", difficulty: "Easy", code: "JavaScript"},
    { status: 0, problem: "Fourth", difficulty: "Easy", code: "JavaScript"}
];

const Practice = () => {
    return (
        <main id="wrapper">
            <section className="utils">
                <div className="search">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
                    <input value={""} type={"text"} placeholder="Search" />
                </div>
                <div className="controls">
                    <FontAwesomeIcon icon={faTable} />
                    <select onClick={() => {}}>
                        <option value={"javascript"}>JavaScript</option>
                        <option value={"python"}>Python</option>
                        <option value={"cplusplus"}>C++</option>
                        <option value={"typescript"}>TypeScript</option>
                        <option value={"php"}>PHP</option>
                        <option value={"dart"}>Dart</option>
                        <option value={"ruby"}>Ruby</option>
                    </select>
                </div>
            </section>
            <section className="questions">
                <table>
                    <thead>
                        <tr>
                            <th style={{ flex: 1 }}>Status</th>
                            <th style={{ flex: 1 }}>Problem</th>
                            <th style={{ flex: 1 }}>Difficulty</th>
                            <th style={{ flex: 1 }}>Code</th>
                        </tr>
                    </thead>
                    <tbody>
                        {questions.map((question) => {
                            const {status, problem, difficulty, code} = question;
                            return (
                                <tr>
                                    <td>{status}</td>
                                    <td>{problem}</td>
                                    <td>{difficulty}</td>
                                    <td>{code}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </section>
        </main>
    );
}

export default Practice;