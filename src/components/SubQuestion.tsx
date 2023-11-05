import Image from "next/image"
import Link from "next/link"

export default function SubQuestion({answer}: {answer: AnswerType}) {
    return (
        <>
            <div
                key={answer.AnswerId}
                className=" w-full h-[300px] relative overflow-hidden"
            >
                <Link
                    href={`/questions/${answer.QuestionId}/answers/${answer.AnswerId}`}
                >
                    <Image
                        src={`/${answer.AnswerImageUrl}`}
                        alt={answer.AnswerName}
                        fill
                        priority
                        style={{objectFit: "cover"}}
                        className="rounded-md hover:scale-110 ease-in-out duration-300"
                    />
                </Link>
            </div>
        </>
    )
}
