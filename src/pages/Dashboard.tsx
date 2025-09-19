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
        return <CheckCircle size={14} className="text-green-600" />;
      case "In Progress":
        return <Clock size={14} className="text-blue-500" />;
      default:
        return <AlertTriangle size={14} className="text-yellow-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Resolved":
        return "bg-green-500";
      case "In Progress":
        return "bg-blue-500";
      default:
        return "bg-yellow-500";
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center mb-4 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
          Dashboard
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base">
          Your civic engagement profile
        </p>
      </div>

      {/* Profile Card */}
      <Card className="shadow-card bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <Avatar className="w-16 h-16 bg-white/20">
              <AvatarFallback className="text-primary font-bold text-lg">
                VR
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-xl sm:text-2xl font-bold">{userStats.name}</h2>
              <p className="opacity-90">{userStats.level}</p>
              <Badge variant="secondary" className="mt-2 bg-white/20 border-0">
                {userStats.badge}
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-xl sm:text-2xl font-bold">{userStats.points}</div>
              <div className="text-xs sm:text-sm opacity-90">Points</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold">{userStats.issuesReported}</div>
              <div className="text-xs sm:text-sm opacity-90">Reported</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold">{userStats.streak}</div>
              <div className="text-xs sm:text-sm opacity-90">Day Streak</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="shadow-card">
          <CardContent className="pt-6 text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <CheckCircle size={20} className="text-green-600" />
            </div>
            <div className="text-lg sm:text-2xl font-bold text-foreground">
              {userStats.issuesResolved}
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">Resolved</div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="pt-6 text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <TrendingUp size={20} className="text-blue-500" />
            </div>
            <div className="text-lg sm:text-2xl font-bold text-foreground">78%</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Success Rate</div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Issues */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-base sm:text-lg">Recent Reports</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {recentIssues.map((issue) => (
            <div
              key={issue.id}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-3 rounded-lg bg-muted/50"
            >
              <div>
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
                <p className="text-sm font-medium">{issue.type}</p>
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
          <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
            <Trophy size={18} className="text-yellow-500" />
            Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {achievements.map((achievement) => (
              <div
                key={achievement.name}
                className={`
                  p-3 rounded-lg text-center border-2 transition-all
                  ${achievement.unlocked
                    ? "bg-blue-100 border-blue-400 text-blue-600"
                    : "bg-muted border-muted-foreground/20 text-muted-foreground"
                  }
                `}
              >
                <div className="text-xl sm:text-2xl mb-1">{achievement.icon}</div>
                <div className="text-xs sm:text-sm font-medium">{achievement.name}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="space-y-3 sm:space-y-0 sm:flex sm:gap-3">
        <Button className="w-full sm:w-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
          View Full History
        </Button>
        <Button variant="outline" className="w-full sm:w-1/2">
          Share Progress
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
