"use client"

export default function Search({searchTerm, setSearchTerm}){
    return(
        <form className="mb-4 flex justify-center items-center">
            <input
                type="text"
                placeholder="Search Quotes or Authors..."
                value={searchTerm}
                onChange={e=>setSearchTerm(e.target.value)}
                className="w-4/5 md:w-1/2 px-5 py-2 border rounded"
            />
        </form>
    )
}