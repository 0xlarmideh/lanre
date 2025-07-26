import { Card, CardContent } from "@/components/ui/card";
import { Brain, Target, Zap, Users, BarChart, Shield } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Strategy & Roadmap Design",
    description: "We help you set actionable plans for sustainable & long-term AI adoption. We analyze your entire workflow and identify automations with the highest ROI."
  },
  {
    icon: Target,
    title: "Growth-Focused AI Solutions",
    description: "We specialize in implementing AI solutions that directly impact your bottom line, focusing on measurable growth and efficiency improvements."
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Streamline your operations with intelligent automation that reduces manual work and eliminates repetitive tasks across your organization."
  },
  {
    icon: Users,
    title: "Team Training & Support",
    description: "Comprehensive training programs to ensure your team can effectively utilize AI tools and maintain competitive advantage in your industry."
  },
  {
    icon: BarChart,
    title: "Performance Analytics",
    description: "Advanced analytics and reporting systems that provide deep insights into your AI implementation success and optimization opportunities."
  },
  {
    icon: Shield,
    title: "AI Security & Compliance",
    description: "Ensure your AI implementations meet industry standards and regulatory requirements while maintaining the highest security protocols."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your AI Advantage <span className="text-primary">Starts Here</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive AI solutions designed to transform your business operations and drive sustainable growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <service.icon className="w-12 h-12 text-primary group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;