import { createImageUrlBuilder } from "@sanity/image-url";
import { dataset, projectId } from "./env.api";

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "production",
});

export function urlFor(source: any) {
  return imageBuilder.image(source).auto("format").fit("max");
}
