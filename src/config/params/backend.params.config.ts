import { ReadonlyURLSearchParams } from "next/navigation"
import { CORE_PARAMS } from "./core.params.config"

// ====={ ОБЩИЕ ПАРАМЕТРЫ }=====
class BackendParams {
    // FILTER
    SEARCH = "q" 
    NUMBER_PAGE = "page" 
    CATEGORY = "category_id" 

}
export const BACKEND_PARAMS = new BackendParams()


export const SORT_FRONT_TO_BACK = {
    [CORE_PARAMS.SEARCH]: BACKEND_PARAMS.SEARCH, 
    [CORE_PARAMS.NUMBER_PAGE]: BACKEND_PARAMS.NUMBER_PAGE, 
    [CORE_PARAMS.CATEGORY]: BACKEND_PARAMS.CATEGORY, 
}


export const paramsToBack = (searchParams: ReadonlyURLSearchParams) => {
    const searchParamsDict = Object.fromEntries(searchParams.entries());
    const newSearchParams: Record<string, string> = {};

    for (const key in SORT_FRONT_TO_BACK) {
        if (key in searchParamsDict) {
            const backendKey = SORT_FRONT_TO_BACK[key];
            const value = searchParamsDict[key];
            newSearchParams[backendKey] = value
        }
    }
    return newSearchParams
}