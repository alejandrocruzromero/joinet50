import './Category.css';
import  {Link} from 'react-router-dom'
function Category(props){      
    return(
    <section   className="category">                          
        <Link to = {`/categorias/${props.id}`} > <p className="categoryP">{props.name}</p></Link>
    </section>

    );

}

export default Category;