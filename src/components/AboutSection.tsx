import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, TrendingUp, Clock, Award } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "300%", label: "Average ROI Increase" },
  { icon: Clock, value: "60%", label: "Time Savings" },
  { icon: CheckCircle, value: "100+", label: "Projects Completed" },
  { icon: Award, value: "98%", label: "Client Satisfaction" }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transforming Businesses with
              <span className="text-primary"> AI Innovation</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We're a team of AI specialists dedicated to helping businesses harness the power of artificial intelligence. 
              Our proven methodologies and cutting-edge solutions have helped companies across industries achieve 
              unprecedented growth and efficiency.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From strategy development to implementation and ongoing support, we're your trusted partner in the AI transformation journey.
            </p>
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow"
            >
              Start Your AI Journey
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card border-border text-center group hover:border-primary/50 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:animate-pulse" />
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;