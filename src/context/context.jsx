import { createContext, useState } from "react";

export const mycontext = createContext()

export default function MycontextProvider({children}) {

const [imageId, setImageId] = useState(null)
const [tags, setTags] = useState(null)
const [views, setViews] = useState(45890)
const [downloads, setDownloads] = useState(368)
const [likes, setLikes] = useState(100)
const [imagesrc, setImageSrc] = useState(
  'https://pixabay.com/get/g4e508d19411fd9c7d4ae5b50442eed6050f36202ea231fb26e3a78ca121966a90df6ba5871241e936b93118d7663116b09edbaf5a21a2869a0e8568ae18beac3_1280.jpg')






    return (
      <>
        <mycontext.Provider
          value={{
            imageId,
            setImageId,
            tags,
            setTags,
            views,
            setViews,
            downloads,
            setDownloads,
            likes,
            setLikes,
            imagesrc,
           setImageSrc}}
        >
          {children}
        </mycontext.Provider>
      </>
    );
}