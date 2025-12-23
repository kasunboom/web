import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { HomeMain } from "@/pages/HomeMain";
import { VideoProduction } from "@/pages/VideoProduction";
import { CaseStudies } from "@/pages/CaseStudies";
import { MotionGraphics } from "@/pages/MotionGraphics";
import { Reels } from "@/pages/Reels";

function Router() {
  return (
    <Switch>
      {/* Add pages below */}
      <Route path="/" component={HomeMain} />
      <Route path="/video-production" component={VideoProduction} />
      <Route path="/case-studies" component={CaseStudies} />
      <Route path="/motion-graphics" component={MotionGraphics} />
      <Route path="/reels" component={Reels} />
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
