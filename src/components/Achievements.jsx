
import React from 'react';
import { Trophy, Award, Users, Code, Target } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="text-yellow-500" size={32} />,
      title: "Top 15 in SIH Hackathon",
      description: "Achieved top 15 ranking out of 150 teams in Siddaganga Institute of Technology (SIH), a national-level hackathon.",
      category: "Hackathon",
      year: "2024"
    },
    {
      icon: <Award className="text-blue-500" size={32} />,
      title: "2nd Position - Bug Bounty",
      description: "Attained 2nd position in Bug Bounty, a coding contest in Decoders 2k24, a College-Level Technical Symposium.",
      category: "Coding Contest",
      year: "2024"
    },
    {
      icon: <Target className="text-green-500" size={32} />,
      title: "6th Position - SIT TBI 2k24",
      description: "Attained 6th position out of 25 teams in Siddaganga Institute of Technology, by Siddagana TBI 2k24.",
      category: "Technical Event",
      year: "2024"
    }
  ];

  const extracurriculars = [
    {
      icon: <Code className="text-purple-500" size={24} />,
      title: "Decoders Coding Club",
      role: "Active Member",
      description: "Contributing to solving coding challenges and participating in coding contests."
    },
    {
      icon: <Users className="text-orange-500" size={24} />,
      title: "Pathfinder Event Management",
      role: "Volunteer",
      description: "Actively organizing and participating in various college-level events and activities."
    }
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Achievements & Recognition</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recognition earned through dedication, hard work, and passion for technology and problem-solving.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">Competition Achievements</h3>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    {achievement.icon}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                          {achievement.category}
                        </span>
                        <span className="text-muted-foreground text-sm">{achievement.year}</span>
                      </div>
                      <h4 className="text-xl font-semibold mb-2">{achievement.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-border pt-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">Extracurricular Activities</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {extracurriculars.map((activity, index) => (
                <div key={index} className="bg-card p-6 rounded-lg border border-border">
                  <div className="flex items-start gap-4">
                    {activity.icon}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="text-lg font-semibold">{activity.title}</h4>
                        <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">
                          {activity.role}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 p-8 rounded-xl border border-border">
              <h3 className="text-2xl font-semibold mb-4">Academic Excellence</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">8.43</div>
                  <div className="text-muted-foreground">Current CGPA</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">91.2%</div>
                  <div className="text-muted-foreground">Class 12</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">3+</div>
                  <div className="text-muted-foreground">Major Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
