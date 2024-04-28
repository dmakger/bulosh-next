'use client'

import { FC, ReactNode, useEffect, useState } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_Modal.module.scss'
import { ModalView } from "@/shared/data/modal.data";

interface ModalProps{
    _isOpen?: boolean
    onClickOverlay?: Function
    view?: ModalView
    hasBlack?: boolean
    buttonNode: ReactNode
    children: ReactNode
    className?: string,
}

export const Modal:FC<ModalProps> = ({_isOpen=false, onClickOverlay=()=>{}, view=ModalView.CENTER, hasBlack=true, buttonNode, children, className}) => {    
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
                <div className={cls(isOpen ? cl.openSidebar : '', views[view], cl.sidebar)}>
                    {children}
                </div>
            </div>
        </>
    )
}
