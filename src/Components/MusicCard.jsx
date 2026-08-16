import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
const MusicCard = (props) => 
{
    const {name,imageUrl,id,type} = props
    const MusicCardJsx = 
    <Link to={type==='featured' ?`/featured/${id}`:type==='category' ?`/category/${id}` : `/newrelease/${id}`} className="col-6 col-sm-4 col-md-3 col-lg text-decoration-none">
        <div>
            <img src={imageUrl} alt={name} className="img-fluid rounded"/>
                <p className="mt-2 mb-0 fw-semibold">
                    {name}
                </p>
        </div>
    </Link>


    return MusicCardJsx
  
}

export default MusicCard


