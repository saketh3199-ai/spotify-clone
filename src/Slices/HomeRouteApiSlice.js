import { apiSlice } from "./apiSlice";

export const HomeRouteApiSlice = apiSlice.injectEndpoints
(
    {
        endpoints:(builder)=>
        {
            return (
            {
                featurePlayList:builder.query
                (
                    {
                        query:()=>
                        {
                            return {url:'https://apis2.ccbp.in/spotify-clone/featured-playlists',method: 'GET'}
                        }
                    }
                ),
                categoryPlayList:builder.query
                (
                    {
                        query:()=>
                        {
                            return {url:'https://apis2.ccbp.in/spotify-clone/categories',method:'GET'}
                        }
                    }
                ),
                newReleasePlayList:builder.query
                (
                    {
                        query:()=>
                        {
                            return {url:'https://apis2.ccbp.in/spotify-clone/new-releases',method:'GET'}
                        }
                    }
                )
            })
        }
    }
)


export const {useFeaturePlayListQuery,useCategoryPlayListQuery,useNewReleasePlayListQuery} = HomeRouteApiSlice 