import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Import portfolio images
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import project7 from "@/assets/project-7.jpg";
import project8 from "@/assets/project-8.jpg";

import project9 from "@/assets/project-9.jpg";

const projects = [
  // E-Commerce
  {
    title: "E-Commerce Platform",
    description: "Modern online store with payment integration and admin dashboard",
    image: project1,
    tags: ["React", "Node.js", "Stripe"],
    category: "E-Commerce",
  },
  {
    title: "Fashion Store",
    description: "Trendy fashion e-commerce site with cart and order tracking",
    image: project4,
    tags: ["Next.js", "Tailwind CSS", "MongoDB"],
    category: "E-Commerce",
  },
  {
    title: "Grocery Delivery App",
    description: "Online grocery platform with real-time inventory and delivery system",
    image: project9,
    tags: ["Vue.js", "Firebase", "Payments"],
    category: "E-Commerce",
  },

  // WordPress
  {
    title: "WordPress Business Site",
    description: "Custom WordPress theme with advanced functionality and SEO optimization",
    image: project2,
    tags: ["WordPress", "PHP", "SEO"],
    category: "WordPress",
  },
  {
    title: "Blog & Magazine",
    description: "Responsive WordPress blog with custom post types and AdSense integration",
    image: project5,
    tags: ["WordPress", "Elementor", "MySQL"],
    category: "WordPress",
  },
  {
    title: "Portfolio WP Theme",
    description: "Lightweight WordPress portfolio theme optimized for speed",
    image: project6,
    tags: ["WordPress", "PHP", "Optimization"],
    category: "WordPress",
  },

  // Web
  {
    title: "Corporate Website",
    description: "Professional corporate website with modern design and animations",
    image: project3,
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Web",
  },
  {
    title: "Landing Page",
    description: "High-converting landing page for startups with A/B tested design",
    image: project7,
    tags: ["React", "Tailwind", "SEO"],
    category: "Web",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio with smooth animations and responsive design",
    image: project8,
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    category: "Web",
  },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Web", "WordPress", "E-Commerce"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-background via-secondary/10 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated collection of my recent projects and digital solutions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeFilter === category
                  ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg"
                  : "bg-secondary/40 text-muted-foreground hover:bg-secondary/60"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="relative overflow-hidden backdrop-blur-xl bg-card/60 border border-border/40 hover:border-primary/60 transition-all duration-500 hover:shadow-2xl group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Project Info */}
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
