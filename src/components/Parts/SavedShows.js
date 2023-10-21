import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
import Nav from "../Navs&Bars/Nav";
import Banner from "./Banner";
import { AiOutlineClose } from 'react-icons/ai';
import './Parts.css'

export default function SavedShows() {
    const [movies, setMovies] = useState([]);
    const user = useSelector(selectUser);

    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    };
    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    };
    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
            setMovies(doc.data()?.savedShows);
        });
    }, [user?.email]);
    const movieRef = doc(db, 'users', `${user?.email}`)
    const deleteShow = async (passedID) => {
        try {
            const result = movies.filter((item) => item.id !== passedID)
            await updateDoc(movieRef, {
                savedShows: result
            })
        } catch (error) {
            console.log(error)
        }
    }
    return(
    <>
        <Nav />
        <Banner />
        <div className="row">
            <h2> My Shows</h2>
            <div className="row-group">
                <MdChevronLeft
                    onClick={slideLeft}
                    className='movie-scr-left'
                    size={40}
                />
                <div
                    id={'slider'}
                    className='row-movies'
                    >
                    {movies.map((item) => (
                        <div
                        key={item.id}
                        className='movie-box'
                        >
                        <img
                            className="movie-img" 
                            src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                            alt={item?.title}
                        />
                        <div className='movie-des'>
                            <p className='movie-title'>
                            {item?.title}
                            </p>
                            <p 
                                onClick={()=> deleteShow(item.id)} 
                                className='delete-movie'><AiOutlineClose /></p>
                        </div>
                        </div>
                    ))}
                </div>

                <MdChevronRight
                    onClick={slideRight}
                    className='movie-scr-right'
                    size={40}
                />
            </div>
        </div>
    </>
    )
}