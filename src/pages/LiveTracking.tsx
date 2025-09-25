import { useState } from 'react';
import { MapPin, Clock, CheckCircle, AlertCircle, User, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { mockIssues } from '@/data/mockData';
import { Issue } from '../types';
import { cn } from '@/lib/utils';

const LiveTracking = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [selectedIssue, setSelectedIssue] = useState<Issue | null>(null);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'reported': return <AlertCircle className="w-4 h-4" />;
      case 'assigned': return <User className="w-4 h-4" />;
      case 'in_progress': return <Clock className="w-4 h-4" />;
      case 'resolved': return <CheckCircle className="w-4 h-4" />;
      default: return <AlertCircle className="w-4 h-4" />;
    }
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

  const getStatusText = (status: string) => {
    switch (status) {
      case 'reported': return 'Reported';
      case 'assigned': return 'Assigned';
      case 'in_progress': return 'In Progress';
      case 'resolved': return 'Resolved';
      default: return 'Unknown';
    }
  };

  const filteredIssues = selectedFilter === 'all' 
    ? mockIssues 
    : mockIssues.filter(issue => issue.status === selectedFilter);

  const ProgressTimeline = ({ issue }: { issue: Issue }) => {
    const steps = [
      { key: 'reported', label: 'Reported', completed: true },
      { key: 'assigned', label: 'Assigned', completed: issue.assignedAt !== undefined },
      { key: 'in_progress', label: 'In Progress', completed: issue.status === 'in_progress' || issue.status === 'resolved' },
      { key: 'resolved', label: 'Resolved', completed: issue.status === 'resolved' },
    ];

    return (
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={step.key} className="flex items-center gap-3">
            <div className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center transition-all",
              step.completed 
                ? "bg-primary text-primary-foreground" 
                : "bg-muted text-muted-foreground"
            )}>
              {step.completed ? (
                <CheckCircle className="w-4 h-4" />
              ) : (
                <div className="w-2 h-2 rounded-full bg-current" />
              )}
            </div>
            <div className="flex-1">
              <p className={cn(
                "font-medium",
                step.completed ? "text-foreground" : "text-muted-foreground"
              )}>
                {step.label}
              </p>
              {step.completed && (
                <p className="text-xs text-muted-foreground">
                  {step.key === 'reported' && issue.reportedAt.toLocaleDateString()}
                  {step.key === 'assigned' && issue.assignedAt?.toLocaleDateString()}
                  {step.key === 'resolved' && issue.resolvedAt?.toLocaleDateString()}
                </p>
              )}
            </div>
            {index < steps.length - 1 && (
              <div className={cn(
                "absolute left-4 mt-8 w-0.5 h-6 -z-10",
                step.completed ? "bg-primary" : "bg-muted"
              )} />
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5 pb-20">
      <div className="container max-w-md mx-auto px-4 py-6">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-2xl font-bold text-foreground mb-2">Live Tracking</h1>
          <p className="text-muted-foreground">Track your reported issues</p>
        </div>

        {/* Filters */}
        <div className="mb-6 animate-slide-up">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {[
              { key: 'all', label: 'All', count: mockIssues.length },
              { key: 'reported', label: 'Reported', count: mockIssues.filter(i => i.status === 'reported').length },
              { key: 'assigned', label: 'Assigned', count: mockIssues.filter(i => i.status === 'assigned').length },
              { key: 'in_progress', label: 'In Progress', count: mockIssues.filter(i => i.status === 'in_progress').length },
              { key: 'resolved', label: 'Resolved', count: mockIssues.filter(i => i.status === 'resolved').length },
            ].map((filter) => (
              <Button
                key={filter.key}
                variant={selectedFilter === filter.key ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter(filter.key)}
                className={cn(
                  "whitespace-nowrap",
                  selectedFilter === filter.key ? "civic-button-primary" : ""
                )}
              >
                <Filter className="w-3 h-3 mr-1" />
                {filter.label} ({filter.count})
              </Button>
            ))}
          </div>
        </div>

        {/* Interactive Map Preview */}
        <Card className="civic-card mb-6 animate-slide-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <MapPin className="w-5 h-5" />
              Map View
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative h-48 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              {/* Mock map pins */}
              <div className="absolute top-4 left-6">
                <div className="w-4 h-4 bg-secondary rounded-full animate-pulse" />
                <div className="text-xs mt-1 text-secondary-foreground bg-secondary/20 px-1 rounded">Pending</div>
              </div>
              <div className="absolute top-12 right-8">
                <div className="w-4 h-4 bg-primary rounded-full animate-pulse" />
                <div className="text-xs mt-1 text-primary-foreground bg-primary/20 px-1 rounded">Resolved</div>
              </div>
              <div className="absolute bottom-6 left-12">
                <div className="w-4 h-4 bg-status-assigned rounded-full animate-pulse" />
                <div className="text-xs mt-1 text-blue-700 bg-blue-100 px-1 rounded">Assigned</div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-muted-foreground font-medium">Interactive Map</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Issues List */}
        <div className="space-y-4">
          {filteredIssues.map((issue, index) => (
            <Card
              key={issue.id}
              className={cn(
                "civic-card cursor-pointer transition-all hover:shadow-large",
                selectedIssue?.id === issue.id && "ring-2 ring-primary"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedIssue(selectedIssue?.id === issue.id ? null : issue)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-sm font-semibold text-foreground mb-1">
                      {issue.title}
                    </CardTitle>
                    <p className="text-xs text-muted-foreground mb-2">
                      📍 {issue.location.address}
                    </p>
                  </div>
                  <Badge className={cn("ml-2 border", getStatusColor(issue.status))}>
                    {getStatusIcon(issue.status)}
                    <span className="ml-1">{getStatusText(issue.status)}</span>
                  </Badge>
                </div>
              </CardHeader>
              
              {selectedIssue?.id === issue.id && (
                <CardContent className="pt-0 animate-fade-in">
                  <div className="border-t pt-4 space-y-4">
                    <p className="text-sm text-foreground">{issue.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-foreground">Progress Timeline</h4>
                      <ProgressTimeline issue={issue} />
                    </div>
                    {issue.assignedTo && (
                      <div className="flex items-center gap-2 text-sm">
                        <User className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Assigned to:</span>
                        <span className="font-medium text-foreground">{issue.assignedTo}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {filteredIssues.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <AlertCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No issues found for this filter</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveTracking;
