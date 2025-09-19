import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, CheckCircle, AlertCircle, Users, Navigation } from "lucide-react";

const mockIssues = [
  {
    id: "#CZ2025001",
    type: "Pothole",
    location: "Linking Road, Bandra West, Mumbai",
    status: "In Progress",
    assignedTo: "BMC Roads Department",
    reportedAt: "2 hours ago",
    estimatedCompletion: "Today, 4:00 PM",
    stage: 2,
  },
  {
    id: "#CZ2025002",
    type: "Water Leak",
    location: "LBS Marg, Kurla, Mumbai",
    status: "Assigned",
    assignedTo: "BMC Hydraulic Engineering Dept",
    reportedAt: "5 hours ago",
    estimatedCompletion: "Tomorrow, 10:00 AM",
    stage: 1,
  },
  {
    id: "#CZ2025003",
    type: "Streetlight",
    location: "Marine Drive, Churchgate, Mumbai",
    status: "Resolved",
    assignedTo: "BMC Electrical Dept",
    reportedAt: "1 day ago",
    resolvedAt: "3 hours ago",
    stage: 3,
  },
];

const statusConfig = {
  Reported: { color: "bg-info", stage: 0 },
  Assigned: { color: "bg-warning", stage: 1 },
  "In Progress": { color: "bg-accent", stage: 2 },
  Resolved: { color: "bg-success", stage: 3 },
};

const LiveTracking = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Resolved":
        return <CheckCircle size={18} className="text-success" />;
      case "In Progress":
        return <Clock size={18} className="text-accent" />;
      default:
        return <AlertCircle size={18} className="text-warning" />;
    }
  };

  const renderProgressBar = (stage: number) => {
    const stages = ["Reported", "Assigned", "In Progress", "Resolved"];

    return (
      <div className="flex items-center gap-2 mt-4">
        {stages.map((stageName, index) => (
          <div key={stageName} className="flex items-center flex-1">
            <div
              className={`
                w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-xs md:text-sm font-semibold
                ${index <= stage 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted text-muted-foreground"
              }
              `}
            >
              {index + 1}
            </div>
            {index < stages.length - 1 && (
              <div
                className={`
                  flex-1 h-1 mx-2 rounded
                  ${index < stage ? "bg-primary" : "bg-muted"}
                `}
              />
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="p-6 pb-20 max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-poppins font-bold text-foreground mb-3">
          Live Tracking
        </h1>
        <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto">
          Monitor your reported issues in real-time
        </p>
      </div>

      {/* Map View */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg md:text-xl font-poppins">
            <MapPin size={22} className="text-primary" />
            Issues Map
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video bg-gradient-to-br from-primary-light to-accent-light rounded-lg flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-4 border-2 border-dashed border-primary/30 rounded flex items-center justify-center">
              <div className="text-center">
                <Navigation size={36} className="text-primary mx-auto mb-2" />
                <p className="text-sm md:text-base font-medium text-primary">
                  Interactive Map View
                </p>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">
                  3 active issues in your area
                </p>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex gap-4 mt-4 flex-wrap justify-center">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-success rounded-full"></div>
              <span className="text-xs md:text-sm">Resolved</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <span className="text-xs md:text-sm">In Progress</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-warning rounded-full"></div>
              <span className="text-xs md:text-sm">Pending</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Issues List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockIssues.map((issue) => (
          <Card key={issue.id} className="shadow-card">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {getStatusIcon(issue.status)}
                  <span className="font-semibold text-foreground">{issue.id}</span>
                </div>
                <Badge
                  variant="outline"
                  className={`${statusConfig[issue.status as keyof typeof statusConfig]?.color} text-white border-0`}
                >
                  {issue.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3">
                {/* Type + Location */}
                <div>
                  <p className="font-medium text-foreground">{issue.type}</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <MapPin size={12} />
                    {issue.location}
                  </p>
                </div>

                {/* Assigned */}
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Users size={12} />
                  <span>Assigned to {issue.assignedTo}</span>
                </div>

                {/* Dates */}
                <div className="text-xs md:text-sm text-muted-foreground">
                  <p>Reported {issue.reportedAt}</p>
                  {issue.status === "Resolved" && issue.resolvedAt ? (
                    <p className="text-success">Resolved {issue.resolvedAt}</p>
                  ) : (
                    <p>Expected completion: {issue.estimatedCompletion}</p>
                  )}
                </div>

                {/* Progress */}
                {renderProgressBar(issue.stage)}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="flex flex-col md:flex-row gap-3">
        <Button variant="outline" className="flex-1">
          View All Issues
        </Button>
        <Button className="flex-1 bg-gradient-primary hover:bg-primary-hover">
          Get Updates
        </Button>
      </div>
    </div>
  );
};

export default LiveTracking;
