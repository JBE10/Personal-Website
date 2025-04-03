import { Badge } from "@/components/ui/badge"

// Define skill categories and their items
const skillCategories = [
    {
        name: "Programming Languages",
        skills: ["Python", "Java", "TypeScript"],
    },
    {
        name: "Databases",
        skills: ["MongoDB", "MySQL", "Microsoft SQL Server"],
    },
    {
        name: "Frontend & Tools",
        skills: ["React", "Tailwind CSS"],
    },
    {
        name: "Operating Systems",
        skills: ["Linux (Kali)", "Windows", "macOS"],
    },
]

export function Skills() {
    return (
        <section id="skills" className="scroll-mt-16">
            <h2 className="section-title">Technical Skills</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skillCategories.map((category, index) => (
                    <div key={index} className="border rounded-lg p-6 shadow-sm">
                        <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
                        <div className="flex flex-wrap gap-3">
                            {category.skills.map((skill, skillIndex) => (
                                <Badge key={skillIndex} variant="outline" className="px-4 py-2 text-base font-medium">
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

