import Image from "next/image"
import Link from "next/link"

export default function MainQuestion({question}: {question: QuestionType}) {
    return (
        <>
            <div
                key={question.QuestionId}
                className=" w-full bg-violet-900 text-white rounded-md"
            >
                <div className=" relative w-full h-[350px] rounded-md overflow-hidden">
                    <Image
                        src={`/articles/${question.QuestionId}/1.jpg`}
                        alt="Question Img"
                        fill
                        priority
                        style={{objectFit: "cover"}}
                        className=" rounded-t-md hover:scale-110 ease-in-out duration-300 "
                    />
                </div>
                <div className=" p-2 ">
                    <h1>{question.QuestionName.slice(0, 30)}...</h1>
                    <p className=" text-white/75">
                        {question.QuestionDesp.slice(0, 30)}...
                    </p>
                    <Link
                        href={`/questions/${question.QuestionId}`}
                        className=" px-2 py-1 mt-3 inline-block bg-teal-600 text-white rounded"
                    >
                        Read More
                    </Link>
                </div>
            </div>
        </>
    )
}
