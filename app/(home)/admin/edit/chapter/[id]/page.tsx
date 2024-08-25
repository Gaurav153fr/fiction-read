"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { getChapterById, updateChapter } from '@/lib/Chapter/chapterController';
import React, { useState, useEffect } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from '@/components/ui/use-toast';
import { useUserContext } from '@/hooks/user';
import { useRouter } from 'next/navigation';

// Define schema for form validation
const chapterSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  series: z.string().min(1, "Series ID is required"),
  premium: z.boolean(),
  thumbnail: z.string().url("Invalid URL format").optional()
});

type ChapterFormType = z.infer<typeof chapterSchema>;

const EditChapterPage = ({ params }: { params: { id: string } }) => {
  const [chapter, setChapter] = useState<ChapterFormType | null>(null);

  // Initialize Zod form with schema
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ChapterFormType>({
    resolver: zodResolver(chapterSchema),
    defaultValues: {
      title: '',
      content: '',
      series: '',
      premium: false,
      thumbnail: ''
    }
  });

  // Fetch chapter data on component mount
  useEffect(() => {
    const fetchChapter = async () => {
      try {
        const data = await getChapterById(params.id);
        if (data) {
          setChapter(data);
          reset(data);
        }
      } catch (error) {
        console.error('Failed to fetch chapter:', error);
      }
    };

    fetchChapter();
  }, [params.id, reset]);

  const onSubmit = async (data: ChapterFormType) => {
    try {
      await updateChapter(params.id, data);
      toast({
        title: 'Chapter updated successfully!',
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">
              {JSON.stringify(data, null, 2)}
            </code>
          </pre>
        ),
      });
    } catch (error) {
      console.error('Failed to update chapter:', error);
      toast({
        title: 'Error',
        description: 'Failed to update chapter.',
        variant: 'destructive',
      });
    }
  };


  const user = useUserContext()
  const router= useRouter();
  
  if (user.user) {
    if (!user.user?.admin) {
      router.push("/");
    }
  }
  if (!chapter) return <div>Loading...</div>;

  return (
    <div className="p-4">
      {user.user && user.user.admin && (
        <>
          <h1>Edit Chapter</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
          <Input
            id="title"
            type="text"
            {...register('title')}
            placeholder="Enter chapter title"
          />
          {errors.title && <p className="text-red-500">{errors.title.message}</p>}
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content:</label>
          <Textarea
            id="content"
            {...register('content')}
            placeholder="Enter chapter content"
          />
          {errors.content && <p className="text-red-500">{errors.content.message}</p>}
        </div>

        <div>
          <label htmlFor="series" className="block text-sm font-medium text-gray-700">Series ID:</label>
          <Input
            id="series"
            type="text"
            {...register('series')}
            placeholder="Enter series ID"
          />
          {errors.series && <p className="text-red-500">{errors.series.message}</p>}
        </div>

        <div className="flex items-center space-x-2">
          <Input
            id="premium"
            type="checkbox"
            {...register('premium')}
          />
          <label htmlFor="premium" className="text-sm font-medium text-gray-700">Premium:</label>
        </div>

        <div>
          <label htmlFor="thumbnail" className="block text-sm font-medium text-gray-700">Thumbnail URL:</label>
          <Input
            id="thumbnail"
            type="text"
            {...register('thumbnail')}
            placeholder="Enter thumbnail URL (optional)"
          />
          {errors.thumbnail && <p className="text-red-500">{errors.thumbnail.message}</p>}
        </div>

        <Button type="submit">Update Chapter</Button>
      </form>
        </>
      )}
    
    </div>
  );
};

export default EditChapterPage;
