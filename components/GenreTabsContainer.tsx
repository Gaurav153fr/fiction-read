import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GenreTabsCard } from "./GenreTabsCard";

export function GenreTabs() {
  return (
    <Tabs defaultValue="Action" className="w-full ">
      <TabsList className="grid w-[400px] max-md:w-full grid-cols-4">
        <TabsTrigger value="Action">Action</TabsTrigger>
        <TabsTrigger value="Romance">Romance</TabsTrigger>
        <TabsTrigger value="Fantasy">Fantasy</TabsTrigger>
        <TabsTrigger value="Modern">Modern</TabsTrigger>

      </TabsList>
      <TabsContent value="Action">
        <GenreTabsCard genre="action" />
      </TabsContent>
      <TabsContent value="Romance">
        <GenreTabsCard genre="romance" />
      </TabsContent>
      <TabsContent value="Fantasy">
        <GenreTabsCard genre="fantasy" />
      </TabsContent> <TabsContent value="Modern">
        <GenreTabsCard genre="romance" />
      </TabsContent>
    </Tabs>
  );
}
