import React, { useState, useEffect } from 'react';
import './PostView.css';
import Navbar from './Navbar';
import Card from './Card';
import axios from 'axios';
//"mongodb+srv://naziya72:Naziyapatel@77@cluster0.aneeqxs.mongodb.net/Instaclone?retryWrites=true&w=majority"
function PostView() {

    const [userdata, setUserdata] = useState('');

    function fetchData() {
        axios
            .get('https://server-insta-8nrq.onrender.com/posts')
            .then((res) => {
                const dataArr = res.data
                dataArr.reverse()
                setUserdata(dataArr)
            })
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            <div className='postview-container'>
                <Navbar />

                {!userdata.length ?
                    <div class="dots-bars-1"></div>
                    :
                    <div className='card-container'>
                        {
                            userdata.map((data, idx) => {
                                return <Card key={idx} data={data} />
                            })
                        }
                    </div>
                }
            </div>
        </>
    )
}

export default PostView;