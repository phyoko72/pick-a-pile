export default function Paginate({
    currentPage,
    itemsPerPage,
    totalQuestions,
    paginate,
}: {
    currentPage: number
    itemsPerPage: number
    totalQuestions: number
    paginate: (pageNumber: number) => void
}) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalQuestions / itemsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div className=" w-[300px] flex justify-between my-3 m-auto">
            <button
                onClick={() => paginate(currentPage - 1)}
                className="disabled:opacity-30 active:bg-teal-800 border-white border-2 p-2"
                disabled={currentPage <= 1}
            >
                Prev
            </button>
            {pageNumbers.map((number) => (
                <button
                    key={number}
                    onClick={() => paginate(number)}
                    className={` ${
                        currentPage === number ? "bg-teal-800 " : ""
                    } border-white border-2 p-2 cursor-pointer`}
                >
                    <span>{number}</span>
                </button>
            ))}
            <button
                onClick={() => paginate(currentPage + 1)}
                className="disabled:opacity-30 active:bg-teal-800 border-white border-2 p-2 cursor-pointer`"
                disabled={currentPage >= pageNumbers[pageNumbers.length - 1]}
            >
                Next
            </button>
        </div>
    )
}
