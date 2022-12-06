import React, { useEffect, useState } from 'react'
import SearchUser from "../components/SearchUser"
import Followers from "../components/Followers"

const Home = ({ allFollowers, validUser }) => {

    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    const followersList = allFollowers.filter(follower => follower.login.includes(search))

    return (
        <div className='d-grid'>
            {!validUser ?
                (
                    <div>
                        <SearchUser handleChange={handleChange} />
                        <Followers followers={{ loading, followersList }} />
                    </div>
                ) :
                    <button className='btn btn-danger m-4' size="lg" onClick={()=> window.location.href="/"}>
                        {validUser}
                    </button>
                    }

        </div>
    )
}

export default Home