import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "../Pieces/Movie";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

export default function Row({ title, fetchURL, rowID, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const requ = await axios.get(fetchURL);
            setMovies(requ.data.results);
            return requ; 
        }
        fetchData();
    }, [fetchURL]);
    console.log(movies);
    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft - 500;
    };
    const slideRight = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft + 500;
    };
    return (
        <div className="row">
            <h2> {title} </h2>
            <div className="row-group">
                <MdChevronLeft
                    onClick={slideLeft}
                    className='movie-scr-left'
                    size={40}
                />
                <div id={'slider' + rowID}
                    className='row-movies'>
                    {movies.map((movie, id) => (
                        <Movie key={id} item={movie} />
                    ))}
                </div>
                <MdChevronRight
                    onClick={slideRight}
                    className='movie-scr-right'
                    size={40}
                />
            </div>
        </div>
    );
}