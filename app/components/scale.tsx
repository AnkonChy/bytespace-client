"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Keeps a fixed-size design "stage" pixel-perfect and scales it down
 * (never up) when the parent gets narrower than `width`.
 */
export default function ScaleBox({
    width,
    height,
    align = "end",
    children,
}: {
    width: number;
    height: number;
    align?: "start" | "center" | "end";
    children: ReactNode;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [scale, setScale] = useState<number | null>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const update = () => setScale(Math.min(1, el.clientWidth / width));
        update();
        const ro = new ResizeObserver(update);
        ro.observe(el);
        return () => ro.disconnect();
    }, [width]);

    const s = scale ?? 1;
    const justify =
        align === "start" ? "flex-start" : align === "center" ? "center" : "flex-end";

    return (
        <div
            ref={ref}
            className="flex w-full"
            style={{ justifyContent: justify, visibility: scale === null ? "hidden" : "visible" }}
        >
            <div style={{ width: width * s, height: height * s }}>
                <div
                    style={{
                        width,
                        height,
                        position: "relative",
                        transform: `scale(${s})`,
                        transformOrigin: "top left",
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}