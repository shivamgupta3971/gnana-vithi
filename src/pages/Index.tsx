import Hero from "@/components/Hero";
import CareerNavigator from "@/components/CareerNavigator";
import QuestSystem from "@/components/QuestSystem";
import ChatBot from "@/components/ChatBot";
import ScholarshipTracker from "@/components/ScholarshipTracker";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <CareerNavigator />
      <QuestSystem />
      <ScholarshipTracker />
      <ChatBot />
    </div>
  );
};

export default Index;
