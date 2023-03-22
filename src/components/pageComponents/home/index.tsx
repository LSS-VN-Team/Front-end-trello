import HomeItemLeft from "./ItemLeft";
import HomeItemRight from "./ItemRight";

export interface HomeItemProps {

}
export default function HomeItem(props: HomeItemProps) {
    return (

        <div className="flex justify-center">
            <HomeItemLeft />
            <HomeItemRight />
        </div>
    )
}