import Image from "next/image";



const GitHubReports = () => {
    return (
        <section className="mx-auto max-w-7xl py-20">


            {/* Activity Graph */}
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <Image
                    className="w-full rounded-xl"
                    src={`https://github-readme-activity-graph.vercel.app/graph?username=apurbaroy01&theme=tokyo-night&hide_border=true`}
                    alt="Contribution Graph"
                    height="500"
                    width="500"
                />
            </div>



        </section>
    );
};

export default GitHubReports;