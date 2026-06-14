
import { Variants } from "framer-motion";

const motionVariant = {
    container: (): Variants => {
        return (
            {
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: 0,
                    },
                },
            })
    },
    fade_right: (delay: number = 0, x: number = 0): Variants => {
        return (
            {
                hidden: { x: x, opacity: 0 },
                show: {
                    opacity: 1,
                    x: 0,
                    transition: { ease: "easeOut", duration: 0.6, delay },
                },
                viewport: {
                }
            }
        )
    },
    fade_down: (delay: number = 0, y: number = 0): Variants => {
        return (
            {
                hidden: { y: y * -1, opacity: 0 },
                show: {
                    opacity: 1,
                    y: 0,
                    transition: { ease: "easeOut", duration: 0.6, delay },
                },
                viewport: {
                }
            }
        )
    },

    fade_left: (delay: number = 0, x: number = 0): Variants => {
        return (
            {
                hidden: { x: x * -1, opacity: 0 },
                show: {
                    opacity: 1,
                    x: 0,
                    transition: { ease: "easeInOut", duration: 0.3, delay },
                },
                viewport: {
                }
            }
        )
    },
    fade_up: (delay: number = 0, y: number = 0): Variants => {
        return (
            {
                hidden: { y: y, opacity: 0 },
                show: {
                    opacity: 1,
                    y: 0,
                    transition: { ease: "easeInOut", duration: 0.3, delay },
                },
                viewport: {
                }
            }
        )
    },
    scale_up: (delay: number = 0,): Variants => {
        return (
            {
                hidden: { scale: .5, opacity: 0 },
                show: {
                    opacity: 1,
                    scale: 1,
                    transition: { ease: "easeInOut", duration: 0.3, delay },
                },
                viewport: {
                }
            }
        )
    }
}
export { motionVariant }