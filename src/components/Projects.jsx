
import React from 'react';
import { Github, ExternalLink, Calendar, Users, Shield, MapPin, Leaf } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Health-Ledger",
      subtitle: "Health Insurance Claim System",
      description: "Developed a comprehensive health insurance claim system for secure, fast, and transparent processing of medical claims with dedicated dashboards for patients, doctors, and insurers.",
      features: [
        "Secure cloud storage for medical reports",
        "Dedicated dashboards for different user roles",
        "Fast claim processing and approvals",
        "Responsive user interface design"
      ],
      techStack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
      icon: <Shield className="text-blue-600" size={32} />,
      githubUrl: "https://github.com/MANOJRAJPUT2065/health-ledger",
      liveUrl: "#"
    },
    {
      id: 2,
      title: "Campus-Connect",
      subtitle: "Student-centric Academic Platform",
      description: "Developed a comprehensive platform offering notes, calendars, events, and a student post feed for seamless academic collaboration with real-time chat functionality.",
      features: [
        "Notes sharing and management",
        "Academic calendar integration",
        "Student post feed",
        "Real-time chat functionality",
        "Event management system"
      ],
      techStack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Socket.io", "JWT"],
      icon: <Users className="text-green-600" size={32} />,
      githubUrl: "https://github.com/MANOJRAJPUT2065/campus-connect",
      liveUrl: "#"
    },
    {
      id: 3,
      title: "CommuteSmart",
      subtitle: "Eco-Friendly Commuting & Smart Parking",
      description: "Developed an eco-friendly commuting platform with smart parking solutions to reduce carbon footprint and promote sustainable commuting habits.",
      features: [
        "Carbon footprint tracking",
        "Real-time parking availability",
        "Personalized user dashboards",
        "Interactive visualizations",
        "Sustainability notifications"
      ],
      techStack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
      icon: <Leaf className="text-green-500" size={32} />,
      githubUrl: "https://github.com/MANOJRAJPUT2065/commute-smart",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my development work, featuring full-stack applications 
            built with modern technologies and best practices.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={project.id} className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <div className="bg-card p-8 rounded-xl border border-border shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    {project.icon}
                    <div>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <p className="text-primary font-medium">{project.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <Github size={18} />
                      View Code
                    </a>
                    <a 
                      href={project.liveUrl}
                      className="flex items-center gap-2 border border-border px-4 py-2 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-8 rounded-xl h-64 lg:h-80 flex items-center justify-center">
                  <div className="text-center">
                    {project.icon}
                    <h4 className="text-xl font-semibold mt-4 text-primary">{project.title}</h4>
                    <p className="text-muted-foreground mt-2">Interactive Demo Available</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href="https://github.com/MANOJRAJPUT2065" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
