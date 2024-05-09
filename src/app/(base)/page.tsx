import { ListProductPopularity } from "@/features/List/Product/Popularity/ListProductPopularity";
import Wrapper1280 from "@/shared/ui/Wrapper/1280/Wrapper1280";

export default function MainPage() {
    return (
        <Wrapper1280>
            <ListProductPopularity limit={4} />
        </Wrapper1280>
    )
}
