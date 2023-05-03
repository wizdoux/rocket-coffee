import { Popover } from '@headlessui/react'
import menuCloseIcon from "../../assets/menu-buguer-close.svg"

export function ButtonClose() {
    return (
        <>
            <Popover.Button>
                <img src={menuCloseIcon} alt="Fechar Menu"/>
            </Popover.Button>
        </>
    )
}