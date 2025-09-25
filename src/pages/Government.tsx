import { 
  BarChart3, MapPin, Clock, CheckCircle, Users, 
  TrendingUp, Filter, Calendar 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { mockIssues, mockAnalytics } from '@/data/mockData';
import { cn } from '@/lib/utils';

const GovernmentDashboard = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'reported': return 'status-pending';
      case 'assigned': return 'status-assigned';
      case 'in_progress': return 'status-progress';
      case 'resolved': return 'status-resolved';
      default: return 'status-pending';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-destructive/10 text-destructive border-destructive/20';
      case 'medium': return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'low': return 'bg-primary/10 text-primary border-primary/20';
      default: return 'bg-muted/10 text-muted-foreground border-muted/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5 pb-20 relative overflow-hidden">
      {/* Background mesh effect */}
      <div className="absolute inset-0 civic-background-mesh" />
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">BMC Dashboard</h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Mumbai Municipal Corporation - Issue Management
          </p>
        </div>

        {/* Analytics Overview */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="civic-card animate-slide-up">
            <CardContent className="pt-4 sm:pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg sm:text-2xl font-bold text-primary">
                    {mockAnalytics.totalIssues}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Total Issues</p>
                </div>
                <BarChart3 className="w-6 sm:w-8 h-6 sm:h-8 text-primary/60" />
              </div>
            </CardContent>
          </Card>

          <Card className="civic-card animate-slide-up" style={{ animationDelay: '100ms' }}>
            <CardContent className="pt-4 sm:pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg sm:text-2xl font-bold text-secondary">
                    {mockAnalytics.resolvedIssues}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Resolved</p>
                </div>
                <CheckCircle className="w-6 sm:w-8 h-6 sm:h-8 text-secondary/60" />
              </div>
            </CardContent>
          </Card>

          <Card className="civic-card animate-slide-up" style={{ animationDelay: '200ms' }}>
            <CardContent className="pt-4 sm:pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg sm:text-2xl font-bold text-foreground">
                    {mockAnalytics.avgResolutionTime}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Avg Days</p>
                </div>
                <Clock className="w-6 sm:w-8 h-6 sm:h-8 text-muted-foreground/60" />
              </div>
            </CardContent>
          </Card>

          <Card className="civic-card animate-slide-up" style={{ animationDelay: '300ms' }}>
            <CardContent className="pt-4 sm:pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg sm:text-2xl font-bold text-primary">
                    {Math.round((mockAnalytics.resolvedIssues / mockAnalytics.totalIssues) * 100)}%
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Success Rate</p>
                </div>
                <TrendingUp className="w-6 sm:w-8 h-6 sm:h-8 text-primary/60" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Issues Heatmap */}
          <Card className="civic-card animate-slide-up" style={{ animationDelay: '400ms' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <MapPin className="w-4 sm:w-5 h-4 sm:h-5" />
                Issues Heatmap
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-48 sm:h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg overflow-hidden mb-4">
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                {/* Mock heatmap spots */}
                <div className="absolute top-4 left-6 w-5 sm:w-8 h-5 sm:h-8 bg-destructive/60 rounded-full animate-pulse" />
                <div className="absolute top-12 right-8 w-4 sm:w-6 h-4 sm:h-6 bg-secondary/60 rounded-full animate-pulse" />
                <div className="absolute bottom-6 left-12 w-6 sm:w-10 h-6 sm:h-10 bg-destructive/80 rounded-full animate-pulse" />
                <div className="absolute bottom-8 right-6 w-3 sm:w-4 h-3 sm:h-4 bg-primary/60 rounded-full animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium">Interactive Heatmap</p>
                </div>
              </div>

              {/* Legend */}
              <div className="flex flex-wrap justify-between gap-2 text-xs">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                  <span className="text-muted-foreground">Low</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-secondary rounded-full" />
                  <span className="text-muted-foreground">Medium</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-destructive rounded-full" />
                  <span className="text-muted-foreground">High</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Top Categories */}
          <Card className="civic-card animate-slide-up" style={{ animationDelay: '500ms' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <BarChart3 className="w-4 sm:w-5 h-4 sm:h-5" />
                Top Categories
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockAnalytics.topCategories.map((category, index) => {
                  const percentage = (category.count / mockAnalytics.totalIssues) * 100;
                  return (
                    <div key={category.category} className="space-y-2">
                      <div className="flex justify-between text-xs sm:text-sm">
                        <span className="font-medium text-foreground">{category.category}</span>
                        <span className="text-muted-foreground">{category.count} ({percentage.toFixed(1)}%)</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="h-2 rounded-full bg-gradient-primary transition-all duration-1000 animate-slide-up"
                          style={{ 
                            width: `${percentage}%`,
                            animationDelay: `${(index + 6) * 200}ms`
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Issues Table (scrollable on mobile) */}
        <Card className="civic-card mt-8 animate-slide-up" style={{ animationDelay: '600ms' }}>
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
              <CardTitle className="flex items-center gap-2 text-primary text-base sm:text-lg">
                <Users className="w-4 sm:w-5 h-4 sm:h-5" />
                Open Issues ({mockIssues.filter(i => i.status !== 'resolved').length})
              </CardTitle>
              <div className="flex gap-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-28 sm:w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="pothole">Potholes</SelectItem>
                    <SelectItem value="waste">Waste</SelectItem>
                    <SelectItem value="water_leak">Water Leaks</SelectItem>
                    <SelectItem value="streetlight">Street Lights</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-1" />
                  Filter
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockIssues.filter(issue => issue.status !== 'resolved').map((issue, index) => (
                <div
                  key={issue.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 p-4 rounded-lg bg-gradient-card border border-border/50 hover:shadow-medium transition-all animate-fade-in"
                  style={{ animationDelay: `${(index + 7) * 100}ms` }}
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                      <h3 className="font-semibold text-foreground text-sm sm:text-base">{issue.title}</h3>
                      <Badge className={cn("border text-xs sm:text-sm", getPriorityColor(issue.priority))}>
                        {issue.priority}
                      </Badge>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2">{issue.description}</p>
                    <div className="flex flex-wrap gap-3 text-[10px] sm:text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {issue.location.address}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {issue.reportedAt.toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {issue.reportedBy}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row sm:flex-col items-end gap-2">
                    <Badge className={cn("border text-xs sm:text-sm", getStatusColor(issue.status))}>
                      {issue.status.replace('_', ' ')}
                    </Badge>
                    {issue.assignedTo && (
                      <span className="text-[10px] sm:text-xs text-muted-foreground">{issue.assignedTo}</span>
                    )}
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

export default GovernmentDashboard;
