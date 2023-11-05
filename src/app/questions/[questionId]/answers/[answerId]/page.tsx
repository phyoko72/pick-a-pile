import {mmFont} from "@/app/layout"
import BackBtn from "@/components/BackBtn"
import data from "@/data/PickAPile.json"
import Image from "next/image"
import {notFound} from "next/navigation"
export default function AnswerPage({
    params: {questionId, answerId},
}: {
    params: {questionId: string; answerId: string}
}) {
    const result = data.Answers.find(
        (ans) =>
            ans.AnswerId === Number(answerId) &&
            ans.QuestionId === Number(questionId)
    )
    if (!result) notFound()
    return (
        <>
            <BackBtn link={`/questions/${result.QuestionId}`} />
            <div className=" grid grid-cols-none md:grid-cols-2 gap-3 md:gap-6 items-center justify-around">
                <div className=" w-full h-[400px] relative">
                    <Image
                        src={`/${result.AnswerImageUrl}`}
                        alt={result.AnswerName}
                        fill
                        className=" object-cover rounded"
                    />
                </div>
                <div>
                    <h1 className=" text-4xl font-semibold my-4 text-center">
                        {result.AnswerName}
                    </h1>
                    <p
                        className={`${mmFont.className} text-lg text-white/60 text-center leading-9`}
                    >
                        {result.AnswerDesp}
                    </p>
                </div>
            </div>
        </>
    )
}

export async function generateStaticParams({
    params: {questionId},
}: {
    params: {questionId: string}
}) {
    const filteredAnswers = data.Answers.filter(
        (answer) => answer.QuestionId === Number(questionId)
    )

    return filteredAnswers.map((answer) => ({
        answerId: answer.AnswerId.toString(),
    }))
}
