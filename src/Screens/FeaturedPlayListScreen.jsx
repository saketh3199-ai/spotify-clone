import React from 'react'
import { useSpecificFeaturePlayListQuery } from '../Slices/PlayListApiSlice'
import {FaArrowLeft,FaPlay,FaVolumeUp} from 'react-icons/fa'
import SideBar from '../Components/SideBar'
import SongRow from '../Components/SongRow'
import { useState } from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import '../App.css' 
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const FeaturedPlayListScreen = (props) => 
{
  const {data:FeaturedObj,isLoading:featuredSpecificLoading,error:featuredError} = useSpecificFeaturePlayListQuery(props.match.params.id)
  const [currentTrack, setCurrentTrack] = useState(null)

  const StoreSongDetails = (track)=>
  {
    setCurrentTrack(track)
  }

  const renderAudioPlayer = ()=>
  {
    return currentTrack && (
    <div className="position-fixed bottom-0 start-0 w-100" style={{ zIndex: 1050 }}>
      <AudioPlayer src={currentTrack?.preview_url} autoPlay showJumpControls={false} layout="horizontal" className="custom-audio-player"/>
    </div>)
  }


  const renderSongRows = ()=>
  (
     FeaturedObj?.tracks?.items?.map
     (
        (item,index)=>
        {
            return <SongRow key={item.track.id} index={index} item={item} StoreSongDetails={StoreSongDetails} /> 
        }
      )
  )

  const renderHeadingRow = ()=>
  (
    <tr className="border-bottom border-secondary">

                                            <th scope="col" className="text-white-50 fw-normal" style={{ width: '5%' }}>
                                                #
                                            </th>

                                            <th scope="col" className="text-white-50 fw-normal">
                                                Title
                                            </th>

                                            <th scope="col" className="text-white-50 fw-normal">
                                                Album
                                            </th>

                                            <th scope="col" className="text-white-50 fw-normal">
                                                Time
                                            </th>

                                            <th scope="col" className="text-white-50 fw-normal">
                                                Artist
                                            </th>

                                            <th scope="col" className="text-white-50 fw-normal">
                                                Added
                                            </th>

                                        </tr>
  )

  const renderSongTable = ()=>
  (
    <section>

                            {/* Horizontal scrolling on mobile */}

                            <div className="table-responsive">

                                <table className="table  table-dark table-borderless align-middle mb-0" style={{minWidth: '750px'}}>

                                    {/*TABLE HEADER*/}
                                    <thead>
                                      {renderHeadingRow()}
                                    </thead>



                                    {/*  SONGS*/}

                                    <tbody>
                                      {renderSongRows()}
                                    </tbody>

                                </table>

                            </div>

                        </section>
  )

  const renderPlayListControls = ()=>
  (
    <div className="mb-4">

                            <button
                                className="
                                    btn
                                    btn-success
                                    rounded-circle
                                    d-flex
                                    align-items-center
                                    justify-content-center
                                "
                                style={{
                                    width: '50px',
                                    height: '50px'
                                }}
                            >
                                <FaPlay />
                            </button>

                        </div>
  )


  const renderPlayListInformation = ()=>
  (
    <div className="text-center text-md-start">

                                    <p className="small fw-semibold mb-2">
                                        Editor's picks
                                    </p>

                                    <h1
                                        className="
                                            fw-bold
                                            display-5
                                            display-md-4
                                            mb-2
                                        "
                                    >
                                        {FeaturedObj?.name} 
                                    </h1>

                                    <p className="text-white-50 mb-0">
                                        {FeaturedObj?.owner.display_name}
                                    </p>

                                </div>
  )

  const FeaturedPlayListScreenJsx=
  <div className="min-vh-100 bg-dark text-white">

            {/* =====================================================
                MAIN APPLICATION AREA
            ====================================================== */}

            <div className="d-flex min-vh-100">

                {/* Sidebar */}
                <SideBar />


                {/* =================================================
                    MAIN CONTENT
                ================================================== */}

                <main className="flex-grow-1 overflow-auto" style={{paddingBottom: '100px'}}>

                    <div className="container-fluid p-3 p-md-4">


                        {/* ================================
                            BACK BUTTON
                        ================================= */}

                        <div className="mb-4">

                            <Link to='/home'>
                              <button className="btn btn-link text-white text-decoration-none p-0">
                                  <FaArrowLeft className="me-2" />
                                  Back
                              </button>
                            </Link>

                        </div>



                        {/* ================================
                            PLAYLIST HEADER
                        ================================= */}

                        <section className="mb-4">

                            <div className="d-flex flex-column flex-md-row align-items-center align-items-md-end">

                                {/* Playlist Image */}

                                <img src={FeaturedObj?.images[0].url} alt={FeaturedObj?.name} className="rounded shadow mb-3 mb-md-0 me-md-4" style={{width: 'min(200px, 70vw)',aspectRatio: '1 / 1',objectFit: 'cover'}}/>


                                {/* Playlist Information */}

                                {renderPlayListInformation()}

                            </div>

                        </section>



                        {/* ================================
                            PLAYLIST CONTROLS
                        ================================= */}

                        {renderPlayListControls()}



                        {/*SONG TABLE*/}

                        {renderSongTable()}

                    </div>

                </main>

            </div>



            {/* BOTTOM MUSIC PLAYER*/}

            {renderAudioPlayer()}

  </div>

  return FeaturedPlayListScreenJsx

}

export default FeaturedPlayListScreen


