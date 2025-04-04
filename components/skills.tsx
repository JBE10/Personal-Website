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

            <div className="space-y-8">
                {skillCategories.map((category, index) => (
                    <div key={index} className="space-y-3">
                        <h3 className="text-lg font-medium text-primary">{category.name}</h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, skillIndex) => (
                                <Badge
                                    key={skillIndex}
                                    className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-3 py-1"
                                >
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                        {index < skillCategories.length - 1 && (
                            <div className="pt-4">
                                <div className="border-t border-border/40"></div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}
