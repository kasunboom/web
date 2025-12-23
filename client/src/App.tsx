import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { HomeMain } from "@/pages/HomeMain";
import { VideoProduction } from "@/pages/VideoProduction";
import { CaseStudies } from "@/pages/CaseStudies";

function Router() {
  return (
    <Switch>
      {/* Add pages below */}
      <Route path="/" component={HomeMain} />
      <Route path="/video-production" component={VideoProduction} />
      <Route path="/case-studies" component={CaseStudies} />
      {/* Fallback to 404 */}
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
