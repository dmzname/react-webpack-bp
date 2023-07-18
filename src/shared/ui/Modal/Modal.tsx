import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import React, { ReactNode, useState, useRef, useEffect, useCallback } from "react";

const ANIMATION_DELAY = 300;

interface ModalProps {
    children?: ReactNode
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const Modal = (props: ModalProps) => {
    const [ isClosing, setIsClosing ] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const {
        className,
        children,
        onClose,
        isOpen
    } = props;

    const mods: Record<string, boolean> = {
        [cls['is-open']]: isOpen,
        [cls['is-close']]: isClosing
    };

    const onCloseHandler = useCallback(() => {
        setIsClosing(true);
        if (onClose) {
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [ onClose ]); 

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onCloseHandler();
        }
    }, [ onCloseHandler ]);

    useEffect(() => {
        if(isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            window.removeEventListener('keydown', onKeyDown);
            clearTimeout(timerRef.current);
        };
    }, [ isOpen, onKeyDown ]);

    return (
        <div onClick={ onCloseHandler } className={ classNames(cls.root, mods, [ className, cls.overlay ]) }>
            <div className={ cls.content } onClick={ (e: React.MouseEvent) => e.stopPropagation() }>
                {children}
            </div>
        </div>
    );
};