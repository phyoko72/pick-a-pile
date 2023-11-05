import Image from "next/image"
import logo from "../../public/logo1.svg"
export default function Header() {
    return (
        <header className=" h-20 bg-violet-900 flex items-center justify-start">
            <div className=" w-11/12 md:w-4/5 m-auto">
                <Image src={logo} alt="Logo" />
            </div>
        </header>
    )
}
