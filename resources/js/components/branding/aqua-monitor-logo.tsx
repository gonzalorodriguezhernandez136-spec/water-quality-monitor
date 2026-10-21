import { cn } from "@/lib/utils";

type AquaMonitorLogoProps = {
    className?: string;
    light?: boolean;
    compact?: boolean;
};

export function AquaMonitorLogo({
    className,
    light = false,
    compact = false,
}: AquaMonitorLogoProps) {
    return (
        <div
            className={cn(
                "flex items-center gap-3",
                light ? "text-white" : "text-foreground",
                className,
            )}
        >
            <svg
                viewBox="0 0 32 32"
                aria-hidden="true"
                className="size-10 shrink-0"
                fill="none"
            >
                <circle
                    cx="16"
                    cy="16"
                    r="15"
                    stroke="#B08D57"
                    strokeWidth="1"
                />
                <path
                    d="M16 7c3.6 4.4 6 7.7 6 10.6a6 6 0 1 1-12 0C10 14.7 12.4 11.4 16 7Z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinejoin="round"
                />
                <path
                    d="M12.5 19c1.4 1 2.6 1.4 3.5 1.4s2.1-.4 3.5-1.4"
                    stroke="#B08D57"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                />
            </svg>

            {!compact && (
                <div className="min-w-0 leading-none">
                    <span className="font-serif text-xl tracking-tight">
                        AquaMonitor
                    </span>
                    <span
                        className={cn(
                            "mt-1.5 block text-[10px] uppercase tracking-[0.2em]",
                            light ? "text-slate-300" : "text-muted-foreground",
                        )}
                    >
                        Calidad del agua
                    </span>
                </div>
            )}
        </div>
    );
}

export function Logo({ className }: { className?: string }) {
    return <AquaMonitorLogo className={className} />;
}

export default AquaMonitorLogo;
