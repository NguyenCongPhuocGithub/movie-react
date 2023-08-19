import { HiOutlineHome } from 'react-icons/hi';
import { BiSolidHot,BiFilm } from 'react-icons/bi';
import { FaRegCompass,FaRegHeart } from 'react-icons/fa';

export const navLists = [
    {id: 1, label: 'Home', url: '/',icon: HiOutlineHome},
    {id: 2, label: 'Trending', url: '/popular',icon: BiSolidHot},
    {id: 3, label: 'Explore', url: '/nowplaying',icon: BiFilm},
    {id: 4, label: 'Movies', url: '/moviesdetail',icon: FaRegCompass},
    {id: 5, label: 'Favorite', url: '/',icon: FaRegHeart},
]