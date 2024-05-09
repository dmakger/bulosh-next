"use client"
import { ProductAPI } from '@/entities/Product/api/product.api';
import cl from './_ProductPage.module.scss'
import Wrapper1280 from "@/shared/ui/Wrapper/1280/Wrapper1280";
import { useParams } from "next/navigation";
import { NotFound } from '@/widgets/NotFound/NotFound';
import { ImageAPI } from '@/shared/ui/Image/API/ImageAPI';
import { getProductUser } from '@/entities/Product/lib/image.product.lib';
import { ProductMiniList } from '@/entities/Product/ui/List/Mini/ProductMiniList';

export default function ProductPage() {
    // PARAMS
    const {id} = useParams();
    
    // API
    const {data: product, isLoading: isLoadingProduct} = ProductAPI.useGetDetailProductQuery(Array.isArray(id) ? id[0] : id)
    
    if (isLoadingProduct)
        return <></>

    return (
        <Wrapper1280 classNameContent={cl.wrapperContent}>
            {product === undefined ? (
                <NotFound />
            ) : (
                <div className={cl.block}>
                    <h1 className={cl.title}>
                        {product?.name}
                    </h1>
                    <div className={cl.content}>
                        <ImageAPI src={getProductUser(product.image)} width={300} height={300} className={cl.image} />
                        <div className={cl.mid}>
                            <div className={cl.top}>
                                <span className={cl.topItem}>{product.amountUnit.parent.name}: {product.amount} {product.amountUnit.shortname}</span>
                                <span className={cl.topItem}>{product.description}</span>
                            </div>
                            <div className={cl.bottom}>
                                {product.addedProducts && product.addedProducts.length > 0 &&
                                    <ProductMiniList products={product.addedProducts} />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            )}
            
        </Wrapper1280>
    )
}
