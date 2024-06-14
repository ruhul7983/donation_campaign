import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import Banner from '../../assets/Rectangle 4281.png';
import '../../index.css';

const Navbar = () => {

    return (
        <div>
            <div className='flex justify-between container mx-auto'>
                    <img src={Logo} alt="" />
                    <ul className='flex gap-3 mt-4 text-white'>
                        <Link to={'/'}><li>Home</li></Link>
                        <Link to={'/donation'}><li>Donation</li></Link>
                        <Link to={'/statistics'}><li>Statistics</li></Link>
                    </ul>
                </div>
        </div>
    );
};

export default Navbar;
