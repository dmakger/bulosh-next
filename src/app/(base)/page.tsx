import { ProductList } from "@/entities/Product/ui/List/ProductList";

export default function MainPage() {
    return (
        <div>
            <ProductList popularity={true}/>
        </div>
    )
}
