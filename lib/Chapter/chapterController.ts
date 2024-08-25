"use server";
import chapterModel from "./chapterModel";

async function createChapter(data: any): Promise<boolean> {
  try {
    const series = await chapterModel.create(data);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}

async function getAllChapter(id: string) {
  const chapters = await chapterModel.find({ series: id });

  return chapters;
}
async function updateChapter(id: string,data:any) {
  console.log(data);
  
  try{
  const chapters = await chapterModel.findByIdAndUpdate(id,data);
  return true;

  }catch(err){
    console.log(err);
    return false
  }
}
async function getChapterById(id: string) {
  const chapter = await chapterModel.findById(id).lean<chapterType>();
  if (chapter) {
    // Convert _id to string
    chapter._id = chapter._id.toString();
  }
  return chapter;
}
// async function getSeriesChapter(id:string) {
//   const chapters = await seriesModel.find()
// }

async function ajuBajuChapter(id: string, no: number) {
  const prev = await chapterModel
    .findOne({ series: id, no: { $lt: no } })
    .select("_id");
  console.log(prev);
  const next = await chapterModel
    .findOne({ series: id, no: { $gt: no } })
    .select("_id");
  console.log(next);
  return [prev?prev.id:null, next?next.id:null];
}
async function getLatestChapters() {
  const chapters = await chapterModel.find().sort({ updatedAt: -1 });
  return chapters
}

export { createChapter, getAllChapter, getChapterById, ajuBajuChapter,getLatestChapters,updateChapter };
