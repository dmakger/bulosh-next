import { PosterAPI } from "@/entities/Ad/ui/Poster/Item/API/PosterAPI";
import { ListProductPopularity } from "@/features/List/Product/Popularity/ListProductPopularity";
import Wrapper1280 from "@/shared/ui/Wrapper/1280/Wrapper1280";
import cl from './_MainPage.module.scss'

export default function MainPage() {
    return (
        <Wrapper1280 classNameContent={cl.block}>
            <PosterAPI />
            <ListProductPopularity limit={4} />
        </Wrapper1280>
    )
}
