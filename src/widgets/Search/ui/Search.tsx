"use client"

import {FormEvent, useEffect, useState} from "react";
import cl from './_Search.module.scss'
import Input from "@/shared/ui/Input/Input";
import { Button } from "@/shared/ui/Button/ui/Button";
import { SEARCH_WHITE_PURPLE__ICON } from "@/shared/ui/Icon/data/search.data.icon";
import { ButtonType, ButtonView } from "@/shared/model/button.model";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { CORE_PARAMS } from "@/config/params/core.params.config";
import { MAIN_PAGES } from "@/config/pages-url.config";

export const Search = () => {
    // ROUTER
    const searchParams = useSearchParams() 
    const router = useRouter()

    // STATE
    const [defaultSearchValue, setDefaultSearchValue] = useState<string>()

    // HANDLE
    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const searchValue = e.currentTarget.search.value;
        const params = new URLSearchParams(searchParams.toString())
        params.set(CORE_PARAMS.SEARCH, searchValue)
        if (!searchValue)
            params.delete(CORE_PARAMS.SEARCH)
        router.push(`${MAIN_PAGES.CATALOG}?${params.toString()}`);    
    };

    // EFFECT
    useEffect(() => {
        const searchValue = searchParams.get(CORE_PARAMS.SEARCH)
        if (searchValue)
            setDefaultSearchValue(searchValue)
    }, [searchParams])

    return (
        // <form onSubmit={handleOnSubmit} className={cl.search}>
        <form className={cl.search} onSubmit={handleOnSubmit}>
            <Input.Text name={'search'} 
                        placeholder="Поиск..." 
                        defaultValue={defaultSearchValue} className={cl.text} />
            <div className={cl.right}>
                <Button view={ButtonView.PrimaryToOutline} type={ButtonType.Submit} isCircle={true}
                        beforeImage={SEARCH_WHITE_PURPLE__ICON} />
            </div>
        </form>
    )
}
