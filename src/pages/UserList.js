import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import axios from "axios";
import Card from "../components/Card";

const UserList = () => {
    const [listData, setListData] = useState([]);

    useEffect(()=> {
        let moviesId = window.localStorage.movies ? window.localStorage.movies.split(",") : [];
        console.log(moviesId)
        for (let i = 0; i< moviesId.length; i++){

        axios.get( `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=b232616bc8d261e1fbbdabcbcdb9dcb4&language=fr-FR&external_source=imdb_id`
        ).then(res => setListData((listData) => [...listData, res.data]))
        }
    }, [])

    return (
        <div>
            <Header/>
            <h2>Coup de coeur <span>❤️</span></h2>
            <div className="result">
                {listData.map((movie)=> <Card movie={movie} key={movie.id}/>)}
            </div>
        </div>
    );
};

export default UserList;