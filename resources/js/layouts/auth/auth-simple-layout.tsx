import { Link } from "@inertiajs/react";
import AquaMonitorLogo from "@/components/branding/aqua-monitor-logo";
import { home } from "@/routes";
import type { AuthLayoutProps } from "@/types";

export default function AuthSimpleLayout({
    children,
    title,
    description,
}: AuthLayoutProps) {
    return (
        <main className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-background px-6 py-12">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full border border-[#B08D57]/10"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full border border-[#B08D57]/15"
            />

            <section className="relative z-10 w-full max-w-sm">
                <div className="mb-12 flex justify-center">
                    <Link
                        href={home()}
                        aria-label="Ir al inicio"
                        className="transition-opacity hover:opacity-80"
                    >
                        <AquaMonitorLogo />
                    </Link>
                </div>

                <header className="mb-8">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-[#b08c57da]">
                        Acceso al sistema
                    </p>

                    <h1 className="mt-3 font-serif text-4xl font-normal tracking-tight text-primary">
                        {title}
                    </h1>

                    {description && (
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                            {description}
                        </p>
                    )}

                    <div
                        aria-hidden="true"
                        className="mt-7 h-px bg-gradient-to-r from-[#B08D57]/70 via-[#B08D57]/20 to-transparent"
                    />
                </header>

                {children}

                <footer className="mt-10 text-center">
                    <p className="text-xs text-muted-foreground">
                        AquaMonitor
                        <span className="mx-2 text-[#B08D57]">·</span>
                        Calidad del agua
                    </p>
                </footer>
            </section>
        </main>
    );
}
