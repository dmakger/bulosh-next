import { ProductList } from "@/entities/Product/ui/List/ProductList";
import { ListProductPopularity } from "@/features/List/Product/Popularity/ListProductPopularity";
import { ListView } from "@/shared/data/view.data";
import Wrapper1280 from "@/shared/ui/Wrapper/1280/Wrapper1280";

export default function MainPage() {
    return (
        <Wrapper1280>
            <ListProductPopularity />
        </Wrapper1280>
    )
}
