import { useData } from "./context";

const Final = (props) => {
    
    const data = useData();

    const handleReturn = () => {
        data.setPlaying(false);
        data.setQuestions([]);        
    }

    return (
        <>
            <div className="text-bg-info p-3">
                You got { props.points } Points!
            </div>
            <a className="btn btn-primary btn-lg" href="#!" onClick={ handleReturn }>return</a>
        </>
    )
}

export default Final;