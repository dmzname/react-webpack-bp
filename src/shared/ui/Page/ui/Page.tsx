import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Page.module.scss';
import { MutableRefObject, ReactNode, useRef } from "react";
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll";

interface IPageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = (props: IPageProps) => {
    const { className, children, onScrollEnd } = props;
    const wrapper = useRef() as MutableRefObject<HTMLDivElement>;
    const trigger = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        cb: onScrollEnd,
        trigger,
        wrapper
    });

    return (
        <section ref={ wrapper } className={ classNames(cls.root, {}, [ className ]) }>
            {children}
            <div ref={ trigger } />
        </section>
    );
};