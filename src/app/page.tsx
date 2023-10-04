import AboutTab from "@/components/AboutTab";
import ConatctTab from "@/components/ContactTab";
import ProjectsTab from "@/components/ProjectsTab";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main className="flex items-center justify-center p-10 min-h-screen">
      <Tabs defaultValue="about" className="max-w-md">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>
        <TabsContent value="about">
          <AboutTab />
        </TabsContent>
        <TabsContent value="projects">
          <ProjectsTab />
        </TabsContent>
        <TabsContent value="contact">
          <ConatctTab />
        </TabsContent>
      </Tabs>
    </main>
  );
}
