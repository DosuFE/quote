"use client"

export default function ButtonQuote({onClick}){
    return(
        <section className="flex flex-col items-center justify-center
        my-5 md:my-10 lg:my-12">
            <button
                    onClick={onClick}
                    className="bg-blue-500 text-white px-4 
                    py-2 lg:px-8 rounded
                    cursor-pointer hover:bg-blue-600 
                    transition-colors hover:scale-105"
                >
                    Generate More Quotes
            </button>
        </section>
    )
}