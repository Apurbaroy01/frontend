import { BorderBeam } from "@/components/ui/border-beam";

const data = [
    { id: 1, name: "Apurba" },
    { id: 2, name: "Developer" },
    { id: 3, name: "MERN Stack" },
    { id: 4, name: "Next.js" },
];

export function BorderBeamDemo() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {data.map((item) => (
                <div
                    key={item.id}
                    className="relative flex h-[250px] w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black shadow-xl"
                >
                    {/* glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 blur-2xl" />

                    {/* text */}
                    <h2 className="z-10 text-3xl font-bold text-center bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                        {item.name}
                    </h2>

                    {/* border beam */}
                    <BorderBeam size={200} duration={8} delay={item.id * 1} />
                </div>
            ))}
        </div>
    );
}