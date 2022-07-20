import './CategoryDetail.css' 
import Category from '../Category/Category'
function CategoryDetail(props){
    

      console.log ("CATEGORYLIST",props)        
    return(
        <div className ='itemlist'>                
        {props.Items.map((i)=>(                  
            <Category 
                categoria ={i.categoria}
                nombre={i.nombre}
                key={i.categoria}
                />
        ))}
        </div>
    )
}

export default CategoryDetail;
