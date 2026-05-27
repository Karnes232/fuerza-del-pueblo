import createImageUrlBuilder from "@sanity/image-url"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"

import { dataset, projectId } from "../env"

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset })

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source)
}

// Build a Sanity CDN URL that bakes in BOTH the editorial crop and the hotspot.
// Requesting a fixed width + height with fit("crop") makes Sanity apply the crop
// rect first, then fit to the target aspect ratio using the hotspot as the focal
// point — so the rendered image matches what an editor sees in Studio.
export const croppedImageUrl = (
  source: SanityImageSource,
  width: number,
  height: number,
) => urlFor(source).width(width).height(height).fit("crop").auto("format").url()
