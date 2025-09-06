import React from "react";
import { useEffect, useState } from "react";
import Header from "../header";
import Footer from "../footer";
import { useParams, useLocation } from "react-router-dom";
import "../App.css";

function AlbumPage() {
  const { link } = useParams();
  const location = useLocation();

  const albumName = decodeURIComponent(link);
  const {
    releaseDate,
    coverImage,
    tracklist,
    name,
    youtubelink,
    spotifylink,
    applelink,
    tidallink,
    amazonlink,
    ymlink,
    deezerlink,
    soundcloudlink,
    bandcamplink,
    ituneslink,
  } = location.state || {};

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);

    if (coverImage) {
      document.body.style.backgroundImage = `url(../gray.jpeg)`;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundPosition = "center";
      document.body.style.minHeight = "100vh";
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.backgroundImage = "";
      document.body.style.backgroundSize = "";
      document.body.style.backgroundRepeat = "";
      document.body.style.backgroundPosition = "";
      document.body.style.minHeight = "";
    };
  }, [coverImage]);

  return (
    <div>
      <Header />

      <div
        style={{
          display: "flex",

          justifyContent: "center",
          alignItems: "center", // vertical center
          padding: "20px",
          textAlign: isMobile ? "center" : "left",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            marginTop: "150px",
            gap: "20px",
          }}
        >
          {coverImage && (
            <img
              src={`../${coverImage}`}
              alt={albumName}
              style={{
                width: isMobile ? "100%" : "250px",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          )}

          <div>
            <h2>Album: {name}</h2>
            {releaseDate && <p>Release Date: {releaseDate}</p>}
            {tracklist && (
              <>
                <h3>Tracklist:</h3>
                <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                  {tracklist.map((track, index) => (
                    <li key={index}>{track}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          gap: "40px",
          width: "100%",
          paddingLeft: "100px",
          paddingRight: "100px",
          paddingBottom: "20px",
        }}
      >
        <div style={{ flex: 1, textAlign: isMobile ? "center" : "left" }}>
          <h3>Stream</h3>
          <div
            style={{
              display: "flex",
              gap: "15px",
              justifyContent: isMobile ? "center" : "flex-start",
            }}
          >
            <a href={spotifylink} target="_blank" rel="noopener noreferrer">
              <img src="..//spotify_logo.png" width="50" />
            </a>
            <a href={applelink} target="_blank" rel="noopener noreferrer">
              <img src="..//apple_music_icon.png" width="40" />
            </a>
            <a href={tidallink} target="_blank" rel="noopener noreferrer">
              <img src="..//tidal_logo.png" width="40" />
            </a>
            <a href={amazonlink} target="_blank" rel="noopener noreferrer">
              <img src="..//amazon_music_logo.png" width="40" />
            </a>
            <a href={deezerlink} target="_blank" rel="noopener noreferrer">
              <img src="..//deezer_logo.png" width="40" />
            </a>
            <a href={ymlink} target="_blank" rel="noopener noreferrer">
              <img src="..//yt_music_logo.png" width="40" />
            </a>
            <a href={youtubelink} target="_blank" rel="noopener noreferrer">
              <img src="..//yt_logo.png" width="40" />
            </a>
            <a href={soundcloudlink} target="_blank" rel="noopener noreferrer">
              <img src="..//soundcloud_logo.png" width="40" />
            </a>
          </div>
        </div>

        <div style={{ flex: 1, textAlign: isMobile ? "center" : "right" }}>
          <h3>Buy</h3>
          <div
            style={{
              display: "flex",
              gap: "15px",
              justifyContent: isMobile ? "center" : "flex-end",
            }}
          >
            <a href={bandcamplink} target="_blank" rel="noopener noreferrer">
              <img src="..//bandcamp_logo.png" width="70" />
            </a>
            <a href={ituneslink} target="_blank" rel="noopener noreferrer">
              <img src="..//iTunes_logo.png" width="40" />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AlbumPage;
