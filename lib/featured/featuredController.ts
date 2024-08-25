"use server";
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

async function getFeatured() {
  try {
    const data = await featuredModel.findOne({ type: "carousal" });

    if (data) {
      return data;
    } else {
      return null;
    }
  } catch (err: any) {
    console.error("Error fetching featured data:", err);
    return null;
  }
}

export { setFeatured, getFeatured };
