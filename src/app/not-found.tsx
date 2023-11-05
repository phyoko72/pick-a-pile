import Link from "next/link"

export default function NotFound() {
    return (
        <div className=" w-full flex justify-center items-center">
            <div>
                <h1 className=" text-4xl font-semibold">Not Found</h1>
                <p className=" text-lg text-center">
                    Go Back{" "}
                    <Link href={"/"} className=" underline underline-offset-4">
                        Home
                    </Link>
                </p>
            </div>
        </div>
    )
}
