import imageUrlBuilder from "@sanity/image-url";
import client from "./sanity.client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const sanityImageUrlBuilder = imageUrlBuilder(client);

const urlFor = (source: SanityImageSource) => sanityImageUrlBuilder.image(source);

export { sanityImageUrlBuilder, urlFor };
