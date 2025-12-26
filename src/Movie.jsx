import React, { useState } from 'react'

function Movie() {

    const [data, setdata] = useState([])

    const apicall = async () => {
        let moviedata =await fetch("https://jsonfakery.com/movies/paginated")
        let mdata = await moviedata.json()
        setdata(mdata)
    }

    return (
        <div>
            <h1>This is Movie Page</h1>
            <button onClick={apicall}>Submit</button>

            {data.map((post)=>(
                <div>
                    <h3>{post.original_title}</h3>
                    <h3>{post.overview}</h3>

                    </div>
            ))}

        </div>
    )
}

export default Movie