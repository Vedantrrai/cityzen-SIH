import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Camera, MapPin, Upload, CheckCircle, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import potholeImage from "@/assets/pothole-sample.jpg";

const issueTypes = [
  "Pothole",
  "Garbage not collected",
  "Water pipeline leakage",
  "Streetlight not working",
  "Traffic Signal issue",
  "Broken Footpath",
  "Illegal Parking",
  "Water Supply Problem",
  "Open Drainage",
  "Noise Pollution"
];

const ReportIssue = () => {
  const [selectedIssue, setSelectedIssue] = useState<string>("");
  const [description, setDescription] = useState<string>("");
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

    if (!description.trim()) {
      toast({
        title: "Please add a description",
        description: "Describe the issue for better resolution",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitted(true);
    toast({
      title: "Issue Reported Successfully!",
      description: "Your report has been submitted and assigned ID #CZ2024MUM01",
    });

    setTimeout(() => {
      setIsSubmitted(false);
      setSelectedIssue("");
      setDescription("");
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="p-6 pb-20 max-w-4xl mx-auto">
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
          <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center">
            <CheckCircle size={40} className="text-primary" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-poppins font-bold text-foreground mb-2">
              Report Submitted!
            </h2>
            <p className="text-muted-foreground mb-4">
              Your issue has been reported successfully
            </p>
            <Badge variant="outline" className="bg-primary-light text-primary border-primary">
              Report ID: #CZ2024MUM01
            </Badge>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 pb-20 max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-2">
          Report Civic Issue
        </h1>
        <p className="text-muted-foreground text-sm md:text-base">
          Help improve Mumbai by reporting issues in your area 🚧
        </p>
      </div>

      {/* Content in responsive grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Photo Upload */}
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
                alt="Sample issue"
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

        {/* Location */}
        <Card className="shadow-card">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent-light rounded-lg flex items-center justify-center">
                <MapPin size={20} className="text-accent" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">Current Location</p>
                <p className="text-sm text-muted-foreground">
                  Dadar West, Mumbai, Maharashtra
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Issue Type */}
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

      {/* Description */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg font-poppins">
            <FileText size={20} className="text-primary" />
            Description
          </CardTitle>
        </CardHeader>
        <CardContent>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the issue (e.g., 'Large pothole near Dadar station causing traffic jams')"
            className="w-full min-h-[100px] p-3 border rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary"
          />
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
