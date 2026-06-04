import { NavigationBar } from "@/components"

type Props = {
    params: Promise<{
        slug: string
    }>
}
export default async function Page({ params }: Props) {
    const { slug } = await params
    return (
        <div className=" flex flex-col items-center w-full *:w-full h-screen" >
            <NavigationBar />
            <div className="max-w-7xl w-full border p-8 px-16">
                {slug}
            </div>
        </div>
    )
};
