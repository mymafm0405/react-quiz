import { createContext, useContext, useReducer } from "react";

const QuizContext = createContext()

const initialState = {
    questions: [],
    status: "loading",
    index: 0,
    answer: null,
    points: 0,
    highestScore: 0,
    secondsRemaining: null,
    maxPoints: 0,
};

const SEC_PER_QUESTION = 30;

function reducer(state, action) {
    switch (action.type) {
        case "dataReceived":
            const maxPoints = action.payload.reduce((prev, curr) => prev + curr.points, 0);
            console.log('received')
            return { ...state, questions: action.payload, status: "ready", maxPoints: maxPoints };
        case "dataFailed":
            console.log('failed')
            return { ...state, status: "error" };
        case "startQuiz":
            console.log('start')
            return { ...state, status: "active", secondsRemaining: state.questions.length * SEC_PER_QUESTION };
        case "answer":
            console.log('answer')
            const question = state.questions.at(state.index);
            return {
                ...state,
                answer: action.payload,
                points:
                    action.payload === question.correctOption
                        ? state.points + question.points
                        : state.points,
            };
        case "nextQuestion":
            return { ...state, index: state.index + 1, answer: null };
        case "finished":
            return {
                ...state,
                status: "finished",
                highestScore:
                    state.points > state.highestScore ? state.points : state.highestScore,
            };
        case "restart":
            return { ...initialState, status: "ready", questions: state.questions };

        case "tick":
            return {
                ...state,
                secondsRemaining: state.secondsRemaining - 1,
                status: state.secondsRemaining === 0 ? "finished" : state.status,
            };
        default:
            throw new Error("Unknown action");
    }
}

function QuizContextProvider({ children }) {
    const [{questions,
        status,
        index,
        answer,
        points,
        highestScore,
        secondsRemaining,
        maxPoints,}, dispatch] = useReducer(reducer, initialState);

    return <QuizContext.Provider value={
        {
            questions,
            status,
            index,
            answer,
            points,
            highestScore,
            secondsRemaining,
            dispatch,
            maxPoints,
        }
    }>
        {children}
    </QuizContext.Provider>
}

function useQuiz() {
    const context = useContext(QuizContext)
    if (context === undefined) {
        throw new Error('Outside of quiz context scope')
    }
    return context;
}

export { QuizContextProvider, useQuiz }