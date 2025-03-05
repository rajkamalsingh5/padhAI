import { createContext, useState } from "react";
import runChat from "../config/gemini";
//updated gemini api
export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const delaypara = (index, nextWord) => {
        setTimeout(() => {
            setResultData((prev) => prev + nextWord);
        }, 75 * index);
    };

    const newChat = () => {
        setLoading(false);
        setShowResult(false);
        setResultData(""); //
    };

    const onSent = async (prompt) => {
        setResultData(""); 
        setLoading(true);
        setShowResult(true);

        let response;
        let query = prompt !== undefined ? prompt : input;

        setPrevPrompts((prev) => [...prev, query]);
        setRecentPrompt(query);

        try {
            response = await runChat(query);
            if (!response) {
                throw new Error("Invalid response from API");
            }

            const responseText = response?.parts?.[0]?.text || "Error: No response received.";
            let responseArray = responseText.split("**");
            let newResponse = "";

            for (let i = 0; i < responseArray.length; i++) {
                newResponse += i % 2 === 1 ? `<b>${responseArray[i]}</b>` : responseArray[i];
            }

            let formattedResponse = newResponse.split("*").join("<br/>");

            let responseWords = formattedResponse.split(" ");
            responseWords.forEach((word, index) => {
                delaypara(index, word + " ");
            });

        } catch (error) {
            console.error("Error in onSent:", error);
            setResultData("Error: Unable to generate a response.");
        }

        setLoading(false);
        setInput("");
    };

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat,
    };

    return <Context.Provider value={contextValue}>{props.children}</Context.Provider>;
};

export default ContextProvider;
