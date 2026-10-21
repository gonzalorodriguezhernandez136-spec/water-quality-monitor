export default function Home() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-slate-50 p-6 text-slate-900">
            <section className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-widest text-cyan-700">
                    AquaMonitor
                </p>

                <h1 className="mt-4 text-3xl font-bold tracking-tight">
                    Bienvenido a AquaMonitor
                </h1>

                <p className="mt-3 leading-7 text-slate-600">
                    Plataforma para la supervisión y el seguimiento de
                    información relacionada con el agua.
                </p>

                <div className="mt-8 rounded-xl bg-cyan-50 p-5">
                    <p className="font-medium text-cyan-950">
                        Proyecto inicial
                    </p>
                    <p className="mt-1 text-sm text-cyan-800">
                        Laravel 13 · React · Inertia
                    </p>
                </div>
            </section>
        </main>
    );
}
