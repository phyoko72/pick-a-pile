import {mmFont} from "@/app/layout"
import BackBtn from "@/components/BackBtn"
import SubQuestion from "@/components/SubQuestion"
import data from "@/data/PickAPile.json"
import Image from "next/image"
import {notFound} from "next/navigation"
export default function Question({
    params: {questionId},
}: {
    params: {questionId: string}
}) {
    const question = data.Questions.find(
        (que) => que.QuestionId === Number(questionId)
    )
    if (!question) notFound()
    const answers = data.Answers.filter(
        (ans) => ans.QuestionId === Number(questionId)
    )
    return (
        <div>
            <BackBtn link="/" />
            <div className=" w-full h-[22rem] relative">
                <Image
                    src={`/articles/${questionId}/1.jpg`}
                    fill
                    style={{objectFit: "cover"}}
                    alt="cover"
                />
            </div>
            <div className={`${mmFont.className} my-6 `}>
                <h1 className=" text-2xl md:text-3xl font-semibold mb-4">
                    {question.QuestionName}
                </h1>
                <p className=" text-base md:text-lg text-white/70">
                    {question.QuestionDesp}
                </p>
            </div>
            <div className=" grid grid-cols-none sm:grid-cols-2 xl:grid-cols-4 gap-3">
                {answers.map((ans) => (
                    <SubQuestion key={ans.AnswerId} answer={ans} />
                ))}
            </div>
        </div>
    )
}

export async function generateStaticParams() {
    return data.Questions.map((question) => ({
        questionId: question.QuestionId.toString(),
    }))
}
