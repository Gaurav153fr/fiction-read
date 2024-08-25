"use client";

import { SeriesSelector } from "@/components/SeriesSelector";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { createChapter } from "@/lib/Chapter/chapterController";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import RichTextEditor from "@/components/MainEditor";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { useUserContext } from "@/hooks/user";
import { redirect, useRouter } from "next/navigation";

// Define schema for form validation
const FormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  no: z
    .union([
      z.string().regex(/^\d+$/, "Must be a number").transform(Number),
      z.number(),
    ])
    .refine((val) => val > 0, {
      message: "Chapter number must be greater than 0",
    }),

  thumbnail: z.string().min(1, "URL is required"),
  content: z.string().min(10, "Content should be atleast 10 length"),
  premium: z.boolean(),
});

type FormSchemaType = z.infer<typeof FormSchema>;

const Page = () => {
  const user = useUserContext();
  const router = useRouter();
  const [series, setSeries] = useState<null | seriesType>(null);

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      no: 0,
      content: "",
      thumbnail: series?.url || "",
      premium: false,
    },
  });

  const onSubmit = async (data: FormSchemaType) => {
    if (series) {
      const chapter = {
        title: data.title,
        content: data.content,
        no: data.no,
        series: series._id,
        premium: data.premium,
        thumbnail: data.thumbnail,
      };

      // Assuming createChapter is an async function
      const result: boolean = await createChapter(chapter);

      if (result) {
        toast({
          title: "Chapter created successfully!",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">
                {JSON.stringify(chapter, null, 2)}
              </code>
            </pre>
          ),
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to create chapter.",
          variant: "destructive",
        });
      }
    } else {
      toast({
        title: "Error",
        description: "Please select a series before submitting.",
        variant: "destructive",
      });
    }
  };
  useEffect(() => {
    if (series) {
      form.reset({
        ...form.getValues(),
        thumbnail: series.url, // Update the thumbnail with the series URL
      });
    }
  }, [series]);

  if (user.user) {
    if (!user.user?.admin) {
      router.push("/");
    }
  }

  return (
    <main className="p-4">
      {user.user && user.user?.admin && (
        <>
          <SeriesSelector setSeries={setSeries} />
          {series && (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-5 m-5"
              >
                <FormField
                  control={form.control}
                  name="no"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Episode No.</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter episode number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/*Title*/}
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Chapter Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter chapter title " {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Thumbnail */}

                {/*Title*/}
                <FormField
                  control={form.control}
                  name="thumbnail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Chapter Thumbnail</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter chapter title " {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Content */}

                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Content</FormLabel>
                      <FormControl>
                        <RichTextEditor
                          onValueChange={(value: string) =>
                            field.onChange(value)
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="premium"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tier</FormLabel>
                      <FormControl>
                        <div className="flex flex-col gap-3">
                          <Label>
                            <input
                              type="radio"
                              value="free"
                              checked={!field.value}
                              onChange={() => field.onChange(false)}
                            />
                            Free
                          </Label>
                          <Label>
                            <input
                              type="radio"
                              value="premium"
                              checked={field.value}
                              onChange={() => field.onChange(true)}
                            />
                            Premium
                          </Label>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit">Submit</Button>
              </form>
            </Form>
          )}
        </>
      )}
    </main>
  );
};

export default Page;
