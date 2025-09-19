import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Trophy, MapPin, Clock, CheckCircle, AlertTriangle, TrendingUp } from "lucide-react";

const userStats = {
  name: "Vedant Rai",
  points: 1250,
  level: "Civic Champion",
  issuesReported: 23,
  issuesResolved: 18,
  badge: "Top Reporter",
  streak: 7
};

const recentIssues = [
  {
    id: "#CZ2025001",
    type: "Pothole",
    location: "Linking Road, Bandra West, Mumbai",
    status: "In Progress",
    points: 50,
    reportedAt: "2 hours ago"
  },
  {
    id: "#CZ2025002",
    type: "Water Leak", 
    location: "LBS Marg, Kurla, Mumbai",
    status: "Assigned",
    points: 30,
    reportedAt: "5 hours ago"
  },
  {
    id: "#CZ2025003",
    type: "Streetlight",
    location: "Marine Drive, Churchgate, Mumbai", 
    status: "Resolved",
    points: 100,
    reportedAt: "1 day ago"
  }
];

const achievements = [
  { name: "First Report", icon: "🎯", unlocked: true },
  { name: "Weekly Hero", icon: "⭐", unlocked: true },
  { name: "Problem Solver", icon: "🛠️", unlocked: true },
  { name: "City Guardian", icon: "🏆", unlocked: false }
];

const Dashboard = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Resolved":
        return <CheckCircle size={14} className="text-success" />;
      case "In Progress":
        return <Clock size={14} className="text-accent" />;
      default:
        return <AlertTriangle size={14} className="text-warning" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Resolved":
        return "bg-success";
      case "In Progress":
        return "bg-accent";
      default:
        return "bg-warning";
    }
  };

  return (
    <div className="p-6 pb-20 max-w-md mx-auto space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-poppins font-bold text-foreground mb-2">
          Dashboard
        </h1>
        <p className="text-muted-foreground">
          Your civic engagement profile
        </p>
      </div>

      {/* Profile Card */}
      <Card className="shadow-card bg-gradient-primary text-primary-foreground">
        <CardContent className="pt-6">
          <div className="flex items-center gap-4 mb-4">
            <Avatar className="w-16 h-16 bg-white/20">
              <AvatarFallback className="text-primary font-bold text-lg">
                AK
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h2 className="text-xl font-poppins font-bold">{userStats.name}</h2>
              <p className="opacity-90">{userStats.level}</p>
              <Badge variant="secondary" className="mt-1 bg-white/20 text-primary-foreground border-0">
                {userStats.badge}
              </Badge>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold">{userStats.points}</div>
              <div className="text-sm opacity-90">Points</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{userStats.issuesReported}</div>
              <div className="text-sm opacity-90">Reported</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{userStats.streak}</div>
              <div className="text-sm opacity-90">Day Streak</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="shadow-card">
          <CardContent className="pt-6 text-center">
            <div className="w-12 h-12 bg-success-light rounded-full flex items-center justify-center mx-auto mb-2">
              <CheckCircle size={24} className="text-success" />
            </div>
            <div className="text-2xl font-bold text-foreground">{userStats.issuesResolved}</div>
            <div className="text-sm text-muted-foreground">Resolved</div>
          </CardContent>
        </Card>
        
        <Card className="shadow-card">
          <CardContent className="pt-6 text-center">
            <div className="w-12 h-12 bg-accent-light rounded-full flex items-center justify-center mx-auto mb-2">
              <TrendingUp size={24} className="text-accent" />
            </div>
            <div className="text-2xl font-bold text-foreground">78%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Issues */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-lg font-poppins">Recent Reports</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {recentIssues.map((issue) => (
            <div key={issue.id} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  {getStatusIcon(issue.status)}
                  <span className="font-medium text-sm">{issue.id}</span>
                  <Badge 
                    variant="outline" 
                    className={`${getStatusColor(issue.status)} text-white border-0 text-xs`}
                  >
                    {issue.status}
                  </Badge>
                </div>
                <p className="text-sm font-medium text-foreground">{issue.type}</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <MapPin size={10} />
                  {issue.location} • {issue.reportedAt}
                </p>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-primary">+{issue.points}</div>
                <div className="text-xs text-muted-foreground">pts</div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg font-poppins">
            <Trophy size={20} className="text-accent" />
            Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            {achievements.map((achievement) => (
              <div 
                key={achievement.name}
                className={`
                  p-3 rounded-lg text-center border-2 transition-all
                  ${achievement.unlocked 
                    ? "bg-accent-light border-accent text-accent" 
                    : "bg-muted border-muted-foreground/20 text-muted-foreground"
                  }
                `}
              >
                <div className="text-2xl mb-1">{achievement.icon}</div>
                <div className="text-xs font-medium">{achievement.name}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="space-y-3">
        <Button className="w-full bg-gradient-accent hover:bg-accent-hover">
          View Full History
        </Button>
        <Button variant="outline" className="w-full">
          Share Progress
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;