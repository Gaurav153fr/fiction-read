"use server";
import { promises } from "dns";
import seriesModel from "./seriesModel";

// interface seriesData {
//   title: { en: string; ko: string };
//   url: string;
//   story: string;
//   views: number;
//   rating: number;
//   genres: string[];
//   chapters: string[];
//   _id: string;
//   createdAt: Date;
//   updatedAt: Date;
//   __v: number;
// }

async function createSeries(data: any): Promise<boolean> {
  try {
    const series = await seriesModel.create(data);
    return true;
  } catch (err:any){
    console.log(err);
    
    return false;
  }
}

async function getAllSeries() {
  try {
    const series = await seriesModel.find().lean<seriesType[]>();
    return series;
  } catch (error) {
    console.error("Error fetching all series:", error);
    throw new Error("Could not fetch series");
  }
}

async function getSeriesById(id: string) {
  const chapters = await seriesModel.findById(id);
  return chapters;
}

async function getSeriesByGenre(genre: string) {
  try {
    const series = await seriesModel.find({ genres: genre });
    return series;
  } catch (err) {
    console.log(err);

    return null;
  }
}

export { createSeries, getAllSeries, getSeriesByGenre ,getSeriesById};
