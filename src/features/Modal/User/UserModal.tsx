"use client"

import { FC, useState } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_UserModal.module.scss'
import { Modal } from "@/shared/ui/Modal/Modal";
import { ModalView } from "@/shared/data/modal.data";
import { UserImage } from "@/entities/User/ui/Image/UserImage";
import { CategoryList } from "@/features/List/Category/CategoryList";

interface UserModalProps{
    className?: string,
}

export const UserModal:FC<UserModalProps> = ({className}) => {
    // STATE
    const [isOpen, setIsOpen] = useState(false);

    // HANDLE
    const handleOnMouseEnter = () => {
        console.log('Enter');
        setIsOpen(true)
    }

    const handleOnMouseLeave = () => {
        console.log('Leave');
        setIsOpen(false)
    }

    return (
        <div className={cl.wrapper}>
            <Modal _isOpen={isOpen} 
                    hasBlack={false}
                    view={ModalView.MANUAL} 
                    onMouseEnter={handleOnMouseEnter} 
                    onMouseLeave={handleOnMouseLeave} 
                    buttonNode={
                        <div onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
                            <UserImage isAuthUser={true} />
                        </div>
                    }
                    className={cls(cl.modal, className)}>
                <CategoryList hasOutline={true}/>
            </Modal>
        </div>
    )
}
