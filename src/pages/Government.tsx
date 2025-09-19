import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Users, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  TrendingUp,
  MapPin,
  Calendar,
  Filter
} from "lucide-react";

const stats = {
  totalIssues: 1247,
  activeIssues: 89,
  resolvedToday: 23,
  avgResolutionTime: "2.3 days",
  citizenEngagement: "84%",
  departmentEfficiency: "91%"
};

const recentIssues = [
  {
    id: "#CZ2025045",
    type: "Water Leak",
    location: "Crawford Market, Fort, Mumbai",
    priority: "High",
    department: "BMC Hydraulic Engineering Dept",
    reportedAt: "2 min ago",
    status: "New"
  },
  {
    id: "#CZ2025044",
    type: "Pothole",
    location: "Western Express Highway, Andheri East, Mumbai", 
    priority: "Medium",
    department: "BMC Roads Department",
    reportedAt: "15 min ago",
    status: "Assigned"
  },
  {
    id: "#CZ2025043",
    type: "Streetlight",
    location: "Ghatkopar East Residential Colony, Mumbai",
    priority: "Low",
    department: "BMC Electrical Department",
    reportedAt: "1 hour ago",
    status: "In Progress"
  }
];


const departmentStats = [
  { name: "Roads", issues: 34, resolved: 28, efficiency: "89%" },
  { name: "Water", issues: 22, resolved: 20, efficiency: "95%" },
  { name: "Electrical", issues: 18, resolved: 15, efficiency: "83%" },
  { name: "Waste", issues: 15, resolved: 12, efficiency: "80%" }
];

const Government = () => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-destructive";
      case "Medium":
        return "bg-warning";
      default:
        return "bg-info";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "In Progress":
        return <Clock size={14} className="text-accent" />;
      case "Assigned":
        return <Users size={14} className="text-info" />;
      default:
        return <AlertTriangle size={14} className="text-warning" />;
    }
  };

  return (
    <div className="p-6 pb-20 max-w-4xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-poppins font-bold text-foreground mb-2">
          Government Dashboard
        </h1>
        <p className="text-muted-foreground">
          Real-time city management & analytics
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <Card className="shadow-card">
          <CardContent className="pt-6 text-center">
            <div className="text-3xl font-bold text-primary mb-1">{stats.totalIssues}</div>
            <div className="text-sm text-muted-foreground">Total Issues</div>
          </CardContent>
        </Card>
        
        <Card className="shadow-card">
          <CardContent className="pt-6 text-center">
            <div className="text-3xl font-bold text-accent mb-1">{stats.activeIssues}</div>
            <div className="text-sm text-muted-foreground">Active Issues</div>
          </CardContent>
        </Card>
        
        <Card className="shadow-card">
          <CardContent className="pt-6 text-center">
            <div className="text-3xl font-bold text-success mb-1">{stats.resolvedToday}</div>
            <div className="text-sm text-muted-foreground">Resolved Today</div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg font-poppins">
              <TrendingUp size={20} className="text-primary" />
              Performance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Avg Resolution Time</span>
              <span className="font-bold text-foreground">{stats.avgResolutionTime}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Citizen Engagement</span>
              <span className="font-bold text-primary">{stats.citizenEngagement}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Dept Efficiency</span>
              <span className="font-bold text-success">{stats.departmentEfficiency}</span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg font-poppins">
              <BarChart3 size={20} className="text-accent" />
              Heatmap Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-square bg-gradient-to-br from-primary-light via-accent-light to-success-light rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-4 border-2 border-dashed border-primary/30 rounded flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={32} className="text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-primary">City Issues Heatmap</p>
                  <p className="text-xs text-muted-foreground mt-1">Interactive visualization</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Department Performance */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-lg font-poppins">Department Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {departmentStats.map((dept) => (
              <div key={dept.name} className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
                <div className="flex-1">
                  <div className="font-medium text-foreground">{dept.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {dept.issues} active, {dept.resolved} resolved
                  </div>
                </div>
                <div className="text-right">
                  <Badge 
                    variant="outline" 
                    className={`${parseInt(dept.efficiency) > 85 ? 'bg-success' : 'bg-warning'} text-white border-0`}
                  >
                    {dept.efficiency}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Issues */}
      <Card className="shadow-card">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg font-poppins">Recent Issues</CardTitle>
          <Button variant="outline" size="sm" className="gap-2">
            <Filter size={16} />
            Filter
          </Button>
        </CardHeader>
        <CardContent className="space-y-3">
          {recentIssues.map((issue) => (
            <div key={issue.id} className="flex items-center gap-3 p-4 rounded-lg border bg-card">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  {getStatusIcon(issue.status)}
                  <span className="font-medium text-foreground">{issue.id}</span>
                  <Badge 
                    variant="outline" 
                    className={`${getPriorityColor(issue.priority)} text-white border-0 text-xs`}
                  >
                    {issue.priority}
                  </Badge>
                </div>
                <p className="font-medium text-foreground">{issue.type}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
                  <span className="flex items-center gap-1">
                    <MapPin size={10} />
                    {issue.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={10} />
                    {issue.department}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={10} />
                    {issue.reportedAt}
                  </span>
                </div>
              </div>
              <Button size="sm" variant="outline">
                Assign
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <Button className="bg-gradient-primary hover:bg-primary-hover">
          Generate Report
        </Button>
        <Button variant="outline">
          Export Data
        </Button>
        <Button className="bg-gradient-accent hover:bg-accent-hover">
          View Analytics
        </Button>
      </div>
    </div>
  );
};

export default Government;