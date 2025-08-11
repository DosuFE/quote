'use client'
import { useEffect, useState } from "react";
import QuoteData from "./data";
import ButtonQuote from "./getQuote";
import ThemeToggle from "./theme-toggle";

export default function Quote() {
    const [quotes, setQuotes] = useState([]);
    const [error, setError] = useState(null);

    const fetchQuotes = async () => {
        try {
            const res = await fetch('https://api.api-ninjas.com/v1/quotes', {
                headers: {
                    'X-Api-Key': 'gHRoCznvWp0raKF0BmxD4A==HgjCDsMocnG8FeCI' 
                }
            });
            if (!res.ok) throw new Error('Failed to fetch quotes');
            const data = await res.json();
            setQuotes((prevQuotes) => [...prevQuotes, ...data]);
            console.log(data); 
        } catch (err) {
            setError(err.message);
        }
    };

    useEffect(() => {
        fetchQuotes(); 
    }, []);

    return (
        <article>
            <div className="flex items-center justify-between mx-4 sm:mx-6 md:mx-8 lg:mx-10 my-4">
                <h1 className="hidden sm:block text-xl font-bold">Quotes</h1>
                <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <ButtonQuote onClick={fetchQuotes} />
                </div>
            </div>
            {error ? (
                <p className="text-red-600 dark:text-red-400 mx-4">Error: {error}</p>
            ) : (
                <main className="grid grid-cols-1 
                md:grid-cols-3 lg:grid-cols-4 
                sm:grid-cols-2 gap-4 mx-4 sm:mx-6 md:mx-8 lg:mx-10">
                    {quotes.map((quote, index) => (
                       <QuoteData key={index} datas={quote}/>
                    ))}
                </main>
            )}
        </article>
    );
}