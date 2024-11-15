import { useEffect, useState, useRef } from "react";

import Imagebox from "../components/imagebox";
import Navigation from "../components/navigation";
import Loading from "../components/loading";

// Skeleton component to display while images are loading
function Skeleton() {
  return <Loading />; // Add skeleton CSS for better styling
}

export default function Sports() {
  const [imageData, setImageData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalpage, setTotalPage] = useState(1);
  const [currentpage, setCurrentPage] = useState(1);
  const [errormsg, seterrormsg] = useState(false);
  const isLoadingRef = useRef(true);
  useEffect(() => {
    setIsLoading(true);
    isLoadingRef.current = true;
    // Set loading to true every time the page changes
    seterrormsg(false);
    setTimeout(() => {
      if (isLoadingRef.current) {
        seterrormsg(true);
      }
    }, 30000);
    // Fetch data for the current page
    fetch(
      `https://pixabay.com/api/?key=46475365-dcc91c4f1d1938b3d11762699&category=sports&per_page=52&page=${currentpage}`
    )
      .then((response) => response.json())
      .then((data) => {
        setTotalPage(Math.ceil(data.totalHits / 52));
        setImageData(data.hits);
        console.log(imageData);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
        seterrormsg(true);
      });
  }, [currentpage]);

  // Wait for all images to load before removing the skeleton
  useEffect(() => {
    if (imageData.length > 0) {
      const imageElements = imageData.map((image) => {
        const img = new Image();
        img.src = image.largeImageURL;
        return img;
      });

      // Use Promise.all to check if all images have loaded
      Promise.all(
        imageElements.map(
          (img) =>
            new Promise((resolve) => {
              img.onload = resolve;
              img.onerror = resolve; // Handle error to prevent loading indefinitely
            })
        )
      ).then(() => {
        setIsLoading(false);
        isLoadingRef.current = false;
      });
    }
  }, [imageData]);

  return (
    <>
      <div className="homepage-container">
        <div className="home-title">
          <h1>Sports</h1>
        </div>

        <div className="explore-section">
          {!errormsg
            ? isLoading
              ? Array(imageData.length) // Show 10 skeletons while loading
                  .fill(0)
                  .map((_, index) => <Skeleton key={index} />)
              : imageData.map((image, index) => (
                  <Imagebox
                    key={index}
                    source={image.largeImageURL}
                    donwloadId={image.id}
                    views={image.views}
                    likes={image.likes}
                    downloads={image.downloads}
                    previewURL={image.previewURL}
                    tags={image.tags}
                  />
                ))
            : null}
          {errormsg ? (
            <div style={{ textAlign: "center" }}>
              <h2>Could not Load Images</h2> <p>check your internet connection !</p>
            </div>
          ) : null}
        </div>
        <Navigation totalpage={totalpage} currentpage={currentpage} setCurrentPage={setCurrentPage} />
      </div>
    </>
  );
}
