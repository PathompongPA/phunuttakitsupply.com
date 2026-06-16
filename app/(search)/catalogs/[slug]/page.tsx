import { NavigationBar } from "@/components"
import { getData } from "@/utility"

type Props = {
    params: Promise<{
        slug: string
    }>
}

export default async function Page({ params }: Props) {
    const { slug } = await params
    const [catalog] = await getData("catalog", { search: (await slug).search })
    return (
        <div className=" flex flex-col items-center w-full *:w-full h-screen" >
            <NavigationBar />
            <div className="max-w-7xl w-full ">
                <iframe
                    src={process.env.NEXT_PUBLIC_URL_HOST + "assets/" + catalog?.file}
                    className="w-full h-screen"
                    allowFullScreen
                ></iframe>
                {slug}
            </div>
        </div>
    )
};
