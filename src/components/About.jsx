
import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate developer with a strong foundation in computer science fundamentals 
            and hands-on experience in full-stack development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Currently pursuing my Bachelor of Engineering at Siddaganga Institute of Technology 
                with a CGPA of 8.43. I have a strong foundation in Data Structures, Algorithms, 
                and system design, which I apply to create efficient and scalable solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm passionate about problem-solving and have achieved recognition in various 
                hackathons and coding competitions. My goal is to leverage technology to create 
                meaningful impact through innovative software solutions.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="text-primary" size={24} />
                  <h4 className="text-xl font-semibold">Current Education</h4>
                </div>
                <p className="text-muted-foreground mb-2">Bachelor of Engineering</p>
                <p className="text-sm text-muted-foreground mb-1">Siddaganga Institute of Technology</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar size={16} />
                  <span>December 2022 - Ongoing</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                  <MapPin size={16} />
                  <span>Karnataka, India</span>
                </div>
                <p className="text-primary font-semibold mt-2">CGPA: 8.43</p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="text-primary" size={24} />
                  <h4 className="text-xl font-semibold">Higher Secondary</h4>
                </div>
                <p className="text-muted-foreground mb-2">Bharakh School</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar size={16} />
                  <span>April 2020 - July 2022</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                  <MapPin size={16} />
                  <span>Jammu, India</span>
                </div>
                <div className="mt-2 space-y-1">
                  <p className="text-sm">Class 10: <span className="text-primary font-semibold">75.0%</span></p>
                  <p className="text-sm">Class 12: <span className="text-primary font-semibold">91.2%</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
