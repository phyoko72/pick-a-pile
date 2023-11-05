export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <main className=" w-11/12 md:w-4/5 m-auto min-h-[calc(100vh-18rem)] pt-3 pb-8 flex justify-center items-center">
            <div className="w-full">{children}</div>
        </main>
    )
}
