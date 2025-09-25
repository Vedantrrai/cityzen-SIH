import { useState, useEffect } from 'react';
import { Camera, MapPin, Plus, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import potholeImage from '@/assets/placeholder-pothole.png';

const ReportIssue = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [issueType, setIssueType] = useState<string>('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('Detecting location...');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const detectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Mock reverse geocoding for Mumbai
          const mumbaiLocations = [
            'Near Tiwari College, Kanakia Rd, Mira Road East',
          'Kd empire, Mira Road East',
          'Shanti Nagar Sector 7, Mira Road East',
          'Ramdev Park Road, Beverly Park, Mira Road East',
          ];
          const randomLocation = mumbaiLocations[Math.floor(Math.random() * mumbaiLocations.length)];
          setLocation(randomLocation);
          toast({
            title: "📍 Location detected",
            description: "Your current Mumbai location has been captured",
          });
        },
        () => {
          setLocation('Unable to detect location');
          toast({
            title: "⚠️ Location error",
            description: "Please enter your location manually",
            variant: "destructive",
          });
        }
      );
    }
  };

  const handleSubmit = async () => {
    if (!issueType || !description) {
      toast({
        title: "⚠️ Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "✅ Issue reported successfully!",
      description: "Your report has been submitted to the authorities",
    });
    
    setIsSubmitting(false);
    navigate('/tracking');
  };

  useEffect(() => {
    detectLocation();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5 pb-20 relative overflow-hidden">
      {/* Background mesh effect */}
      <div className="absolute inset-0 civic-background-mesh" />
      <div className="container max-w-md mx-auto px-4 py-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-2xl font-bold text-foreground mb-2">Report Mumbai Issue</h1>
          <p className="text-muted-foreground">Help improve our Maximum City</p>
        </div>

        {/* Main Form Card */}
        <Card className="civic-card animate-slide-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Plus className="w-5 h-5" />
              New Report
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Image Upload */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-foreground">Photo Evidence</label>
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label
                  htmlFor="image-upload"
                  className="block w-full h-48 border-2 border-dashed border-border rounded-xl cursor-pointer hover:border-primary/50 transition-colors overflow-hidden"
                >
                  {selectedImage ? (
                    <img
                      src={selectedImage}
                      alt="Issue preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-muted-foreground hover:text-primary transition-colors">
                      <Camera className="w-8 h-8 mb-2" />
                      <span className="text-sm font-medium">Tap to add photo</span>
                      <img
                        src={potholeImage}
                        alt="Example pothole"
                        className="w-16 h-12 object-cover rounded-lg mt-2 opacity-50"
                      />
                    </div>
                  )}
                </label>
              </div>
            </div>

            {/* Location */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-foreground">Location</label>
              <div className="flex gap-2">
                <Input 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter location manually"
                  className="flex-1"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={detectLocation}
                  className="civic-button-primary px-3"
                >
                  <MapPin className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Issue Type */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-foreground">Issue Type</label>
              <Select value={issueType} onValueChange={setIssueType}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select issue type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pothole">🕳️ Pothole</SelectItem>
                  <SelectItem value="waste">🗑️ Waste Management</SelectItem>
                  <SelectItem value="water_leak">💧 Water Leak</SelectItem>
                  <SelectItem value="streetlight">💡 Street Light</SelectItem>
                  <SelectItem value="other">📝 Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-foreground">Description</label>
              <Textarea
                placeholder="Describe the issue in detail..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="min-h-[100px] resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full civic-button-secondary text-lg py-6 font-semibold"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Submitting Report...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Submit Report
                </div>
              )}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReportIssue;
