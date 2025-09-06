import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./header";
import Footer from "./footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AlbumPage from "./albumpage/albumpage";

function App() {
  const events = [
    {
      id: 1,
      name: "The Beginning",
      releaseDate: "Mar 16, 2025",
      tracklist: [
        "1. TRAPPED",
        "2. WE MOVIN",
        "3. 576Tunnel",
        "4. ROUND 2 THIS 4OON",
        "5. Lost Dreams",
        "6. Stay Chill",
        "7. Jungl",
        "8. Time Fl1es",
        "9. 1 Month Later",
        "10. life to win (love)",
        "11. Runnin Thru",
        "12. RUN 45",
        "13. Longest Hour",
      ],
      coverImage: "./MP/TRAPPED.png",
      link: "thebeginning",
      desc: "This is my 1st Project (in full). It contains the tracks listed , and was a great practical experience. 1st of the trilogy",
      spotifylink: "https://www.spotify.com/album/addnumbers",
      applelink: "https://music.apple.com/us/album/name/numbers",
      youtubelink:
        "https://www.youtube.com/playlist?list=PLo7fvUcRypuw-o0reX6TlHqoK_6itMz4e",
      tidallink: "https://tidal.com/album/numbers",
      amazonlink: "https://music.amazon.com/albums/numbers",
      ymlink:
        "https://music.youtube.com/playlist?list=PLo7fvUcRypuw-o0reX6TlHqoK_6itMz4e",
      deezerlink: "https://www.deezer.com/en/album/numbers",
      soundcloudlink:
        "https://soundcloud.com/chrd-940161040/sets/the-beginning",
      bandcamplink: "https://chrdofficial.bandcamp.com/album/name",
      ituneslink: "https://itunes.apple.com/us/album/name/id?ls=1&app=itunes",
    },
    {
      id: 2,
      name: "The Interlude",
      releaseDate: "Jul 17, 2025",
      tracklist: [
        "1. reflect",
        "2. the feel of it",
        "3. NO RUNNIN",
        "4. MOVE AWAY / ON RADAR",
        "5. DARKEN",
        "6. DARK'S THEME",
        "7. time past / i'll always be there",
        "8. in the sky / float away",
        "9. the city",
        "10. looking out and away",
      ],
      coverImage: "./MP/the_interlude.png",
      link: "theinterlude",
      desc: "This is my 2nd Project. It was a stylistic endeavor that defined a new style. 2nd of the trilogy",
      spotifylink: "https://www.spotify.com",
      applelink: "https://music.apple.com/us/album/the-interlude/numbers",
      youtubelink:
        "https://www.youtube.com/playlist?list=PLo7fvUcRypuxEfj8vqwlTYyvYwFiS5IwW",
      tidallink: "https://tidal.com/album/numbers",
      amazonlink: "https://music.amazon.com/albums/numbers",
      ymlink:
        "https://music.youtube.com/playlist?list=PLo7fvUcRypuxEfj8vqwlTYyvYwFiS5IwW",
      deezerlink: "https://www.deezer.com/en/album/numbers",
      soundcloudlink:
        "https://soundcloud.com/chrd-940161040/sets/the-interlude",
      bandcamplink: "https://chrdofficial.bandcamp.com/album/name",
      ituneslink: "https://itunes.apple.com/us/album/name/id?ls=1&app=itunes",
    },
    // {
    //   id: 3,
    //   name: "The End",
    //   releaseDate: "Dec 25, 2025",
    //   tracklist: [
    //     "1. forgotten summers",
    //     "2. WHICH ONE",
    //     "3. HYPERPOP/LOSING TIME",
    //     "4. arcade",
    //     "5. 1500",
    //     "6. DEADLIGHTS",
    //     "7. rather be happy",
    //     "8. found feeling",
    //     "9. HAPPY DAYS!",
    //     "10. GOOD TIMES AHEAD",
    //     "11. GOLDEN",
    //     "12. daylight",
    //   ],
    //   coverImage: "./MP/daylight.png",
    //   link: "theend",
    //   desc: "My 3rd Project. It was a great project that taught me a lot and was one that laid the groundwork for CHRD's future. Last of the trilogy.",
    //   spotifylink: "https://spotify.com/album/addnumbers",
    //   applelink: "https://music.apple.com/us/album/the-end/numbers",
    //   youtubelink: "https://www.youtube.com/playlist?list=id",
    //   tidallink: "https://tidal.com/album/numbers",
    //   amazonlink: "https://music.amazon.com/albums/numbers",
    //   ymlink: "https://music.youtube.com/playlist?list=id",
    //   deezerlink: "https://www.deezer.com/en/album/numbers",
    //   soundcloudlink: "https://soundcloud.com/chrd-940161040/sets/the-end",
    //   bandcamplink: "https://chrdofficial.bandcamp.com/album/name",
    //   ituneslink: "https://itunes.apple.com/us/album/name/id?ls=1&app=itunes",
    // },
    // {
    //   id: 4,
    //   name: "PLAY ON!",
    //   releaseDate: "RELEASES JUNE 2026",
    //   tracklist: [
    //     "1. Track 1",
    //     "2. Track 2",
    //     "3. Track 3",
    //     "4. Track 4",
    //     "5. TRACK 5",
    //     "6. TRACK 6",
    //     "7. TRACK 7",
    //     "8. TRACK 8",
    //     "9. TRACK 9",
    //     "10. TRACK 10",
    //     "11. TRACK 11",
    //     "12. TRACK 12",
    //     "13. TRACK 13",
    //     "14. TRACK 14",
    //   ],
    //   coverImage: "./MP/PLAY_ON!.png",
    //   link: "playon",
    //   desc: "My First Beat Tape. A fun little project before " / ".",
    //   spotifylink: "https://spotify.com/album/addnumbers",
    //   applelink: "https://music.apple.com/us/album/play-on-/numbers",
    //   youtubelink: "https://www.youtube.com/playlist?list=id",
    //   youtubelink: "https://www.youtube.com/playlist?list=id",
    //   tidallink: "https://tidal.com/album/numbers",
    //   amazonlink: "https://music.amazon.com/albums/numbers",
    //   ymlink: "https://music.youtube.com/playlist?list=id",
    //   deezerlink: "https://www.deezer.com/en/album/numbers",
    //   soundcloudlink: "https://soundcloud.com/chrd-940161040/sets/PLAY-ON",
    //   bandcamplink: "https://chrdofficial.bandcamp.com/album/play-on",
    //   ituneslink:
    //     "https://itunes.apple.com/us/album/play-on-/id?ls=1&app=itunes",
    // },
    // {
    //   id: 5,
    //   name: "/",
    //   releaseDate: "RELEASE DATE TBC",
    //   tracklist: [
    //     "1. Track 1",
    //     "2. Track 2",
    //     "3. Track 3",
    //     "4. Track 4",
    //     "5. TRACK 5",
    //     "6. TRACK 6",
    //     "7. TRACK 7",
    //     "8. TRACK 8",
    //     "9. TRACK 9",
    //     "10. TRACK 10",
    //     "11. TRACK 11",
    //     "12. TRACK 12",
    //     "13. TRACK 13",
    //     "14. TRACK 14",
    //     "15. TRACK 15",
    //   ],
    //   coverImage: "./MP/slash.png",
    //   link: "slash",
    //   desc: "/. The story of CHRD.",
    //   spotifylink: "https://spotify.com/album/addnumbers",
    //   applelink: "https://music.apple.com/us/album/numbers?i=numbers",
    //   youtubelink: "https://www.youtube.com/playlist?list=id",
    //   tidallink: "https://tidal.com/album/numbers",
    //   amazonlink: "https://music.amazon.com/albums/numbers",
    //   ymlink: "https://music.youtube.com/playlist?list=id",
    //   deezerlink: "https://www.deezer.com/en/album/numbers",
    //   soundcloudlink:
    //     "https://soundcloud.com/chrd-940161040/sets/the-interlude",
    //   bandcamplink: "https://chrdofficial.bandcamp.com/album/name",
    //   ituneslink: "https://itunes.apple.com/us/album/name/id?ls=1&app=itunes",
    // },
    // {
    //   id: 6,
    //   name: "BROKEN MINDS",
    //   releaseDate: "RELEASE DATE TBC",
    //   tracklist: [
    //     "1. Track 1",
    //     "2. Track 2",
    //     "3. Track 3",
    //     "4. Track 4",
    //     "5. TRACK 5",
    //     "6. TRACK 6",
    //     "7. TRACK 7",
    //     "8. TRACK 8",
    //     "9. TRACK 9",
    //     "10. TRACK 10",
    //     "11. TRACK 11",
    //     "12. TRACK 12",
    //   ],
    //   coverImage: "./MP/BROKEN_MINDS.png",
    //   link: "BROKENMINDS",
    //   desc: "WHAT HAPPENS TO SOCIETY WHEN THE MIND IS CONTROLLED?.",
    //   spotifylink: "https://spotify.com/album/addnumbers",
    //   applelink: "https://music.apple.com/us/album/broken-minds/numbers",
    //   youtubelink: "https://www.youtube.com/playlist?list=id",
    //   tidallink: "https://tidal.com/album/numbers",
    //   amazonlink: "https://music.amazon.com/albums/numbers",
    //   ymlink: "https://music.youtube.com/playlist?list=id",
    //   deezerlink: "https://www.deezer.com/en/album/numbers",
    //   soundcloudlink:
    //     "https://soundcloud.com/chrd-940161040/sets/the-interlude",
    //   bandcamplink: "https://chrdofficial.bandcamp.com/album/name",
    //   ituneslink:
    //     "https://itunes.apple.com/us/album/broken-minds/id?ls=1&app=itunes",
    // },
    // {
    //   id: 7,
    //   name: "2 PLAY ON!",
    //   releaseDate: "RELEASE DATE TBC",
    //   tracklist: [
    //     "1. Track 1",
    //     "2. Track 2",
    //     "3. Track 3",
    //     "4. Track 4",
    //     "5. TRACK 5",
    //     "6. TRACK 6",
    //     "7. TRACK 7",
    //     "8. TRACK 8",
    //     "9. TRACK 9",
    //     "10. TRACK 10",
    //     "11. TRACK 11",
    //     "12. TRACK 12",
    //   ],
    //   coverImage: "./MP/2_PLAY_ON!.png",
    //   link: "2playon",
    //   desc: "2 PLAY ON! A Sequel to 'PLAY ON!'.",
    //   spotifylink: "https://spotify.com/album/addnumbers",
    //   applelink: "https://music.apple.com/us/album/name/numbers",
    //   youtubelink: "https://www.youtube.com/playlist?list=id",
    //   tidallink: "https://tidal.com/album/numbers",
    //   amazonlink: "https://music.amazon.com/albums/numbers",
    //   ymlink: "https://music.youtube.com/playlist?list=id",
    //   deezerlink: "https://www.deezer.com/en/album/numbers",
    //   soundcloudlink:
    //     "https://soundcloud.com/chrd-940161040/sets/the-interlude",
    //   bandcamplink: "https://chrdofficial.bandcamp.com/album/name",
    //   ituneslink: "https://itunes.apple.com/us/album/name/id?ls=1&app=itunes",
    // },
    // {
    //   id: 8,
    //   name: "50/50",
    //   releaseDate: "RELEASE DATE TBC",
    //   tracklist: [
    //     "1. Track 1",
    //     "2. Track 2",
    //     "3. Track 3",
    //     "4. Track 4",
    //     "5. TRACK 5",
    //     "6. TRACK 6",
    //     "7. TRACK 7",
    //     "8. TRACK 8",
    //     "9. TRACK 9",
    //     "10. TRACK 10",
    //     "11. TRACK 11",
    //     "12. TRACK 12",
    //   ],
    //   coverImage: "./MP/50:50.png",
    //   link: "5050",
    //   desc: "50/50. Pick A Side.",
    //   spotifylink: "https://spotify.com/album/addnumbers",
    //   applelink: "https://music.apple.com/us/album/name/numbers",
    //   youtubelink: "https://www.youtube.com/playlist?list=id",
    //   tidallink: "https://tidal.com/album/numbers",
    //   amazonlink: "https://music.amazon.com/albums/numbers",
    //   ymlink: "https://music.youtube.com/playlist?list=id",
    //   deezerlink: "https://www.deezer.com/en/album/numbers",
    //   soundcloudlink:
    //     "https://soundcloud.com/chrd-940161040/sets/the-interlude",
    //   bandcamplink: "https://chrdofficial.bandcamp.com/album/name",
    //   ituneslink: "https://itunes.apple.com/us/album/name/id?ls=1&app=itunes",
    // },
  ];

  const handlePlay = (title) => {
    alert(`Playing: ${title}`);
    // Here you would typically integrate with an audio player
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log("Form submitted:", data);
    alert("Thank you for your message! We will get back to you soon.");
    e.target.reset();
  };

  return (
    <Routes>
      <Route path="/album/:link" element={<AlbumPage />} />

      <Route
        path="/"
        element={
          <div className="App">
            {" "}
            <Header />
            <section id="home" className="hero">
              <div className="hero-content">
                <h1>Hi, I'm CHRD</h1>
                <p>Feel The Music</p>
                <a href="#music" className="cta-button">
                  Listen Now!
                </a>
              </div>
            </section>
            <section id="about" className="about">
              <div className="container">
                <h2>About Me</h2>
                <div className="about-content">
                  <div className="about-image">
                    <img src="./MP/CHRD_PFP.png" alt="CHRD" />
                  </div>
                  <div className="about-text">
                    <p>
                      I'm a passionate musician dedicated to creating unique and
                      memorable musical experiences. Through listening music for
                      a lot of my life and having a passion for making it, I've
                      developed a distinctive style that blends various genres
                      and influences.
                    </p>
                    <p>
                      I am 14 years old right now, and hope to make it big one
                      day!
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section id="music" className="music">
              <div className="container">
                <h2>Featured Music</h2>
                <div className="music-grid">
                  <div className="music-item">
                    <img src="./MP/the_interlude.png" alt="Album Cover" />
                    <h3>Album: The Interlude</h3>
                    <p>Released: 17 Jul 2025</p>
                    <a href="#albums-list">
                      <button className="play-button">Listen Now!</button>
                    </a>
                  </div>
                  <div className="music-item">
                    <img src="./MP/HAPPY_DAYS.png" alt="Album Cover" />
                    <h3>Single 3: HAPPY DAYS!</h3>
                    <p>Released: 27 Aug 25 </p>
                    <a href="http://youtube.com/watch?v=s9mgZCdOws8&t=96s">
                      <button className="play-button">Play</button>
                    </a>
                  </div>
                  <div className="music-item">
                    <img
                      src="./MP/HYPERPOP_:_LOSING_TIME.jpeg"
                      alt="Album Cover"
                    />
                    <h3>Single 2: HYPERPOP / LOSING TIME</h3>
                    <p>Released: 15 Aug 2025</p>
                    <a href="https://www.youtube.com/watch?v=psUxeS2hHKc">
                      <button className="play-button">Play</button>
                    </a>
                  </div>
                </div>
              </div>
            </section>
            <section id="albums" className="albums">
              <div className="container">
                <h2>Albums</h2>
                <div className="albums-list" id="albums-list">
                  {events.map((event) => (
                    <div className="album-item">
                      <div className="album-date">
                        <span className="day">{event.name}</span>
                        <span className="month">{event.releaseDate}</span>
                        <br />
                        <img src={event.coverImage} className="album-art"></img>
                        {/* <div className="album-details"> */}
                        <h3>Tracklist:</h3>
                        {event.tracklist.map((track) => (
                          <div>
                            <p>{track}</p>
                          </div>
                        ))}
                        {/* </div> */}
                        <Link
                          to={`/album/${event.link}`}
                          state={{
                            name: event.name,
                            releaseDate: event.releaseDate,
                            coverImage: event.coverImage,
                            tracklist: event.tracklist,
                            youtubelink: event.youtubelink,
                            spotifylink: event.spotifylink,
                            applelink: event.applelink,
                            tidallink: event.tidallink,
                            amazonlink: event.amazonlink,
                            ymlink: event.ymlink,
                            deezerlink: event.deezerlink,
                            soundcloudlink: event.soundcloudlink,
                            bandcamplink: event.bandcamplink,
                            ituneslink: event.ituneslink,
                          }}
                        >
                          <button className="play-button">Play Now!</button>
                          <div id="thelink"></div>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <Footer />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
