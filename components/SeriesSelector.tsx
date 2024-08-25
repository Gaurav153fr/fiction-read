import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getAllSeries } from "@/lib/Series/seriesController";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export function SeriesSelector({
  setSeries,
}: {
  setSeries: Dispatch<SetStateAction<seriesType|null>>;
}) {
  const [data, setData] = useState<null | seriesType[]>(null);
  useEffect(() => {
    async function getData() {
      const series = await getAllSeries();
      setData(series);
    }
    getData();
  },[]);
  return (
    <div>
    {data !==null? (
       
    <Select onValueChange={(e) => setSeries(data[parseInt(e)])}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a series" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Series</SelectLabel>
          {data &&
            data.map((e, i) => (
              <SelectItem key={i} value={i.toString()}>
                {" "}
                {e.title}
              </SelectItem>
            ))}
        </SelectGroup>
      </SelectContent>
    </Select> ):(<div>Loading....</div>)}
    </div>);
}
