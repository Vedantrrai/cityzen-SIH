import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  AlertTriangle, 
  Users, 
  CheckCircle, 
  MapPin, 
  ArrowRight 
} from "lucide-react";
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
        <div className="relative p-6 pt-16 md:pt-24 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Hero Image */}
            <div className="mb-6 md:mb-10">
              <img 
                src={heroImage} 
                alt="Cityzen - Your City, Your Voice" 
                className="w-full max-w-3xl mx-auto aspect-video object-cover rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Badge */}
            <Badge 
              variant="outline" 
              className="bg-primary-light text-primary border-primary mb-4 text-sm md:text-base px-3 py-1"
            >
              Civic Engagement Platform
            </Badge>
            
            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-poppins font-bold text-foreground mb-6 leading-tight">
              Your City,<br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Your Voice
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              Report city issues, track progress, and make your community better with Cityzen.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link to="/report" className="w-full md:w-auto">
                <Button 
                  size="lg" 
                  className="w-full h-14 text-lg font-semibold bg-gradient-accent hover:bg-accent-hover gap-2"
                >
                  Report an Issue
                  <ArrowRight size={20} />
                </Button>
              </Link>
              
              <Link to="/tracking" className="w-full md:w-auto">
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
      <div className="p-6 mt-12 md:mt-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-poppins font-bold text-center text-foreground mb-10">
            How Cityzen Works
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <Card 
                key={feature.title} 
                className="shadow-card hover:shadow-lg transition-shadow h-full"
              >
                <CardContent className="pt-8 text-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                    <feature.icon size={28} className={feature.color} />
                  </div>
                  <h3 className="font-poppins font-semibold text-lg md:text-xl text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="p-6 mt-12 md:mt-20">
        <Card className="shadow-card bg-gradient-surface">
          <CardContent className="pt-8 pb-10">
            <div className="text-center mb-10">
              <h3 className="text-xl md:text-3xl font-poppins font-bold text-foreground mb-3">
                Community Impact
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Real results from real citizens
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">1,247</div>
                <div className="text-sm md:text-base text-muted-foreground">Issues Reported</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-success">892</div>
                <div className="text-sm md:text-base text-muted-foreground">Resolved</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-accent">5,689</div>
                <div className="text-sm md:text-base text-muted-foreground">Active Citizens</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="p-6 mt-12 md:mt-20">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-xl md:text-3xl font-poppins font-bold text-foreground mb-4">
            Ready to Make a Difference?
          </h3>
          <p className="text-muted-foreground mb-8 text-sm md:text-base">
            Join thousands of citizens building better communities together.
          </p>
          
          <Link to="/dashboard">
            <Button 
              className="w-full md:w-auto h-12 md:h-14 px-8 bg-gradient-primary hover:bg-primary-hover font-semibold text-lg"
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
