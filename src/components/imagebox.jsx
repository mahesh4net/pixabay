import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { mycontext } from "../context/context";

export default function Imagebox(props) {
  const {
    setViews,
    setDownloads,
    setLikes,
    setImageSrc,
  } = useContext(mycontext);



  const navigate = useNavigate();

  function HandleNavigate() {
    setViews(props.views)
    setDownloads(props.downloads)
    setLikes(props.likes)
    setImageSrc(props.source)
    navigate("/download");
  }

  return (
    <>
      <div className="image-container" onClick={HandleNavigate}>
        <img src={props.previewURL} alt="" />
      </div>
    </>
  );
}
