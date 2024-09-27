"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";
import { createSeries } from "@/lib/Series/seriesController";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectGroup } from "@radix-ui/react-select";
import { Star } from "lucide-react";
import { useUserContext } from "@/hooks/user";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import Genres from "@/constants/Genres";

// Define the schema for form validation using Zod
const FormSchema = z.object({
  title: z.string().min(2, {
    message: "English title must be at least 2 characters.",
  }),
  url: z.string().url({
    message: "Please enter a valid URL.",
  }),
  story: z.string().min(10, {
    message: "Story must be at least 10 characters.",
  }),
  author: z.string(),
  status: z.string().min(1, {
    message: "select a series",
  }),
  updateOn: z.string().array().min(1),
});

// Form component
export default function Page() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      author: "",
      title: "",
      url: "",
      story: "",
      status: "",
      updateOn: [],
    },
  });
  const user = useUserContext();
  const router = useRouter();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [genre, setGenre] = useState<string[]>([]);
  const [views, setViews] = useState<number>(1);
  const [star, setStar] = useState<number>(1);

  // Handle form submission

  const days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(genre);

    const novel = {
      title: data.title,
      url: data.url,
      author: data.author,
      story: data.story,
      views: views,
      status: data.status,
      rating: star,
      chapters: [],
      genres: genre,
      updateOn: data.updateOn, // Use dynamic genres selected by the user
    };

    const series = await createSeries(novel);

    if (series) {
      toast({
        title: "Series created successfully",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      });
    } else {
      toast({
        title: "Something bad happened",
        variant: "destructive",
      });
    }
  }

  function handleUrlChange(event: React.ChangeEvent<HTMLInputElement>) {
    const url = event.target.value;
    setImagePreview(url);
    form.setValue("url", url);
  }

  const toggleGenre = (selectedGenre: string) => {
    setGenre((prevGenres) =>
      prevGenres.includes(selectedGenre)
        ? prevGenres.filter((g) => g !== selectedGenre)
        : [...prevGenres, selectedGenre]
    );
  };

 

  if (user.user) {
    if (!user.user?.admin) {
      router.push("/");
    }
  }

  return (
    <div className="flex m-5">
      {user.user && user.user?.admin && (
        <>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-6 flex gap-5 max-md:flex-col"
            >
              {/* English Title */}
              <div className="md:w-2/3 flex flex-col gap-5">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>English Title</FormLabel>
                      <FormControl>
                        <Input placeholder="English title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* author */}
                <FormField
                  control={form.control}
                  name="author"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Author name</FormLabel>
                      <FormControl>
                        <Input placeholder="Author" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* URL */}
                <FormField
                  control={form.control}
                  name="url"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>URL</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="https://example.com"
                          {...field}
                          onChange={handleUrlChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
 {/* Image Preview */}
 {imagePreview && (
            <div className="mt-4">
              <img
                src={imagePreview}
                alt="Selected Image"
                className="max-w-xs rounded-md"
              />
            </div>
          )}
                {/* Story */}
                <FormField
                  control={form.control}
                  name="story"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Story</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Story..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="md:w-1/3 flex flex-col gap-5">
                {/* {//status} */}
                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={(value) => field.onChange(value)}
                          value={field.value}
                        >
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select a status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Status</SelectLabel>
                              <SelectItem value="ongoing">ongoing</SelectItem>
                              <SelectItem value="completed">
                                completed
                              </SelectItem>
                              <SelectItem value="dropped">dropped</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* {//update on} */}
                <FormField
      control={form.control}
      name="updateOn"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Update On</FormLabel>
          <FormControl>
            <div className="flex flex-wrap gap-5">
              
           {days.map((day) => (
              <div className="flex items-center space-x-2 w-20" key={day}>
              <Checkbox
                id={day}
                onCheckedChange={(checked: boolean) => {
                  const currentValue = Array.isArray(field.value)
                    ? field.value
                    : [];
                  const newValue: string[] = checked
                    ? [...currentValue, day]
                    : currentValue.filter((value) => value !== day);
                  field.onChange(newValue);
                }}
                checked={Array.isArray(field.value) && (field.value as string[]).includes(day)}
              />
              <Label htmlFor={day}>{day}</Label>
            </div>
         
           ))}

</div>
             
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />


                {/* Genre Selection */}
                <span>Genres</span>
                <div className="gap-2 flex flex-wrap">
                  {Genres.map((genre) => (
                    <div className="flex items-center space-x-2 " key={genre}>
                      <Checkbox
                        id={genre}
                        onCheckedChange={(checked) => {
                          toggleGenre(genre);
                        }}
                      />
                      <label
                        htmlFor={genre}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {genre[0].toUpperCase() + genre.slice(1)}
                      </label>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 flex-col">
                  <Input
                    onChange={(e) => setViews(parseInt(e.target.value))}
                    type="number"
                    placeholder="views"
                  />
                  <div className="flex items-center gap-5">
                    <Input
                      onChange={(e) => setStar(parseFloat(e.target.value))}
                      type="range"
                      placeholder="star"
                      min="0"
                      max="5"
                      step="0.1"
                      className="w-2/3 p-0 accent-white"
                    />
                    <span className="w-fit bg-yellow-900 border border-yellow-600 rounded-full flex px-2 items-center ">
                      {star} <Star className="w-3 h-3 ml-2" />
                    </span>
                  </div>
                </div>

                {/* Submit Button */}
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </Form>

         
        </>
      )}
    </div>
  );
}
