
import MusicCard from '../Components/MusicCard'
import { useFeaturePlayListQuery,useCategoryPlayListQuery,useNewReleasePlayListQuery } from '../Slices/HomeRouteApiSlice'
import Loading from '../Components/Loading'
import Error from '../Components/Error'


import SideBar from '../Components/SideBar'

const HomeScreen = (props) => 
{


    const {data:featurePlayListResponseObject,isLoading:featurePlayListLoading,error:featurePlayListError} = useFeaturePlayListQuery()
    const {items:featurePlayListItems=[]} = featurePlayListResponseObject?.playlists ||  {}


    const {data: categoryPlayListResponseObject, isLoading: categoryPlayListLoading, error: categoryPlayListError} = useCategoryPlayListQuery()
    const categoryPlayListItems = categoryPlayListResponseObject?.categories?.items || []

    const {data: newReleasesResponseObject, isLoading:newReleaseLoading, error:newReleaseError} = useNewReleasePlayListQuery()
    const newReleaseItems = newReleasesResponseObject?.albums?.items || []


   

    //THE BELOW METHOD RENDERS FEATURED PLAY LIST
    const renderFeaturePlayListCards = ()=>
    (
        featurePlayListItems.map
        (
            (PlayListObject)=>
            {
                return <MusicCard key={PlayListObject.id} id={PlayListObject.id} name={PlayListObject.name} imageUrl={PlayListObject.images[0].url} type='featured' />
            }
        )
    )

    //THE BELOW METHOD RENDERS CATEGORY PLAY LIST
    const renderCategoryPlayListCards = ()=>
    (
        categoryPlayListItems.map
        (
            (PlayListObject)=>
            {
                return <MusicCard key={PlayListObject.id} id={PlayListObject.id} name={PlayListObject.name} imageUrl={PlayListObject.icons[0].url} type='category' />
            }
        )
    )

    //THE BELOW METHOD RENDERS NEW RELEASE PLAY LIST
    const renderNewReleasesPlayListCards = ()=>
    (
        newReleaseItems.map
        (
            (PlayListObject)=>
            {
               return <MusicCard key={PlayListObject.id} id={PlayListObject.id} name={PlayListObject.name} imageUrl={PlayListObject.images[0]?.url}/>
            }
        )
    )

    const HomeScreenJsx = 
    <div className="min-vh-100 d-flex bg-dark text-white">

            {/* Sidebar */}
            <SideBar />       


            {/* Actual Content */}
            <div className="flex-grow-1 p-4 overflow-auto">

                {/* Editors Pick */}
                <section className="mb-5">
                    <h2 className="fs-3 fw-bold mb-4">
                        Editors Pick
                    </h2>

                    <div className="row g-4">

                        {/* Card 1 */}
                        {featurePlayListLoading&&<Loading message='Loading Featured Playlist...' fullScreen={false}/>}
                        {featurePlayListError&&<Error message='Coudlnt load play list. Please try again... ' />}
                        {renderFeaturePlayListCards()}
                        

                        

                    </div>
                </section>


                {/* Genre & Mood */}
                <section className="mb-5">
                    <h2 className="fs-3 fw-bold mb-4">
                        Genre & Mood
                    </h2>

                    <div className="row g-4">
                        {categoryPlayListLoading&&<Loading message='Loading Category Playlist...' fullScreen={false}/>}
                        {categoryPlayListError&&<Error message='Coudlnt load play list. Please try again... ' />}
                        {renderCategoryPlayListCards()}


                    </div>
                </section>


                {/* New Releases */}
                <section className="mb-5">
                    <h2 className="fs-3 fw-bold mb-4">
                        New Releases
                    </h2>

                    <div className="row g-4">


                                {newReleaseLoading&&<Loading message='Loading New Release Playlist...' fullScreen={false}/>}
                                {newReleaseError&&<Error message='Coudlnt load play list. Please try again... ' />}
                                {renderNewReleasesPlayListCards()}
                        

                    </div>
                </section>

            </div>
    </div>
    
    return HomeScreenJsx
}

export default HomeScreen