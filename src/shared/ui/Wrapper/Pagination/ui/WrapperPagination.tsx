"use client"

import { Dispatch, FC, ReactNode, SetStateAction, useEffect, useState } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_WrapperPagination.module.scss'
import { Pagination } from "@/widgets/Pagination/ui/Pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { HandleSize } from "@/shared/ui/Handle/Size/HandleSize";
import { CORE_PARAMS } from "@/config/params/core.params.config";

interface WrapperPaginationProps{
    amount: number
    active: number
    set: Dispatch<SetStateAction<number>>
    defaultPageNumber?: number
    children: ReactNode
    className?: string,
}

export const WrapperPagination:FC<WrapperPaginationProps> = ({amount, active, set, defaultPageNumber=1, children, className}) => {
    // ROUTER
    const pathname = usePathname()
    const searchParams = useSearchParams() 
    const currentPageNumber = searchParams.get(CORE_PARAMS.NUMBER_PAGE)
    const router = useRouter()

    // STATE
    const [amountCore, setAmountCore] = useState(1)
    const [pageNumber, setPageNumber] = useState(defaultPageNumber)
    const [amountContent, setAmountContent] = useState(9)
    const [is768, setIs768] = useState(false)
    
    // EFFECT
    useEffect(() => {
        if (amountCore !== amount)
            setAmountCore(amount)
    }, [amount])

    useEffect(() => {
        setPageNumber(prevState => {
            const _currentPageNumber = currentPageNumber === null ? defaultPageNumber : parseInt(currentPageNumber)
            return _currentPageNumber === prevState ? prevState : _currentPageNumber
        })
    }, [defaultPageNumber, currentPageNumber])

    useEffect(() => {        
        if (active !== pageNumber){
            set(pageNumber)
        }
    }, [active, searchParams])

    useEffect(() => {
        let newAmountContent = is768 ? 4 : 9
        if (newAmountContent !== amountContent)
            setAmountContent(newAmountContent)
    }, [is768])

    // ON CLICK
    const handleOnClickItem = (n: number) => {        
        const params = new URLSearchParams(searchParams.toString())
        params.set(CORE_PARAMS.NUMBER_PAGE, `${n}`)
        router.push(`${pathname}?${params.toString()}`);    
        setPageNumber(n)
    }

    return (
        <div className={cls(cl.block, className)}>
            {children}
            {amountCore > 1 &&
                <Pagination active={pageNumber} 
                            amount={amountCore} amountContent={amountContent} 
                            onClickItem={handleOnClickItem} 
                            className={cl.pagination} />
            }
            <HandleSize width={768} set={setIs768}/>
        </div>
    )
}
