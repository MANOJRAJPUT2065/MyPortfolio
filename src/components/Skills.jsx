
import React from 'react';
import { Code, Database, Globe, Wrench, Brain, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: "Programming Languages",
      skills: ["C", "C++", "JavaScript", "HTML", "CSS"]
    },
    {
      icon: <Brain size={24} />,
      title: "CS Fundamentals",
      skills: ["Data Structures & Algorithms", "Object-Oriented Programming", "Operating Systems", "Database Management Systems"]
    },
    {
      icon: <Globe size={24} />,
      title: "Web Development",
      skills: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "Bootstrap", "Vite"]
    },
    {
      icon: <Database size={24} />,
      title: "Databases",
      skills: ["MySQL", "MongoDB"]
    },
    {
      icon: <Wrench size={24} />,
      title: "Developer Tools",
      skills: ["Visual Studio Code", "Git", "GitHub", "Jupyter", "Linux Commands"]
    },
    {
      icon: <Users size={24} />,
      title: "Soft Skills",
      skills: ["Problem Solving", "Public Speaking", "Communication", "Team Collaboration"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive skill set spanning from fundamental computer science concepts 
            to modern web development technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-primary">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">Core Competencies</h3>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-primary/10 p-6 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">DSA</h4>
              <p className="text-sm text-muted-foreground">Data Structures & Algorithms</p>
            </div>
            <div className="bg-primary/10 p-6 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">OS</h4>
              <p className="text-sm text-muted-foreground">Operating Systems</p>
            </div>
            <div className="bg-primary/10 p-6 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">DBMS</h4>
              <p className="text-sm text-muted-foreground">Database Management</p>
            </div>
            <div className="bg-primary/10 p-6 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">Full Stack</h4>
              <p className="text-sm text-muted-foreground">End-to-end Development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
