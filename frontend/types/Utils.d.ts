interface StrapiImage {
  alternativeText: string
  caption: string
  createdAt: Date
  ext: string
  formats: {
    thumbnail: {
      ext: string
      hash: string
      height: number
      mime: string
      name: string
      path: string
      size: number
      url: string
      width: number
    }
  }
  hash: string
  height: number
  mime: string
  name: string
  previewUrl: string
  provider: string
  provider_metadata: unknown
  size: number
  updatedAt: Date
  url: string
  width: number
}
