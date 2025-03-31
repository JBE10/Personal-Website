import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const certifications = [
  {
    title: "Cybersecurity Fundamentals",
    issuer: "CompTIA Security+ Equivalent",
    description:
      "Comprehensive understanding of network security concepts, threat detection, risk management, and security infrastructure. Skills in implementing security controls and responding to security incidents.",
  },
  {
    title: "Linux System Administration",
    issuer: "Linux Professional Institute Certification",
    description:
      "Proficiency in Linux system administration, including user management, file systems, process control, and shell scripting. Experience with package management, service configuration, and system monitoring.",
  },
  {
    title: "SQL Database Management",
    issuer: "Oracle SQL Certified Associate",
    description:
      "Expert knowledge in SQL query writing, database design, and optimization. Skills in data manipulation, transaction control, and database security. Experience with performance tuning and troubleshooting database issues.",
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-16">
      <h2 className="text-2xl font-bold mb-6">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{cert.title}</CardTitle>
              <CardDescription>{cert.issuer}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{cert.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

