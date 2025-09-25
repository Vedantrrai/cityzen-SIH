import { Trophy, Award, Star, TrendingUp, Calendar, MapPin, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { currentUser, mockUsers, mockIssues } from '@/data/mockData';
import { cn } from '@/lib/utils';

const Dashboard = () => {
  const userIssues = mockIssues.filter(issue => issue.reportedBy === currentUser.name);
  
  const getRankIcon = (rank: number) => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return '🏅';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'reported': return 'status-pending';
      case 'assigned': return 'status-assigned';
      case 'in_progress': return 'status-progress';
      case 'resolved': return 'status-resolved';
      default: return 'status-pending';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5 pb-20 relative overflow-hidden">
      {/* Background mesh effect */}
      <div className="absolute inset-0 civic-background-mesh" />
      <div className="container max-w-md mx-auto px-4 py-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-2xl font-bold text-foreground mb-2">My Dashboard</h1>
          <p className="text-muted-foreground">Your Maximum City contribution</p>
        </div>

        {/* Profile Section */}
        <Card className="civic-card-glass mb-6 animate-slide-up animate-glow">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4 mb-6">
              <Avatar className="w-16 h-16 ring-4 ring-primary/30 animate-float">
                <AvatarFallback className="bg-gradient-primary text-white text-xl font-bold">
                  {currentUser.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="font-bold text-lg text-foreground">{currentUser.name}</h2>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Trophy className="w-4 h-4" />
                  <span className="text-sm">Rank #{currentUser.rank}</span>
                </div>
              </div>
            </div>

            {/* Points & Stats */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-secondary" />
                  <span className="font-semibold text-foreground">Points</span>
                </div>
                <span className="text-2xl font-bold text-primary">{currentUser.points.toLocaleString()}</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">{currentUser.issuesReported}</p>
                  <p className="text-xs text-muted-foreground">Issues Reported</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-secondary">{currentUser.issuesResolved}</p>
                  <p className="text-xs text-muted-foreground">Issues Resolved</p>
                </div>
              </div>

              {/* Progress to next rank */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Progress to Rank #{currentUser.rank - 1}</span>
                  <span className="font-medium text-foreground">85%</span>
                </div>
                <Progress value={85} className="h-2" />
                <p className="text-xs text-muted-foreground">180 more points needed</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Badges Section */}
        <Card className="civic-card-glass mb-6 animate-slide-up animate-shimmer" style={{ animationDelay: '100ms' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Award className="w-5 h-5 animate-bounce" />
              Badges ({currentUser.badges.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {currentUser.badges.map((badge, index) => (
                <div
                  key={badge.id}
                  className="flex items-center gap-3 p-3 rounded-lg bg-gradient-card border border-border/50 animate-bounce-in"
                  style={{ animationDelay: `${(index + 1) * 150}ms` }}
                >
                  <div className="text-2xl">{badge.icon}</div>
                  <div className="flex-1">
                    <p className="font-medium text-sm text-foreground">{badge.name}</p>
                    <p className="text-xs text-muted-foreground">{badge.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* My Issues */}
        <Card className="civic-card-glass mb-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <MapPin className="w-5 h-5 animate-pulse" />
              My Issues ({userIssues.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {userIssues.map((issue, index) => (
                <div
                  key={issue.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-gradient-card border border-border/50 animate-fade-in"
                  style={{ animationDelay: `${(index + 3) * 100}ms` }}
                >
                  <div className="flex-1">
                    <p className="font-medium text-sm text-foreground mb-1">{issue.title}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {issue.reportedAt.toLocaleDateString()}
                    </div>
                  </div>
                  <Badge className={cn("border", getStatusColor(issue.status))}>
                    {issue.status.replace('_', ' ')}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Leaderboard Preview */}
        <Card className="civic-card-glass animate-slide-up animate-glow" style={{ animationDelay: '300ms' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <TrendingUp className="w-5 h-5 animate-bounce" />
              Leaderboard
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockUsers.slice(0, 5).map((user, index) => (
                <div
                  key={user.id}
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-lg transition-all animate-fade-in",
                    user.id === currentUser.id 
                      ? "bg-gradient-secondary/10 border-2 border-secondary/30 shadow-medium" 
                      : "bg-gradient-card border border-border/50"
                  )}
                  style={{ animationDelay: `${(index + 4) * 100}ms` }}
                >
                  <div className="text-2xl">{getRankIcon(user.rank)}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-sm text-foreground">{user.name}</p>
                      {user.id === currentUser.id && (
                        <Badge variant="secondary" className="text-xs">You</Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">{user.points.toLocaleString()} points</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-sm text-primary">#{user.rank}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
