"use client"
import {useState} from "react"
import Paginate from "./Paginate"
import MainQuestion from "./MainQuestion"
export default function Pagination({questions}: {questions: QuestionType[]}) {
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(6)
    const lastQuestions = currentPage * itemsPerPage
    const firstQuestions = lastQuestions - itemsPerPage
    const currentQuestions = questions.slice(firstQuestions, lastQuestions)
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber)
    return (
        <>
            <div className=" min-h-[927px]">
                <div className="grid grid-cols-none sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {currentQuestions.map((que) => (
                        <MainQuestion key={que.QuestionId} question={que} />
                    ))}
                </div>
            </div>
            <Paginate
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                totalQuestions={questions.length}
                paginate={paginate}
            />
        </>
    )
}
