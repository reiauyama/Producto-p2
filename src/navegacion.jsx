import image from '../src/assets/image.png'
import { IoIosArrowDown } from 'react-icons/io';
import './navegacion.css'
// Barra de navegación
function navegacion() {
return(

    <div className='nav'>
    <ul className='nav_bar'>
        <li><a href="/" className='img'><img src={image} alt="logo" /></a></li>
        <li><a href="/">Nosotros </a> <IoIosArrowDown/></li>
        <li><a href="/">Empresas</a></li>
        <li><a href="/">Nuestros Programas</a></li>
        <li><a href="/">eCesde</a></li>
        <li><a href="/">Escuelas </a><IoIosArrowDown/></li>
        <li><a href="/">Sedes </a><IoIosArrowDown/></li>
        <li><a href="/">Nuestros Servicios </a><IoIosArrowDown/></li>
        <li className='contac'><a href="/">Contacto</a></li>
    </ul>
    </div>
)
    
}

export default navegacion