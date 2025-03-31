import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const education = [
    {
        institution: "Universidad Argentina de la Empresa (UADE)",
        degree: "Computer Engineering",
        period: "2020 - Present",
        description:
            "Focusing on software development, cybersecurity, and system optimization. Participating in academic projects using agile methodologies.",
        skills: ["Java", "Python", "Algorithms", "Data Structures", "Cybersecurity", "Software Engineering"],
    },
    // You can add more education entries here
]

export function Education() {
    return (
        <section id="education" className="scroll-mt-16">
            <h2 className="section-title">Education</h2>
            <div className="space-y-6">
                {education.map((edu, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <div>
                                    <CardTitle>{edu.degree}</CardTitle>
                                    <CardDescription>{edu.institution}</CardDescription>
                                </div>
                                <Badge variant="outline" className="ml-2">
                                    {edu.period}
                                </Badge>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4">{edu.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {edu.skills.map((skill, skillIndex) => (
                                    <Badge key={skillIndex} variant="secondary">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}

