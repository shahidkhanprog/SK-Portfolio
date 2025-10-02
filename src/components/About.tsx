import { Award, Users, Clock, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import profileImage from "@/assets/profile1.jpg";

const About = () => {
  const stats = [
    { icon: Award, label: "Years Experience", value: "3+" },
    { icon: Users, label: "Happy Clients", value: "50+" },
    { icon: Clock, label: "Projects Done", value: "130+" },
    { icon: Zap, label: "Response Time", value: "24h" },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate web developer dedicated to creating exceptional digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image */}
          <div className="animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-2xl opacity-20" />
              <img
                src={profileImage}
                alt="Shahid Khan"
                className="relative rounded-2xl shadow-card w-full max-w-md mx-auto"
              />
            </div>
          </div>

          {/* About Content */}
          <div className="animate-fade-in space-y-6">
            <h3 className="text-3xl font-bold">
              Hi, I'm <span className="text-primary">Shahid Khan</span>
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a professional web developer specializing in modern, responsive, and user-centric digital solutions. With comprehensive expertise in HTML, CSS, JavaScript, React, PHP, and WordPress, I deliver end-to-end web development services from initial concept through deployment and beyond.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My approach centers on writing clean, maintainable code while prioritizing client objectives and user experience. I stay current with emerging technologies and industry best practices to ensure every project meets the highest standards of quality and performance.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I offer a full spectrum of services including custom website development, sophisticated web applications, and ongoing maintenance and support. My commitment is to transform your vision into a polished digital presence through technical excellence and dedicated partnership.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card-hover animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-3xl font-bold mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
