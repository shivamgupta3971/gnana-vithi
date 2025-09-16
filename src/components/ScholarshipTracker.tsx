import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Bell, 
  Calendar, 
  DollarSign, 
  Clock,
  CheckCircle,
  AlertCircle,
  Filter,
  Search,
  MapPin,
  GraduationCap
} from "lucide-react";

interface Scholarship {
  id: string;
  name: string;
  provider: string;
  amount: string;
  deadline: Date;
  status: "open" | "closing-soon" | "closed" | "applied";
  eligibility: string[];
  category: string;
  description: string;
  applicationProgress?: number;
  documentsRequired: string[];
  beneficiaries: number;
  renewableYears?: number;
}

const ScholarshipTracker = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const scholarships: Scholarship[] = [
    {
      id: "1",
      name: "Post Matric Scholarship SC/ST",
      provider: "Ministry of Social Justice",
      amount: "₹50,000 - ₹2,00,000",
      deadline: new Date("2024-03-31"),
      status: "closing-soon",
      eligibility: ["SC/ST Category", "Family Income < ₹2.5L", "Class 11-PG"],
      category: "Merit + Need Based",
      description: "Complete fee reimbursement and maintenance allowance for SC/ST students in government colleges",
      applicationProgress: 75,
      documentsRequired: ["Caste Certificate", "Income Certificate", "Mark Sheet", "Bank Details"],
      beneficiaries: 50000,
      renewableYears: 4
    },
    {
      id: "2",
      name: "Central Sector Scholarship",
      provider: "Ministry of Education",
      amount: "₹12,000 - ₹20,000",
      deadline: new Date("2024-02-28"),
      status: "applied",
      eligibility: ["Top 20% in Class 12", "Family Income < ₹6L", "Government College"],
      category: "Merit Based",
      description: "Merit scholarship for students who have passed Class 12 and pursuing degree in government colleges",
      applicationProgress: 100,
      documentsRequired: ["Mark Sheet", "Income Certificate", "College Admission Proof"],
      beneficiaries: 82000,
      renewableYears: 3
    },
    {
      id: "3",
      name: "National Means-cum-Merit Scholarship",
      provider: "NCERT",
      amount: "₹12,000/year",
      deadline: new Date("2024-04-15"),
      status: "open",
      eligibility: ["Class 8 passed with 55%", "Family Income < ₹3.5L", "Government School"],
      category: "Merit + Need Based",
      description: "Scholarship to prevent dropouts at Class IX and encourage students for continuing education",
      documentsRequired: ["Class 8 Certificate", "Income Certificate", "Caste Certificate (if applicable)"],
      beneficiaries: 100000
    },
    {
      id: "4",
      name: "Minority Scholarship Scheme",
      provider: "Ministry of Minority Affairs",
      amount: "₹30,000 - ₹1,25,000",
      deadline: new Date("2024-03-15"),
      status: "open",
      eligibility: ["Minority Community", "Family Income < ₹6L", "Professional Courses"],
      category: "Community Based",
      description: "Scholarship for students from minority communities pursuing technical and professional courses",
      documentsRequired: ["Minority Certificate", "Income Certificate", "Admission Letter"],
      beneficiaries: 30000,
      renewableYears: 5
    },
    {
      id: "5",
      name: "Prime Minister's Special Scholarship",
      provider: "AICTE",
      amount: "₹3,000 - ₹30,000",
      deadline: new Date("2024-01-31"),
      status: "closed",
      eligibility: ["J&K Domicile", "Technical Education", "Government College"],
      category: "Regional",
      description: "Special scholarship scheme for students from Jammu & Kashmir pursuing technical education",
      documentsRequired: ["Domicile Certificate", "Admission Proof", "Bank Details"],
      beneficiaries: 5000
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open": return "bg-secondary/10 text-secondary";
      case "closing-soon": return "bg-warning/10 text-warning";
      case "closed": return "bg-muted text-muted-foreground";
      case "applied": return "bg-primary/10 text-primary";
      default: return "bg-muted";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "open": return <CheckCircle className="h-4 w-4" />;
      case "closing-soon": return <AlertCircle className="h-4 w-4" />;
      case "closed": return <Clock className="h-4 w-4" />;
      case "applied": return <CheckCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const getDaysLeft = (deadline: Date) => {
    const today = new Date();
    const diffTime = deadline.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const filteredScholarships = scholarships.filter(scholarship => {
    const matchesFilter = activeFilter === "all" || scholarship.status === activeFilter;
    const matchesSearch = scholarship.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scholarship.provider.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
              <DollarSign className="h-4 w-4" />
              Smart Scholarship Tracker
            </div>
            <h2 className="text-3xl font-bold mb-4">Never Miss a Scholarship Deadline</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              AI-powered tracker that monitors 500+ government scholarships, sends smart alerts, and guides you through applications
            </p>
          </div>

          {/* Stats Dashboard */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="p-6 gradient-card border-0 shadow-medium text-center">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-3">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold mb-1">₹15.2L</div>
              <div className="text-sm text-muted-foreground">Available This Month</div>
            </Card>
            
            <Card className="p-6 gradient-card border-0 shadow-medium text-center">
              <div className="w-12 h-12 gradient-secondary rounded-xl flex items-center justify-center mx-auto mb-3">
                <Bell className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold mb-1">12</div>
              <div className="text-sm text-muted-foreground">Active Applications</div>
            </Card>
            
            <Card className="p-6 gradient-card border-0 shadow-medium text-center">
              <div className="w-12 h-12 bg-warning rounded-xl flex items-center justify-center mx-auto mb-3">
                <AlertCircle className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold mb-1">5</div>
              <div className="text-sm text-muted-foreground">Closing Soon</div>
            </Card>
            
            <Card className="p-6 gradient-card border-0 shadow-medium text-center">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold mb-1">78%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </Card>
          </div>

          {/* Filters */}
          <Card className="p-6 gradient-card border-0 shadow-medium mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-muted-foreground" />
                <span className="font-medium">Filter by Status:</span>
                <div className="flex gap-2">
                  {[
                    { key: "all", label: "All", count: scholarships.length },
                    { key: "open", label: "Open", count: scholarships.filter(s => s.status === "open").length },
                    { key: "closing-soon", label: "Closing Soon", count: scholarships.filter(s => s.status === "closing-soon").length },
                    { key: "applied", label: "Applied", count: scholarships.filter(s => s.status === "applied").length },
                  ].map(filter => (
                    <Button
                      key={filter.key}
                      variant={activeFilter === filter.key ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveFilter(filter.key)}
                      className={activeFilter === filter.key ? "gradient-primary text-white border-0" : ""}
                    >
                      {filter.label} ({filter.count})
                    </Button>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Search className="h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search scholarships..."
                  className="px-3 py-2 border rounded-lg bg-background text-sm w-64"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </Card>

          {/* Scholarships List */}
          <div className="space-y-6">
            {filteredScholarships.map((scholarship, index) => (
              <Card key={scholarship.id} className="p-8 gradient-card border-0 shadow-medium hover:shadow-strong transition-smooth animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold">{scholarship.name}</h3>
                          <Badge className={getStatusColor(scholarship.status)}>
                            {getStatusIcon(scholarship.status)}
                            <span className="ml-1 capitalize">{scholarship.status.replace('-', ' ')}</span>
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center gap-1">
                            <GraduationCap className="h-4 w-4" />
                            {scholarship.provider}
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="h-4 w-4" />
                            {scholarship.amount}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {scholarship.deadline.toLocaleDateString()}
                          </div>
                        </div>
                        <Badge variant="outline" className="text-xs mb-3">
                          {scholarship.category}
                        </Badge>
                      </div>
                      
                      {scholarship.status !== "closed" && (
                        <div className="text-right">
                          <div className={`text-lg font-bold ${getDaysLeft(scholarship.deadline) <= 7 ? 'text-warning' : 'text-secondary'}`}>
                            {getDaysLeft(scholarship.deadline)} days left
                          </div>
                          <div className="text-xs text-muted-foreground">to apply</div>
                        </div>
                      )}
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {scholarship.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold mb-2">Eligibility Criteria:</h4>
                        <div className="space-y-1">
                          {scholarship.eligibility.map((criteria, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="h-3 w-3 text-secondary flex-shrink-0" />
                              {criteria}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Required Documents:</h4>
                        <div className="space-y-1">
                          {scholarship.documentsRequired.map((doc, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm">
                              <div className="w-3 h-3 border border-muted-foreground rounded-sm flex-shrink-0"></div>
                              {doc}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {scholarship.beneficiaries.toLocaleString()} beneficiaries annually
                      </div>
                      {scholarship.renewableYears && (
                        <div>
                          Renewable for {scholarship.renewableYears} years
                        </div>
                      )}
                    </div>

                    {scholarship.applicationProgress !== undefined && (
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Application Progress</span>
                          <span className="text-sm text-muted-foreground">{scholarship.applicationProgress}%</span>
                        </div>
                        <Progress value={scholarship.applicationProgress} className="h-2" />
                      </div>
                    )}
                  </div>

                  <div className="lg:w-48 flex flex-col gap-3">
                    {scholarship.status === "open" && (
                      <Button className="w-full gradient-primary text-white border-0 hover:opacity-90">
                        Apply Now
                      </Button>
                    )}
                    {scholarship.status === "closing-soon" && (
                      <Button className="w-full bg-warning text-warning-foreground hover:bg-warning/90">
                        Apply Urgently
                      </Button>
                    )}
                    {scholarship.status === "applied" && (
                      <Button variant="outline" className="w-full" disabled>
                        ✓ Applied
                      </Button>
                    )}
                    {scholarship.status === "closed" && (
                      <Button variant="outline" className="w-full" disabled>
                        Closed
                      </Button>
                    )}
                    
                    <Button variant="outline" className="w-full">
                      <Bell className="h-4 w-4 mr-1" />
                      Set Alert
                    </Button>
                    
                    <Button variant="ghost" className="w-full text-sm">
                      View Details
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Smart Alerts Section */}
          <Card className="p-8 gradient-card border-0 shadow-medium mt-12 text-center">
            <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Bell className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Never Miss Another Deadline</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              Our AI monitors government portals 24/7 and sends personalized alerts based on your profile, location, and academic interests. Get notifications via SMS, email, and app notifications.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl mb-2">📱</div>
                <div className="font-semibold">SMS Alerts</div>
                <div className="text-sm text-muted-foreground">Even without internet</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🤖</div>
                <div className="font-semibold">AI Matching</div>
                <div className="text-sm text-muted-foreground">Only relevant scholarships</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">⏰</div>
                <div className="font-semibold">Smart Timing</div>
                <div className="text-sm text-muted-foreground">Optimal application reminders</div>
              </div>
            </div>

            <Button className="gradient-secondary text-white border-0 px-8 py-3 text-lg font-semibold">
              <Bell className="mr-2 h-5 w-5" />
              Enable Smart Alerts
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipTracker;