import { useContext } from "react";
import { mycontext } from "../context/context";

export default function Download() {
  const {
    views,
    downloads,
    likes,
    imagesrc,
  } = useContext(mycontext);



    const handleDownload = async () => {
      try {
        const response = await fetch(imagesrc, {mode: "cors" }); // Fetch the image as a blob
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = "image.jpg"; // Set a default filename for the download
        document.body.appendChild(link);
        link.click();

        // Clean up
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      } catch (error) {
        alert("Failed to download image:", error);
      }
    };

  return (
    <>
      <div className="home-title">
        <h1> Download Image</h1>
      </div>

      <div className="download-container">
        <img src={imagesrc} alt="" />

        <div className="download-details">
          <div className="img-stats">
            <div className="views">
              <i class="fa-solid fa-eye"></i>
              <h5>{views}</h5>
            </div>
            <div className="likes">
              <i class="fa-solid fa-thumbs-up"></i>
              <h5>{likes}</h5>
            </div>
            <div className="downloads">
              <i class="fa-solid fa-download"></i>
              <h5>{downloads}</h5>
            </div>
          </div>

          <button className="download-btn" onClick={handleDownload}>
            Download
          </button>
        </div>
      </div>
    </>
  );
}
