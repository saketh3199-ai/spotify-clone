import React from 'react'
import { useSpecificGenreQuery } from '../Slices/PlayListApiSlice'
import MusicCard from '../Components/MusicCard'
import SideBar from '../Components/SideBar'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
const CategoryPlayListScreen = (props) => 
{
  const {data: categoryPlaylistsObj} = useSpecificGenreQuery(props.match.params.id)
  const categoryPlaylistItems = categoryPlaylistsObj?.playlists?.items || []
  console.log('Category Data:', categoryPlaylistsObj)
  return (
   <div className="min-vh-100 d-flex bg-dark text-white">
      <SideBar />

      <div className="flex-grow-1 p-4 overflow-auto">
        <Link to='/home'>
          <button className="btn btn-link text-white text-decoration-none p-0 mb-4">
            <FaArrowLeft className="me-2" />
            Back
          </button>
        </Link>
        <h2 className="fs-3 fw-bold mb-4">Podcast</h2>

        

        <div className="row g-4">
          {
            categoryPlaylistItems.map
            (
              (playlistObject) =>
              (
                <MusicCard type="featured" key={playlistObject.id} id={playlistObject.id} name={playlistObject.name} imageUrl={playlistObject.images[0]?.url} subtitle={`${playlistObject.tracks.total} Tracks`}/>
              )
            )
          }
        </div>

      </div>
    </div>
  )
}

export default CategoryPlayListScreen