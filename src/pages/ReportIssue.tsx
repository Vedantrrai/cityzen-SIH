import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Camera, MapPin, Upload, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import potholeImage from "@/assets/pothole-sample.jpg";

const issueTypes = [
  "Pothole",
  "Waste Management", 
  "Water Leak",
  "Streetlight",
  "Traffic Signal",
  "Road Damage",
  "Garbage Collection",
  "Water Supply"
];

const ReportIssue = () => {
  const [selectedIssue, setSelectedIssue] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = () => {
    if (!selectedIssue) {
      toast({
        title: "Please select an issue type",
        description: "Choose the type of issue you want to report",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitted(true);
    toast({
      title: "Issue Reported Successfully!",
      description: "Your report has been submitted and assigned ID #CZ2024001",
    });

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setSelectedIssue("");
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="p-6 pb-20 max-w-md mx-auto">
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
          <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center">
            <CheckCircle size={40} className="text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-poppins font-bold text-foreground mb-2">
              Report Submitted!
            </h2>
            <p className="text-muted-foreground mb-4">
              Your issue has been reported successfully
            </p>
            <Badge variant="outline" className="bg-primary-light text-primary border-primary">
              Report ID: #CZ2024001
            </Badge>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 pb-20 max-w-md mx-auto space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-poppins font-bold text-foreground mb-2">
          Report Issue
        </h1>
        <p className="text-muted-foreground">
          Help improve your city by reporting issues
        </p>
      </div>

      {/* Photo Upload Section */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg font-poppins">
            <Camera size={20} className="text-primary" />
            Add Photo
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
            <img 
              src={potholeImage} 
              alt="Sample pothole issue" 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 right-2">
              <Button size="sm" variant="secondary" className="gap-2">
                <Upload size={16} />
                Change
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Location Section */}
      <Card className="shadow-card">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent-light rounded-lg flex items-center justify-center">
              <MapPin size={20} className="text-accent" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-foreground">Current Location</p>
              <p className="text-sm text-muted-foreground">
                123 Main Street, Downtown District
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Issue Type Selection */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-lg font-poppins">Issue Type</CardTitle>
        </CardHeader>
        <CardContent>
          <Select value={selectedIssue} onValueChange={setSelectedIssue}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select issue type" />
            </SelectTrigger>
            <SelectContent>
              {issueTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Submit Button */}
      <Button 
        onClick={handleSubmit}
        className="w-full h-14 text-lg font-semibold bg-gradient-accent hover:bg-accent-hover"
        size="lg"
      >
        Submit Report
      </Button>
    </div>
  );
};

export default ReportIssue;