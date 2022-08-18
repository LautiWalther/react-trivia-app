import shuffle from "./shuffle";

import { useState, useEffect } from "react";

const Question = (props) => {
    const [answered, setAnswered] = useState(false);
    const [options, setOptions] = useState([]);

    useEffect(() => {

        setOptions(shuffle([props.question.correct_answer, ...props.question.incorrect_answers]));

        return () => {}

    }, [props.id]);

    const checkCorrect = (val) => {
        setAnswered(true);
        if(val.textContent === props.question.correct_answer) {
            props.setPoints(props.points + 1);
        }
        setTimeout(() => {
            props.setQ(props.id + 1);
        }, 2000);
    }
    var i = 0;
    
    return (
        <>
            <h3 dangerouslySetInnerHTML={{__html: props.id + ')' + props.question.question}}></h3>
            <div className="list-group">
                {options.map(option => {
                    i++;
                    return (
                        <a key={ i } href="#!" className={"list-group-item list-group-item-action " + (answered ? (
                            props.question.correct_answer === option ? 'bg-success' : 'bg-danger'
                        ) : '')} onClick={e => !answered ? checkCorrect(e.target) : ''}>{ option }</a>
                    )
                })}
            </div>
        </>
    )
}

export default Question;