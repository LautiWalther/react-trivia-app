import { createContext, useContext, useState } from "react";

const Context = createContext(null);

export const DataProvider = ({ children }) => {
    const [questions, setQuestions] = useState([]);
    const [playing, setPlaying] = useState(false);

    return (
        <Context.Provider value={{ questions, setQuestions, playing, setPlaying }}>
            { children }
        </Context.Provider>
    )
}

export const useData = () => {
    return useContext(Context);
}
