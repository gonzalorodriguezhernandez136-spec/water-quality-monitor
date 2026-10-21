import { Activity, Droplets, Waves } from "lucide-react";
import ContourPattern from "@/components/contour-pattern";
import { AquaMonitorLogo } from "../branding/aqua-monitor-logo";

const indicators = [
    {
        label: "Calidad del agua",
        value: "Estable",
        detail: "Parámetros bajo monitoreo",
        icon: Droplets,
    },
    {
        label: "Sensores activos",
        value: "En línea",
        detail: "Lecturas en tiempo real",
        icon: Activity,
    },
    {
        label: "Nivel del agua",
        value: "Monitoreado",
        detail: "Seguimiento continuo",
        icon: Waves,
    },
];

export default function LoginWelcomePanel() {
    return (
        <section className="relative hidden min-h-screen flex-col justify-between overflow-hidden bg-slate-950 p-10 text-white lg:flex xl:p-14">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_15%,rgba(8,145,178,0.24),transparent_45%),radial-gradient(ellipse_at_85%_85%,rgba(14,116,144,0.2),transparent_45%)]" />

            <div className="pointer-events-none absolute inset-0 text-cyan-100/70">
                <ContourPattern className="absolute inset-0 opacity-60" />
            </div>

            <div className="relative z-10">
                <AquaMonitorLogo light />
            </div>

            <div className="relative z-10 my-12 max-w-xl">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-medium text-cyan-100">
                    <span className="size-2 animate-pulse rounded-full bg-emerald-400" />
                    Plataforma de monitoreo
                </div>

                <h1 className="max-w-lg text-4xl font-semibold leading-tight tracking-tight xl:text-5xl">
                    Cada dato cuenta.
                    <span className="mt-2 block text-cyan-300">
                        Cada gota importa.
                    </span>
                </h1>

                <p className="mt-6 max-w-md text-base leading-7 text-slate-300">
                    Supervisa los indicadores del agua desde un solo lugar,
                    consulta las mediciones y mantente al tanto de las
                    condiciones de tu sistema.
                </p>

                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                    {indicators.map((indicator) => {
                        const Icon = indicator.icon;

                        return (
                            <div
                                key={indicator.label}
                                className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 backdrop-blur-sm"
                            >
                                <Icon className="mb-5 size-5 text-cyan-300" />

                                <p className="text-sm font-medium text-white">
                                    {indicator.label}
                                </p>

                                <p className="mt-2 text-sm font-semibold text-cyan-200">
                                    {indicator.value}
                                </p>

                                <p className="mt-1 text-xs leading-5 text-slate-400">
                                    {indicator.detail}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="relative z-10 flex items-center justify-between gap-4 border-t border-white/10 pt-5 text-xs text-slate-400">
                <span>AquaMonitor · Gestión inteligente del agua</span>
                <span>Monitoreo y seguimiento</span>
            </div>
        </section>
    );
}
