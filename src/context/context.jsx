import { createContext, useState } from "react";

export const mycontext = createContext()

export default function MycontextProvider({children}) {

const [imageId, setImageId] = useState(null)
const [tags, setTags] = useState(null)
const [views, setViews] = useState(45890)
const [downloads, setDownloads] = useState(368)
const [likes, setLikes] = useState(100)
const [imagesrc, setImageSrc] = useState(null)






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