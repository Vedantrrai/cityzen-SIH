import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Users, CheckCircle, MapPin, ArrowRight } from "lucide-react";
import heroImage from "@/assets/cityzen-hero.png";

const features = [
  {
    icon: AlertTriangle,
    title: "Report Issues",
    description: "Snap, locate, and report city problems instantly",
    color: "text-accent"
  },
  {
    icon: MapPin,
    title: "Live Tracking", 
    description: "Monitor progress with real-time status updates",
    color: "text-primary"
  },
  {
    icon: Users,
    title: "Community Impact",
    description: "Join thousands making cities better together",
    color: "text-info"
  },
  {
    icon: CheckCircle,
    title: "Get Results",
    description: "See your reports resolved by local authorities", 
    color: "text-success"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
        <div className="relative p-6 pt-12 text-center">
          <div className="max-w-md mx-auto">
            <div className="mb-6">
              <img 
                src={heroImage} 
                alt="Cityzen - Your City, Your Voice" 
                className="w-full aspect-video object-cover rounded-2xl shadow-xl"
              />
            </div>
            
            <Badge variant="outline" className="bg-primary-light text-primary border-primary mb-4">
              Civic Engagement Platform
            </Badge>
            
            <h1 className="text-4xl font-poppins font-bold text-foreground mb-4 leading-tight">
              Your City,<br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Your Voice
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Report city issues, track progress, and make your community better with Cityzen
            </p>
            
            <div className="flex flex-col gap-3">
              <Link to="/report">
                <Button 
                  size="lg" 
                  className="w-full h-14 text-lg font-semibold bg-gradient-accent hover:bg-accent-hover gap-2"
                >
                  Report an Issue
                  <ArrowRight size={20} />
                </Button>
              </Link>
              
              <Link to="/tracking">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full h-14 text-lg font-semibold"
                >
                  Track Issues
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="p-6 mt-8">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-poppins font-bold text-center text-foreground mb-6">
            How Cityzen Works
          </h2>
          
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <Card key={feature.title} className="shadow-card hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 text-center">
                  <div className={`w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-3`}>
                    <feature.icon size={24} className={feature.color} />
                  </div>
                  <h3 className="font-poppins font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="p-6 mt-8">
        <Card className="shadow-card bg-gradient-surface">
          <CardContent className="pt-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-poppins font-bold text-foreground mb-2">
                Community Impact
              </h3>
              <p className="text-sm text-muted-foreground">
                Real results from real citizens
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1,247</div>
                <div className="text-sm text-muted-foreground">Issues Reported</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success">892</div>
                <div className="text-sm text-muted-foreground">Resolved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">5,689</div>
                <div className="text-sm text-muted-foreground">Active Citizens</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="p-6 mt-8">
        <div className="max-w-md mx-auto text-center">
          <h3 className="text-xl font-poppins font-bold text-foreground mb-3">
            Ready to Make a Difference?
          </h3>
          <p className="text-muted-foreground mb-6">
            Join thousands of citizens building better communities together
          </p>
          
          <Link to="/dashboard">
            <Button 
              className="w-full h-12 bg-gradient-primary hover:bg-primary-hover font-semibold"
            >
              Get Started Today
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;