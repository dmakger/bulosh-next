'use client'

import { FC, ReactNode, useEffect, useState } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_Modal.module.scss'
import { ModalView } from "@/shared/data/modal.data";

interface ModalProps{
    _isOpen?: boolean
    onClickOverlay?: Function
    onMouseEnter?: Function
    onMouseLeave?: Function
    view?: ModalView
    hasBlack?: boolean
    buttonNode: ReactNode
    children: ReactNode
    className?: string,
    classNameContent?: string,
}

export const Modal:FC<ModalProps> = ({
    _isOpen=false, 
    onClickOverlay=()=>{}, onMouseEnter=()=>{}, onMouseLeave=()=>{}, 
    view=ModalView.CENTER, hasBlack=true, buttonNode, 
    children, className, classNameContent
}) => {    
    // STATE
    const [isOpen, setIsOpen] = useState(false);

    // EFFECT
    useEffect(() => {
        if (isOpen === _isOpen)
            return
        setIsOpen(_isOpen)
    }, [_isOpen])

    // VIEWS
    const views = {
        [ModalView.CENTER]: cl.center,
        [ModalView.LEFT]: cl.left,
        [ModalView.RIGHT]: cl.right,
        [ModalView.MANUAL]: cl.manual,
    }

    return (
        <>
            {buttonNode}
            <div className={cls(isOpen ? cl.open : '', cl.modal, className)}>
                <div onClick={()=>onClickOverlay()} className={cls(isOpen ? cl.openOverlay : '', cl.overlay, hasBlack ? cl.black : '', className)} />
                <div onMouseEnter={() => onMouseEnter()} onMouseLeave={() => onMouseLeave()} className={cls(isOpen ? cl.openSidebar : '', views[view], cl.sidebar)}>
                    {view === ModalView.MANUAL ? (
                        <div className={cls(cl.content, classNameContent)}>{children}</div>
                    ) : (
                        <>{children}</>
                    )}
                </div>
            </div>
        </>
    )
}
