import data from "@/data/PickAPile.json"
import Pagination from "@/components/Pagination"
export default function Home() {
    return (
        <div>
            <Pagination questions={data.Questions} />
        </div>
    )
}
