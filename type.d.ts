type QuestionsResponseType = {
    success: boolean
    data: {
        questions: {
            QuestionId: string
            QuestionName: string
            QuestionDesp: string
        }[]
    }
}

type QuestionType = {
    QuestionId: number
    QuestionName: string
    QuestionDesp: string
}

type AnswerType = {
    AnswerId: number
    AnswerImageUrl: string
    AnswerName: string
    AnswerDesp: string
    QuestionId: number
}
