"use server";
import { revalidatePath } from "next/cache";
import chapterModel from "./chapterModel";

async function createChapter(data: any): Promise<boolean> {
  try {
    await chapterModel.create(data);
    revalidatePath('/')
    revalidatePath("/chapter")
    return true;
  } catch (err) {
    console.error("Error creating chapter:", err);
    return false;
  }
}

async function getAllChapter(id: string) {
  try {
    const chapters = await chapterModel.find({ series: id }).lean<chapterType[]>();
    return chapters;
  } catch (err) {
    console.error("Error fetching all chapters:", err);
    return null;
  }
}

async function updateChapter(id: string, data: any): Promise<boolean> {
  try {
    await chapterModel.findByIdAndUpdate(id, data);
    return true;
  } catch (err) {
    console.error("Error updating chapter:", err);
    return false;
  }
}

async function getChapterById(id: string) {
  try {
    const chapter = await chapterModel.findById(id).lean<chapterType>();
    if (chapter) {
      // Convert _id to string
      chapter._id = chapter._id.toString();
    }
    return chapter;
  } catch (err) {
    console.error("Error fetching chapter by ID:", err);
    return null;
  }
}

async function ajuBajuChapter(id: string, no: number) {
  try {
    const prev = await chapterModel
      .findOne({ series: id, no: { $lt: no } }).sort({ no: -1 })
      .select("_id")
    
    
    const next = await chapterModel
      .findOne({ series: id, no: { $gt: no } })
      .select("_id");
    
    // console.log("aju baju chaptyer", prev, next);
    
    return [prev ? prev.id : null, next ? next.id : null];
  } catch (err) {
    console.error("Error fetching adjacent chapters:", err);
    return [null, null];
  }
}

async function getLatestChapters() {
  try {
    const chapters = await chapterModel.find({premium: false}).sort({ updatedAt: -1 }).limit(15);
    const premiumChapters = await chapterModel.find({premium: true}).sort({ updatedAt: -1 }).limit(15);
    return [...chapters, ...premiumChapters];
  } catch (err) {
    console.error("Error fetching latest chapters:", err);
    return null;
  }
}

export { 
  createChapter, 
  getAllChapter, 
  getChapterById, 
  ajuBajuChapter, 
  getLatestChapters, 
  updateChapter 
};
