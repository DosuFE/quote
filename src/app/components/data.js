export default function QuoteData({ datas }) {
    // Prepare the message to share
    const message = `"${datas.quote}" - ${datas.author}`;

    // WhatsApp share URL
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;

    return (

            <div className="bg-slate-100 dark:bg-gray-800 
            shadow-slate-600 dark:shadow-black/40 rounded-lg
            p-4 mb-4 shadow-md w-full mx-auto
            hover:shadow-lg transition-shadow duration-300
            hover:bg-slate-200 dark:hover:bg-gray-700 hover:scale-105 hover:translate-y-[-2px]
            hover:translate-x-[-2px] hover:cursor-pointer hover:transition-transform
            hover:duration-700">
                <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{datas.quote}</p>
                <div className="flex items-start justify-between pt-2">
                    <p className="text-sm pt-2 text-gray-600 dark:text-gray-300">- {datas.author}</p>
                    <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
                >
                    Share to WhatsApp
                </a>
                </div>

            </div>
        
    );
}