import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {useMemo} from "react";
import {bindActionCreators} from "redux";
import { AppDispatch, RootState } from ".";

// import { MetricsSlice } from "@/entities/Metrics/storage/metrics.metrics.storage";
// import { CurrencySlice } from "@/entities/Metrics/storage/currency.metrics.storage";
// import { CategorySlice } from "@/entities/Metrics/storage/category.metrics.storage";
// import { PTCSlice } from "@/features/storage/PTC/ptc.storage";
// import { CountrySlice } from "@/entities/Metrics/storage/country.metrics.storage";


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

//Сюда кидаем акшены с нового слайса
export const useActionCreators = () => {
    const dispatch = useAppDispatch()

    const actions = useMemo(
        () => ({
            // ...CategorySlice.actions,
            // ...MetricsSlice.actions,
            // ...CurrencySlice.actions,
            // ...CountrySlice.actions,
            // ...PTCSlice.actions,
        }),
        [],
    )

    return useMemo(
        () => bindActionCreators(actions, dispatch),
        [actions, dispatch],
    )
}