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
        <GenreTabsCard genre="Action" />
      </TabsContent>
      <TabsContent value="Romance">
        <GenreTabsCard genre="Romance" />
      </TabsContent>
      <TabsContent value="Fantasy">
        <GenreTabsCard genre="Fantasy" />
      </TabsContent> <TabsContent value="Modern">
        <GenreTabsCard genre="Modern" />
      </TabsContent>
    </Tabs>
  );
}
