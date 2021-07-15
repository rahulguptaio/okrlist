import { useState, useEffect } from "react";

export const useFetch = ({ url }) => {
    const [response, setResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const response = await fetch(url);
                if (response.status === 200) {
                    const rawresponse = await response.json();
                    setResponse(rawresponse);
                    setIsLoading(false)
                } else {
                    console.error(`Error ${response.status} ${response.statusText}`);
                }
            } catch (error) {
                console.error(`Error ${error}`);
            }
        })();
    }, [url]);

    return { response, isLoading };
};