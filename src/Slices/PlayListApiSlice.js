import { apiSlice } from "./apiSlice";


export const PlayListApiSlice = apiSlice.injectEndpoints
(
    {
        endpoints:(builder)=>
        {
            return (
                {
                    specificFeaturePlayList:builder.query
                    (
                        {
                            query:(FeaturedId)=>
                            {
                                return {url:`https://apis2.ccbp.in/spotify-clone/playlists-details/${FeaturedId}`,method:'GET'}
                            }
                        }
                    ),
                    specificNewRelease:builder.query
                    (
                        {
                            query:(newReleaseId)=>
                            {
                                return {url:`https://apis2.ccbp.in/spotify-clone/album-details/${newReleaseId}`,method:'GET'}
                            }
                        }
                    ),
                    specificGenre:builder.query
                    (
                        {
                            query:(genreId)=>
                            {
                                return {url:`https://apis2.ccbp.in/spotify-clone/category-playlists/${genreId}`,method:'GET'}
                            }
                        }
                    )
                    
                }
            )
        }
    }
    
)

export const {useSpecificFeaturePlayListQuery,useSpecificNewReleaseQuery,useSpecificGenreQuery} = PlayListApiSlice


