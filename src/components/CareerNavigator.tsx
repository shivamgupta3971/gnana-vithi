import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Brain, 
  BookOpen, 
  TrendingUp, 
  MapPin,
  Star,
  Clock,
  Users
} from "lucide-react";

interface CareerPath {
  id: string;
  title: string;
  field: string;
  match: number;
  colleges: number;
  scholarships: string;
  duration: string;
  description: string;
  skills: string[];
  topColleges: string[];
  averageFees: string;
  jobProspects: string;
}

const CareerNavigator = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showResults, setShowResults] = useState(false);

  const careerPaths: CareerPath[] = [
    {
      id: "1",
      title: "Computer Science Engineering",
      field: "Technology",
      match: 95,
      colleges: 150,
      scholarships: "₹50,000-₹2L",
      duration: "4 years",
      description: "Build software, websites, and apps. High demand in IT industry with excellent government job opportunities.",
      skills: ["Programming", "Problem Solving", "Mathematics", "Logical Thinking"],
      topColleges: ["IIT Delhi", "NIT Trichy", "IIIT Hyderabad"],
      averageFees: "₹40,000/year",
      jobProspects: "Software Engineer, Data Scientist, Government IT Officer"
    },
    {
      id: "2", 
      title: "Civil Services (IAS/IPS)",
      field: "Administration",
      match: 88,
      colleges: 25,
      scholarships: "₹25,000-₹1L",
      duration: "3-4 years prep",
      description: "Serve the nation as an administrator. Make policies and lead government departments.",
      skills: ["General Knowledge", "Essay Writing", "Current Affairs", "Leadership"],
      topColleges: ["JNU", "DU", "Jamia Millia"],
      averageFees: "₹15,000/year",
      jobProspects: "IAS Officer, IPS Officer, State Administrative Service"
    },
    {
      id: "3",
      title: "Medicine (MBBS)",
      field: "Healthcare", 
      match: 82,
      colleges: 200,
      scholarships: "₹1L-₹3L",
      duration: "5.5 years",
      description: "Save lives and serve society. Government medical colleges offer quality education at low cost.",
      skills: ["Biology", "Chemistry", "Empathy", "Problem Solving"],
      topColleges: ["AIIMS Delhi", "JIPMER", "KGMC Lucknow"],
      averageFees: "₹25,000/year",
      jobProspects: "Doctor, Medical Officer, Public Health Specialist"
    }
  ];

  const handleStartQuiz = () => {
    setCurrentStep(2);
  };

  const handleShowResults = () => {
    setShowResults(true);
  };

  if (showResults) {
    return (
      <div className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Brain className="h-4 w-4" />
              AI Analysis Complete
            </div>
            <h2 className="text-3xl font-bold mb-4">Your Personalized Career Paths</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Based on your interests, academic performance, and personality profile, here are your best matches
            </p>
          </div>

          <div className="space-y-6">
            {careerPaths.map((path, index) => (
              <Card key={path.id} className="p-8 gradient-card border-0 shadow-medium hover:shadow-strong transition-smooth animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold">{path.title}</h3>
                          <Badge variant="secondary" className="text-sm">
                            {path.field}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {path.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full">
                        <Star className="h-4 w-4 text-secondary fill-current" />
                        <span className="font-bold text-secondary">{path.match}% Match</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Match Score</span>
                        <span className="text-sm text-muted-foreground">{path.match}%</span>
                      </div>
                      <Progress value={path.match} className="h-2" />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="text-center p-3 bg-primary/5 rounded-lg">
                        <BookOpen className="h-5 w-5 text-primary mx-auto mb-1" />
                        <div className="text-sm font-medium">{path.colleges}</div>
                        <div className="text-xs text-muted-foreground">Colleges</div>
                      </div>
                      <div className="text-center p-3 bg-secondary/5 rounded-lg">
                        <TrendingUp className="h-5 w-5 text-secondary mx-auto mb-1" />
                        <div className="text-sm font-medium">{path.scholarships}</div>
                        <div className="text-xs text-muted-foreground">Scholarships</div>
                      </div>
                      <div className="text-center p-3 bg-accent/5 rounded-lg">
                        <Clock className="h-5 w-5 text-accent mx-auto mb-1" />
                        <div className="text-sm font-medium">{path.duration}</div>
                        <div className="text-xs text-muted-foreground">Duration</div>
                      </div>
                      <div className="text-center p-3 bg-warning/5 rounded-lg">
                        <Users className="h-5 w-5 text-warning mx-auto mb-1" />
                        <div className="text-sm font-medium">{path.averageFees}</div>
                        <div className="text-xs text-muted-foreground">Avg Fees</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Required Skills:</h4>
                        <div className="flex flex-wrap gap-2">
                          {path.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Top Government Colleges:</h4>
                        <div className="flex flex-wrap gap-2">
                          {path.topColleges.map((college) => (
                            <Badge key={college} className="text-xs bg-primary/10 text-primary">
                              <MapPin className="h-3 w-3 mr-1" />
                              {college}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Career Opportunities:</h4>
                        <p className="text-sm text-muted-foreground">{path.jobProspects}</p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-48 flex flex-col gap-3">
                    <Button className="w-full gradient-primary text-white border-0 hover:opacity-90">
                      Start {path.field} Quest
                    </Button>
                    <Button variant="outline" className="w-full">
                      View Colleges
                    </Button>
                    <Button variant="ghost" className="w-full text-sm">
                      Find Mentors
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              onClick={() => setShowResults(false)}
              className="mr-4"
            >
              Retake Quiz
            </Button>
            <Button className="gradient-primary text-white border-0">
              Save Results & Continue
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Brain className="h-4 w-4" />
              AI Career Navigator
            </div>
            <h2 className="text-3xl font-bold mb-4">Discover Your Perfect Career Path</h2>
            <p className="text-muted-foreground text-lg">
              Our AI analyzes your interests, academic scores, and personality to suggest the best government college programs for you
            </p>
          </div>

          {currentStep === 1 && (
            <Card className="p-8 gradient-card border-0 shadow-medium text-center animate-fade-in">
              <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Brain className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Ready to Find Your Path?</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Our comprehensive assessment includes interest mapping, academic analysis, and personality profiling to match you with the perfect government education opportunities.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h4 className="font-semibold mb-2">Interest Assessment</h4>
                  <p className="text-sm text-muted-foreground">Discover what truly motivates you</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h4 className="font-semibold mb-2">Academic Analysis</h4>
                  <p className="text-sm text-muted-foreground">Match your strengths with opportunities</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <h4 className="font-semibold mb-2">Personality Profile</h4>
                  <p className="text-sm text-muted-foreground">Find careers that fit your nature</p>
                </div>
              </div>

              <Button 
                size="lg" 
                onClick={handleStartQuiz}
                className="gradient-primary text-white border-0 px-8 py-4 text-lg font-semibold hover:opacity-90 transition-smooth"
              >
                <Brain className="mr-2 h-5 w-5" />
                Start Career Assessment
              </Button>
            </Card>
          )}

          {currentStep === 2 && (
            <Card className="p-8 gradient-card border-0 shadow-medium animate-fade-in">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Assessment Progress</span>
                  <span className="text-sm text-muted-foreground">Question 5 of 20</span>
                </div>
                <Progress value={25} className="h-2" />
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">What subjects interest you most?</h3>
                <p className="text-muted-foreground">Select all that apply to help us understand your academic preferences</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  { subject: "Mathematics & Physics", icon: "🔢", description: "Logic, problem-solving, calculations" },
                  { subject: "Biology & Chemistry", icon: "🧬", description: "Life sciences, medical field" },
                  { subject: "History & Political Science", icon: "🏛️", description: "Governance, administration" },
                  { subject: "Economics & Commerce", icon: "💼", description: "Business, finance, trade" },
                  { subject: "Computer Science", icon: "💻", description: "Technology, programming" },
                  { subject: "Languages & Literature", icon: "📚", description: "Communication, writing" }
                ].map((option) => (
                  <Card key={option.subject} className="p-4 cursor-pointer hover:bg-primary/5 hover:border-primary transition-smooth border-2 border-transparent">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{option.icon}</div>
                      <div>
                        <h4 className="font-semibold mb-1">{option.subject}</h4>
                        <p className="text-sm text-muted-foreground">{option.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setCurrentStep(1)}>
                  Previous
                </Button>
                <Button 
                  onClick={handleShowResults}
                  className="gradient-primary text-white border-0"
                >
                  Next Question
                </Button>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default CareerNavigator;