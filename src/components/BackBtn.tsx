import Link from "next/link"

export default function BackBtn({link}: {link: string}) {
    return (
        <Link
            href={link}
            className=" bg-violet-900 text-white font-semibold text-lg px-1 py-2 rounded w-24 m-auto my-6 flex justify-center items-center"
        >
            Back
        </Link>
    )
}
