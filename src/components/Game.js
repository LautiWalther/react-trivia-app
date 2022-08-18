import { useState } from "react";
import { useData } from "./context";
import Final from "./Final";
import Question from "./Question";


const Game = () => {
    const [showingQ, setShowingQ] = useState(1);
    const [points, setPoints] = useState(0);

    const data = useData();

    var i = 0;
    data.questions.map(question => {
        i++;
        return question.id = i;
    })

    return (
        <>
            {
                showingQ === i ? <Final points={ points } /> :data.questions.map(question => {
                    return question.id === showingQ ? <Question question={question} key={question.id} id={question.id} setQ={ setShowingQ } points={ points } setPoints={ setPoints } /> : '';
                })
            }
        </>
    )
}

export default Game;