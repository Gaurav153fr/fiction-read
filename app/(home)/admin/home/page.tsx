"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useUserContext } from "@/hooks/user";
import { getAllSeries } from "@/lib/Series/seriesController";
import { setFeatured } from "@/lib/featured/featuredController";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type SeriesType = {
  _id: string;
  title: string;
};

type SelectedSeries = {
  id: string;
  url: string;
};

const Page = () => {
  const [series, setSeries] = useState<SeriesType[] | null>(null);
  const [selectedSeries, setSelectedSeries] = useState<SelectedSeries[]>([
    { id: "", url: "" },
    { id: "", url: "" },
    { id: "", url: "" },
  ]);

  useEffect(() => {
    const fetchSeries = async () => {
      const data = await getAllSeries();
      setSeries(data);
    };
    fetchSeries();
  }, []);

  const handleSelectChange = (index: number, id: string) => {
    const newSelectedSeries = [...selectedSeries];
    newSelectedSeries[index].id = id;
    setSelectedSeries(newSelectedSeries);
  };

  const handleUrlChange = (index: number, url: string) => {
    const newSelectedSeries = [...selectedSeries];
    newSelectedSeries[index].url = url;
    setSelectedSeries(newSelectedSeries);
  };

  const getFilteredSeries = (index: number) => {
    return series?.filter(
      (s) =>
        !selectedSeries.some((sel) => sel.id === s._id) ||
        s._id === selectedSeries[index].id
    );
  };

  const handleSubmit = () => {
    console.log(selectedSeries);
    const data = setFeatured(selectedSeries);
  };
  const user = useUserContext();
  const router = useRouter();

  if (user.user) {
    if (!user.user?.admin) {
      router.push("/");
    }
  }
  return (
    <div>
      {user.user && user.user.admin && (
        <>
          <div>Carousel</div>
          {selectedSeries.map((item, index) => (
            <div key={index} className="mb-4 flex">
              <Select
                onValueChange={(id) => handleSelectChange(index, id)}
                value={item.id}
              >
                <SelectTrigger className="w-[300px]">
                  <SelectValue placeholder={`Select a series ${index + 1}`} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Series {index + 1}</SelectLabel>
                    {getFilteredSeries(index)?.map((e) => (
                      <SelectItem key={e._id} value={e._id}>
                        {e.title}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Input
                type="text"
                placeholder={`Enter URL for series ${index + 1}`}
                value={item.url}
                onChange={(e) => handleUrlChange(index, e.target.value)}
                className="ml-4 p-2 border rounded w-[300px]"
              />
            </div>
          ))}

          <Button onClick={handleSubmit}>Submit</Button>
        </>
      )}
    </div>
  );
};

export default Page;
