import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import DevOpsCourse from "@/pages/course-devops";
import DevSecOpsCourse from "@/pages/course-devsecops";
import AWSCourse from "@/pages/course-aws";
import AzureCourse from "@/pages/course-azure";
import GCPCourse from "@/pages/course-gcp";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/courses/devops" component={DevOpsCourse} />
      <Route path="/courses/devsecops" component={DevSecOpsCourse} />
      <Route path="/courses/aws" component={AWSCourse} />
      <Route path="/courses/azure" component={AzureCourse} />
      <Route path="/courses/gcp" component={GCPCourse} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
