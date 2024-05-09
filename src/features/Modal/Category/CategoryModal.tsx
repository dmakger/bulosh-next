"use client"

import { FC, useState } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_CategoryModal.module.scss'
import { Modal } from "@/shared/ui/Modal/Modal";
import { ButtonView } from "@/shared/model/button.model";
import { CATALOG__ICON } from "@/shared/ui/Icon/data/catalog.data.icon";
import { Button } from "@/shared/ui/Button/ui/Button";
import { ModalView } from "@/shared/data/modal.data";
import { CategoryList } from "@/features/List/Category/Default/CategoryList";
import { CategoryListWParams } from "@/features/List/Category/WParams/CategoryListWParams";

interface CategoryModalProps{
    className?: string,
    classNameButton?: string
}

export const CategoryModal:FC<CategoryModalProps> = ({className, classNameButton}) => {
    // STATE
    const [isOpen, setIsOpen] = useState(false);

    // HANDLE
    const handleOnClick = () => {
        setIsOpen(prevState => !prevState)
    }

    return (
        <div className={cl.wrapper}>
            <Modal _isOpen={isOpen} 
                    hasBlack={false}
                    onClickOverlay={handleOnClick}
                    view={ModalView.MANUAL}  
                    buttonNode={
                        <Button title="Каталог"
                                view={ButtonView.PrimaryToOutline} 
                                beforeImage={CATALOG__ICON} onClick={handleOnClick} 
                                className={classNameButton}/>
                    }
                    className={cls(cl.modal, className)}>
                <CategoryListWParams hasOutline={true}/>
            </Modal>
        </div>
    )
}
