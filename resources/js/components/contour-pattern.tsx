type ContourPatternProps = {
    className?: string;
};

export default function ContourPattern({
    className = "",
}: ContourPatternProps) {
    const waves = Array.from({ length: 13 }, (_, index) => index);

    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 600 440"
            preserveAspectRatio="xMidYMid slice"
            className={`pointer-events-none h-full w-full ${className}`}
            fill="none"
        >
            {waves.map((wave) => {
                const y = 20 + wave * 34;
                const amplitude = 12 + (wave % 4) * 7;
                const phase = wave * 19;

                return (
                    <path
                        key={wave}
                        d={Array.from({ length: 61 }, (_, index) => {
                            const x = index * 10;
                            const py =
                                y +
                                Math.sin((x + phase) / 54) * amplitude +
                                Math.sin((x + phase) / 105) * 9;

                            return `${index === 0 ? "M" : "L"} ${x} ${py}`;
                        }).join(" ")}
                        stroke="currentColor"
                        strokeWidth={wave === 6 ? 1.5 : 0.8}
                        opacity={wave === 6 ? 0.45 : 0.16}
                    />
                );
            })}

            <path
                d="M 0 340 C 110 285, 160 390, 270 325 S 450 280, 600 340"
                stroke="#67e8f9"
                strokeWidth="1.5"
                opacity="0.75"
            />
        </svg>
    );
}
