"use server";
import { revalidatePath } from "next/cache";
import seriesModel from "./seriesModel";

async function createSeries(data: any): Promise<boolean> {
  try {
    await seriesModel.create(data);
    revalidatePath("/");
    return true;
  } catch (err: any) {
    console.error("Error creating series:", err);
    return false;
  }
}

async function getAllSeries() {
  try {
    const series = await seriesModel.find().lean<seriesType[]>();
    return series;
  } catch (error) {
    console.error("Error fetching all series:", error);
    return null;
  }
}

async function getSeriesById(id: string) {
  try {
    const series = await seriesModel.findById(id);
    return series;
  } catch (error) {
    console.error(`Error fetching series by ID (${id}):`, error);
    return null;
  }
}

async function getSeriesByGenre(genre: string) {
  try {
    const series = await seriesModel.find({ genres: genre });
    return series;
  } catch (err) {
    console.error("Error fetching series by genre:", err);
    return null;
  }
}

export { createSeries, getAllSeries, getSeriesByGenre, getSeriesById };
