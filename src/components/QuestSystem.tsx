import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Trophy, 
  Star, 
  Lock, 
  CheckCircle, 
  Play,
  MapPin,
  Clock,
  Users,
  BookOpen
} from "lucide-react";

interface QuestStep {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  isLocked: boolean;
  reward: string;
  estimatedTime: string;
}

interface Quest {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  progress: number;
  totalSteps: number;
  completedSteps: number;
  estimatedDuration: string;
  reward: string;
  badge: string;
  isUnlocked: boolean;
  steps: QuestStep[];
}

const QuestSystem = () => {
  const [selectedQuest, setSelectedQuest] = useState<Quest | null>(null);

  const quests: Quest[] = [
    {
      id: "engineering",
      title: "Engineering Quest",
      description: "Master the path to top government engineering colleges. Learn about JEE, NITs, IITs, and scholarship opportunities.",
      category: "Technology",
      difficulty: "Intermediate",
      progress: 60,
      totalSteps: 8,
      completedSteps: 5,
      estimatedDuration: "4-6 weeks",
      reward: "Engineering Pathfinder Badge",
      badge: "🏗️",
      isUnlocked: true,
      steps: [
        {
          id: "1",
          title: "Understanding Engineering Branches",
          description: "Explore different engineering fields and their career prospects",
          isCompleted: true,
          isLocked: false,
          reward: "+50 XP",
          estimatedTime: "30 mins"
        },
        {
          id: "2", 
          title: "JEE Main Preparation Strategy",
          description: "Complete preparation roadmap for JEE Main examination",
          isCompleted: true,
          isLocked: false,
          reward: "+75 XP",
          estimatedTime: "1 hour"
        },
        {
          id: "3",
          title: "Top Government Colleges Research",
          description: "Research and shortlist top NITs, IITs, and state engineering colleges",
          isCompleted: true,
          isLocked: false,
          reward: "+100 XP",
          estimatedTime: "2 hours"
        },
        {
          id: "4",
          title: "Scholarship Applications",
          description: "Apply for merit-based and need-based scholarships",
          isCompleted: true,
          isLocked: false,
          reward: "+125 XP",
          estimatedTime: "3 hours"
        },
        {
          id: "5",
          title: "Mock Interview Practice",
          description: "Practice with industry professionals and alumni mentors",
          isCompleted: true,
          isLocked: false,
          reward: "+150 XP",
          estimatedTime: "1 hour"
        },
        {
          id: "6",
          title: "College Application Process",
          description: "Complete applications for top choice government colleges",
          isCompleted: false,
          isLocked: false,
          reward: "+200 XP",
          estimatedTime: "4 hours"
        },
        {
          id: "7",
          title: "Financial Planning Workshop",
          description: "Plan education expenses and explore funding options",
          isCompleted: false,
          isLocked: false,
          reward: "+175 XP",
          estimatedTime: "2 hours"
        },
        {
          id: "8",
          title: "Industry Mentorship Connect",
          description: "Connect with working engineers from government sector",
          isCompleted: false,
          isLocked: false,
          reward: "+250 XP + Badge",
          estimatedTime: "30 mins"
        }
      ]
    },
    {
      id: "civil-services",
      title: "Civil Services Journey",
      description: "Navigate the path to IAS, IPS, and other administrative services. Master UPSC strategy and interview preparation.",
      category: "Administration",
      difficulty: "Advanced",
      progress: 30,
      totalSteps: 10,
      completedSteps: 3,
      estimatedDuration: "8-12 months",
      reward: "Public Service Champion Badge",
      badge: "🏛️",
      isUnlocked: true,
      steps: []
    },
    {
      id: "medical",
      title: "Medical Professional Quest",
      description: "Chart your course to government medical colleges. NEET preparation, college selection, and specialization guidance.",
      category: "Healthcare",
      difficulty: "Advanced",
      progress: 0,
      totalSteps: 9,
      completedSteps: 0,
      estimatedDuration: "6-8 months",
      reward: "Healthcare Hero Badge",
      badge: "⚕️",
      isUnlocked: false,
      steps: []
    },
    {
      id: "teaching",
      title: "Education Leader Path",
      description: "Become a government teacher or professor. Navigate B.Ed, teaching exams, and academic career opportunities.",
      category: "Education",
      difficulty: "Beginner",
      progress: 0,
      totalSteps: 6,
      completedSteps: 0,
      estimatedDuration: "3-4 months",
      reward: "Knowledge Keeper Badge",
      badge: "📚",
      isUnlocked: false,
      steps: []
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-secondary/10 text-secondary";
      case "Intermediate": return "bg-warning/10 text-warning";
      case "Advanced": return "bg-destructive/10 text-destructive";
      default: return "bg-muted";
    }
  };

  if (selectedQuest) {
    return (
      <div className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Quest Header */}
            <div className="mb-8">
              <Button 
                variant="ghost" 
                onClick={() => setSelectedQuest(null)}
                className="mb-4"
              >
                ← Back to Quests
              </Button>
              
              <Card className="p-8 gradient-card border-0 shadow-medium">
                <div className="flex items-start gap-6">
                  <div className="text-6xl quest-pulse">{selectedQuest.badge}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h1 className="text-3xl font-bold">{selectedQuest.title}</h1>
                      <Badge className={getDifficultyColor(selectedQuest.difficulty)}>
                        {selectedQuest.difficulty}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                      {selectedQuest.description}
                    </p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        <span className="text-sm">{selectedQuest.completedSteps}/{selectedQuest.totalSteps} Steps</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-accent" />
                        <span className="text-sm">{selectedQuest.estimatedDuration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Trophy className="h-4 w-4 text-warning" />
                        <span className="text-sm">{selectedQuest.reward}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="text-sm">1.2k learners</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Quest Progress</span>
                        <span className="text-sm text-muted-foreground">{selectedQuest.progress}%</span>
                      </div>
                      <Progress value={selectedQuest.progress} className="h-3" />
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Quest Steps */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold mb-6">Quest Steps</h2>
              {selectedQuest.steps.map((step, index) => (
                <Card key={step.id} className={`p-6 border-0 shadow-soft transition-smooth hover:shadow-medium ${step.isCompleted ? 'bg-secondary/5 border-l-4 border-l-secondary' : step.isLocked ? 'opacity-50' : 'gradient-card hover:scale-[1.01]'}`}>
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${step.isCompleted ? 'bg-secondary text-secondary-foreground' : step.isLocked ? 'bg-muted' : 'bg-primary/10 text-primary'}`}>
                      {step.isCompleted ? (
                        <CheckCircle className="h-5 w-5" />
                      ) : step.isLocked ? (
                        <Lock className="h-5 w-5" />
                      ) : (
                        <span className="font-bold">{index + 1}</span>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className={`text-lg font-semibold ${step.isCompleted ? 'text-secondary' : ''}`}>
                          {step.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          {step.estimatedTime}
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-3 leading-relaxed">
                        {step.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          Reward: {step.reward}
                        </Badge>
                        
                        {!step.isCompleted && !step.isLocked && (
                          <Button size="sm" className="gradient-primary text-white border-0">
                            <Play className="h-4 w-4 mr-1" />
                            Start Step
                          </Button>
                        )}
                        
                        {step.isCompleted && (
                          <Badge className="bg-secondary/10 text-secondary">
                            ✓ Completed
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-warning/10 text-warning px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Trophy className="h-4 w-4" />
            Career Quest System
          </div>
          <h2 className="text-3xl font-bold mb-4">Level Up Your Career Journey</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Complete gamified learning paths to unlock your dream government college admission. Each quest guides you step-by-step with mentorship and real rewards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {quests.map((quest, index) => (
            <Card key={quest.id} className={`p-8 border-0 shadow-medium hover:shadow-strong transition-smooth animate-fade-in ${quest.isUnlocked ? 'gradient-card hover:scale-105 cursor-pointer' : 'bg-muted/50 opacity-75'}`} style={{ animationDelay: `${index * 150}ms` }} onClick={() => quest.isUnlocked && setSelectedQuest(quest)}>
              <div className="flex items-start gap-6 mb-6">
                <div className={`text-4xl ${quest.isUnlocked ? 'quest-pulse' : ''}`}>
                  {quest.isUnlocked ? quest.badge : '🔒'}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold">{quest.title}</h3>
                    <Badge className={getDifficultyColor(quest.difficulty)}>
                      {quest.difficulty}
                    </Badge>
                  </div>
                  <Badge variant="outline" className="text-xs mb-3">
                    {quest.category}
                  </Badge>
                  <p className="text-muted-foreground leading-relaxed">
                    {quest.description}
                  </p>
                </div>
              </div>

              {quest.isUnlocked && (
                <>
                  <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                    <div className="p-3 bg-primary/5 rounded-lg">
                      <div className="text-lg font-bold text-primary">{quest.completedSteps}/{quest.totalSteps}</div>
                      <div className="text-xs text-muted-foreground">Steps</div>
                    </div>
                    <div className="p-3 bg-accent/5 rounded-lg">
                      <div className="text-lg font-bold text-accent">{quest.estimatedDuration}</div>
                      <div className="text-xs text-muted-foreground">Duration</div>
                    </div>
                    <div className="p-3 bg-secondary/5 rounded-lg">
                      <div className="text-lg font-bold text-secondary">{quest.progress}%</div>
                      <div className="text-xs text-muted-foreground">Complete</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm text-muted-foreground">{quest.progress}%</span>
                    </div>
                    <div className="relative">
                      <Progress value={quest.progress} className="h-2" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Trophy className="h-4 w-4" />
                      {quest.reward}
                    </div>
                    <Button 
                      className="gradient-primary text-white border-0"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedQuest(quest);
                      }}
                    >
                      {quest.progress > 0 ? 'Continue Quest' : 'Start Quest'}
                    </Button>
                  </div>
                </>
              )}

              {!quest.isUnlocked && (
                <div className="text-center py-4">
                  <Lock className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">
                    Complete previous quests to unlock
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="p-6 gradient-card border-0 shadow-medium inline-block">
            <div className="flex items-center gap-4">
              <Star className="h-8 w-8 text-warning" />
              <div className="text-left">
                <div className="font-bold">Your Quest Stats</div>
                <div className="text-sm text-muted-foreground">
                  Level 3 • 1,250 XP • 2 Badges Earned
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default QuestSystem;