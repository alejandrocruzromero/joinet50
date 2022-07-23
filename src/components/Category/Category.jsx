import './Category.css';
import  {Link} from 'react-router-dom'
function Category(props){      
    return(
    <section   className="category">                          
        <Link to = {`/categorias/${props.categoria}`} > <p className="btn">{props.nombre}</p></Link>
    </section>

    );

}

export default Category;