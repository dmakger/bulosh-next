import { ProductList } from "@/entities/Product/ui/List/ProductList";
import { ListView } from "@/shared/data/view.data";

export default function MainPage() {
    return (
        <div>
            <ProductList popularity={true} listView={ListView.List}/>
        </div>
    )
}
