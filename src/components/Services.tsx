import { 
  Code2, 
  Database, 
  Globe, 
  Wrench, 
  Brush, 
  Rocket, 
  ShieldCheck, 
  Search, 
  Smartphone, 
  Layers,
  CheckCircle2 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description:
        "Modern, responsive websites built with HTML, CSS, JavaScript, Tailwind CSS, Bootstrap, and React.",
    },
    {
      icon: Database,
      title: "PHP & SQL Solutions",
      description:
        "Custom applications, APIs, and database-driven solutions using PHP and SQL.",
    },
    {
      icon: Globe,
      title: "WordPress Development",
      description:
        "Themes, plugins, and full WordPress solutions tailored to your business.",
    },
    {
      icon: Wrench,
      title: "Website Maintenance",
      description:
        "Performance optimization, bug fixing, updates, and security improvements.",
    },
    {
      icon: Brush,
      title: "UI/UX Design",
      description:
        "Clean and user-friendly interface design with attention to modern trends and usability.",
    },
    {
      icon: Rocket,
      title: "Performance Optimization",
      description:
        "Speed improvements, caching, and SEO-friendly optimization for faster loading sites.",
    },
    {
      icon: ShieldCheck,
      title: "Website Security",
      description:
        "SSL setup, malware removal, and security audits to keep your website safe.",
    },
    {
      icon: Search,
      title: "SEO Services",
      description:
        "On-page SEO, keyword optimization, and best practices to improve search rankings.",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description:
        "Mobile-first approach ensuring your website looks great on all devices.",
    },
    {
      icon: Layers,
      title: "Custom Web Solutions",
      description:
        "Tailor-made solutions for businesses, startups, and personal brands.",
    },
  ];

  const benefits = [
    "Clean Code",
    "Client Satisfaction",
    "Full Support",
    "Latest Technologies",
    "Fast Delivery",
    "Affordable Pricing",
  ];

  // Directions for card entrance
  const directions = [
    { x: 0, y: -50 }, // top
    { x: -50, y: 0 }, // left
    { x: 50, y: 0 },  // right
    { x: 0, y: 50 },  // bottom
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }} // <-- slow animation
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A complete package of web solutions to build, grow, and maintain your online presence
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const direction = directions[index % directions.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: direction.x, y: direction.y }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 3, delay: index * 0.2 }} // <-- slow + staggered
              >
                <Card
                  className="relative overflow-hidden backdrop-blur-xl bg-card/60 border border-border/40 hover:border-primary/60 transition-all duration-500 hover:shadow-2xl group"
                >
                  <CardContent className="p-8 relative z-10">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Why Choose Me */}
        <motion.div 
          className="bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 rounded-3xl p-10 md:p-14 shadow-xl border border-border/40"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 3 }} // <-- slow animation
        >
          <h3 className="text-3xl font-bold text-center mb-10">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Me?
            </span>
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="flex items-center gap-3 p-5 rounded-xl hover:bg-secondary/40 transition-colors duration-300 bg-background/60"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 3, delay: index * 0.2 }}
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
