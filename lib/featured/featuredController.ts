"use server"
import featuredModel from "./featuredModel";

async function setFeatured(selected: { id: string; url: string }[]) {
  const data = await featuredModel.findOne({ type: "carousal" });
  if (data) {
    const featured = await featuredModel.findByIdAndUpdate(data._id, {
      data: selected,
    });
  } else {
    const featured = await featuredModel.create({
      data: selected,
      type: "carousal",
    });
  }
}

async function getFeatured(){
    const data = await featuredModel.findOne({ type: "carousal" });
if(data){
    return data
}
else return null
}

export{setFeatured,getFeatured}