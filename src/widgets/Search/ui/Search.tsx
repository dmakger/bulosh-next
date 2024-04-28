"use client"


import {FormEvent} from "react";
import cl from './_Search.module.scss'
import Input from "@/shared/ui/Input/Input";
import { Button } from "@/shared/ui/Button/ui/Button";
import { SEARCH_WHITE_PURPLE__ICON } from "@/shared/ui/Icon/data/search.data.icon";
import { ButtonView } from "@/shared/model/button.model";

export const Search = () => {
    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        console.log(formData, e.currentTarget, e.currentTarget.value)
    }

    return (
        // <form onSubmit={handleOnSubmit} className={cl.search}>
        <form className={cl.search}>
            <Input.Text name={'search'} placeholder="Поиск..." className={cl.text} />
            <div className={cl.right}>
                <Button onClick={handleOnSubmit} 
                        view={ButtonView.PrimaryToOutline} isCircle={true}
                        beforeImage={SEARCH_WHITE_PURPLE__ICON} />
            </div>
        </form>
    )
}
