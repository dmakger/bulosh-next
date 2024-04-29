import { CategoryAPI } from "@/entities/Metric/api/category.metric.api";
import { UserAPI } from "@/entities/User/api/user.api";
import {combineReducers, configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    [CategoryAPI.reducerPath]: CategoryAPI.reducer,
    [UserAPI.reducerPath]: UserAPI.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false
            }).concat(
                CategoryAPI.middleware,
                UserAPI.middleware,
            ),
    })
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']