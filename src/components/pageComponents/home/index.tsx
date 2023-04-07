import HomeItemLeft from "./menuLeft";
import HomeItemRight from "./listBoard";

export interface HomeItemProps {

}
export default function HomeItem(props: HomeItemProps) {
    return (
        <div className="flex justify-center h-sidebar ">
            <HomeItemLeft />
            <HomeItemRight />
        </div>
    )
}