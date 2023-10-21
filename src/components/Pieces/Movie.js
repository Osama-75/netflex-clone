import { useState } from "react";
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import './pieces.css'
import { db } from '../../firebase/firebase-config';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

export default function Movie({ item }) {
    const [like, setLike] = useState(false);
    const [saved, setSaved] = useState(false);
    const user = useSelector(selectUser);

    const movieID = doc(db, 'users', `${user?.email}`);

    const saveShow = async () => {
        if (user?.email) {
          setLike(!like);
          setSaved(true);
          await updateDoc(movieID, {
            savedShows: arrayUnion({
              id: item.id,
              title: item.title,
              img: item.backdrop_path,
            }),
          });
        } else {
          alert('Please log in to save a movie');
        }
      };
    
    return (
        
        <div className='movie-box'>
            <img
                className="movie-img" 
                src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                alt={item?.name}
            />
            
            <div className='movie-des'>
                <p className='movie-title'>
                    {item?.title}
                </p>
                <p onClick={saveShow}>
                    {like ? (
                        <FaHeart className='movie-like' />
                    ) : (
                        <FaRegHeart className='movie-like' />
                    )}
                </p>
            </div>
    </div>
    
    );
}