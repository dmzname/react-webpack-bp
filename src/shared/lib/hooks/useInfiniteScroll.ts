import { MutableRefObject, useEffect } from "react";

export interface IInfiniteScroll {
    cb?: () => void;
    trigger: MutableRefObject<HTMLElement>;
    wrapper: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll({ cb, trigger, wrapper }: IInfiniteScroll) {

    useEffect(() => {
        if(cb) {
            const currentTrigger = trigger.current;
            const options = {
                root: wrapper.current,
                rootMargin: "0px",
                threshold: 1.0,
            };

            const observer = new IntersectionObserver(([ entry ]) => {
                if(entry.isIntersecting) {
                    cb();
                }
            }, options);

            observer.observe(currentTrigger);

            return () => {
                if(observer) {
                    observer.unobserve(currentTrigger);
                }
            };
        }

    }, [ cb, trigger, wrapper ]);
}