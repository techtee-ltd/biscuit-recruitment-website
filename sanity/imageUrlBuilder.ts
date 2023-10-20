import imageUrlBuilder from "@sanity/image-url";
import client from "./sanity.client";

const sanityImageUrlBuilder = imageUrlBuilder(client);

const urlFor = (source: string) => sanityImageUrlBuilder.image(source);

export { sanityImageUrlBuilder, urlFor };
