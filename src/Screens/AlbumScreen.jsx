import React, { useState } from 'react'
import { useSpecificNewReleaseQuery } from '../Slices/PlayListApiSlice'
import { FaArrowLeft, FaPlay } from 'react-icons/fa'
import SideBar from '../Components/SideBar'
import AlbumSongRow from '../Components/AlbumSongRow'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'


const AlbumScreen = (props) => 
{
  const { data: AlbumObj, isLoading: albumLoading, error: albumError } = useSpecificNewReleaseQuery(props.match.params.id)
  const [currentTrack, setCurrentTrack] = useState(null)

//   console.log('total:', AlbumObj?.tracks?.total, 'items:', AlbumObj?.tracks?.items?.length)

  const StoreSongDetails = (track) => {
    setCurrentTrack(track)
  }

  const renderAudioPlayer = () => (
    currentTrack && (
      <div className="position-fixed bottom-0 start-0 w-100" style={{ zIndex: 1050 }}>
        <AudioPlayer
          src={currentTrack?.preview_url}
          autoPlay
          showJumpControls={false}
          layout="horizontal"
          className="custom-audio-player"
          header={
            <div className="d-flex align-items-center">
              <img
                src={currentTrack?.album?.images[0]?.url}
                alt={currentTrack?.name}
                className="rounded me-3"
                style={{ width: '45px', height: '45px', objectFit: 'cover' }}
              />
              <div>
                <p className="mb-0 small text-white">{currentTrack?.name}</p>
                <p className="mb-0 small text-white-50">
                  {currentTrack?.artists?.map(a => a.name).join(', ')}
                </p>
              </div>
            </div>
          }
        />
      </div>
    )
  )

  const AlbumScreenJsx = (
    <div className="min-vh-100 bg-dark text-white">

      {/* MAIN APPLICATION AREA */}
      <div className="d-flex min-vh-100">

        {/* Sidebar */}
        <SideBar />

        {/* MAIN CONTENT */}
        <main className="flex-grow-1 overflow-auto" style={{ paddingBottom: '100px' }}>

          <div className="container-fluid p-3 p-md-4">

            {/* BACK BUTTON */}
            <div className="mb-4">
              <Link to='/home'>
              <button className="btn btn-link text-white text-decoration-none p-0">
                <FaArrowLeft className="me-2" />
                Back
              </button>
              </Link>
            </div>

            {albumLoading && <p>Loading album...</p>}
            {albumError && <p>Couldn't load album. Please try again...</p>}

            {AlbumObj && (
              <>
                {/* ALBUM HEADER */}
                <section className="mb-4">
                  <div className="d-flex flex-column flex-md-row align-items-center align-items-md-end">

                    {/* Album Image */}
                    <img
                      src={AlbumObj?.images[0]?.url}
                      alt={AlbumObj?.name}
                      className="rounded shadow mb-3 mb-md-0 me-md-4"
                      style={{ width: 'min(200px, 70vw)', aspectRatio: '1 / 1', objectFit: 'cover' }}
                    />

                    {/* Album Information */}
                    <div className="text-center text-md-start">
                      <p className="small fw-semibold mb-2">
                        New Releases
                      </p>

                      <h1 className="fw-bold display-5 display-md-4 mb-2">
                        {AlbumObj?.name}
                      </h1>

                      <p className="text-white-50 mb-0">
                        {AlbumObj?.artists?.map(a => a.name).join(', ')}
                      </p>
                    </div>

                  </div>
                </section>

                {/* ALBUM CONTROLS */}
                <div className="mb-4">
                  <button
                    className="btn btn-success rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: '50px', height: '50px' }}
                  >
                    <FaPlay />
                  </button>
                </div>

                {/* SONG TABLE */}
                <section>
                  <div className="table-responsive">
                    <table
                      className="table table-dark table-borderless align-middle mb-0"
                      style={{ minWidth: '600px' }}
                    >
                      <thead>
                        <tr className="border-bottom border-secondary">
                          <th scope="col" className="text-white-50 fw-normal" style={{ width: '5%' }}>#</th>
                          <th scope="col" className="text-white-50 fw-normal">Track</th>
                          <th scope="col" className="text-white-50 fw-normal">Time</th>
                          <th scope="col" className="text-white-50 fw-normal">Popularity</th>
                        </tr>
                      </thead>

                      <tbody>
                        {AlbumObj?.tracks?.items?.map((track, index) => (
                          <AlbumSongRow
                            key={track.id}
                            index={index}
                            track={track}
                            albumImage={AlbumObj?.images[0]?.url}
                            StoreSongDetails={StoreSongDetails}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              </>
            )}

          </div>

        </main>

      </div>

      {/* AUDIO PLAYER */}
      {renderAudioPlayer()}

    </div>
  )

  return AlbumScreenJsx
}

export default AlbumScreen