import { useState } from "react";

import { useData } from "./context";

const Menu = () => {
    const data = useData();
    const [difficulty, setDifficulty] = useState('easy');
    const fetchQuestions = async () => {
        const response = await fetch('https://opentdb.com/api.php?amount=10&difficulty='+difficulty+'&type=multiple'); // &category=18
        const json = await response.json()
        data.setQuestions(json.results);
        data.setPlaying(true)
    }

    return (
        <>
            <div className="container text-center bg-white rounded border border-5 shadow p-3 mb-5 bg-body rounded">
                <div className="row">
                    <div className="col">
                        <button type="button" className="btn btn-primary btn-lg" onClick={fetchQuestions}>Play</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <select className="form-select form-select-lg mb-3" style={{width: 'auto', display: 'initial', marginTop: '1em'}} defaultValue='easy' onChange={e => setDifficulty(e.target.value)}>
                            <option value='easy'>Easy</option>
                            <option value='medium'>Medium</option>
                            <option value='hard'>Hard</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu;