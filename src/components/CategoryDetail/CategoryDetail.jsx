import './CategoryDetail.css' 
import Category from '../Category/Category'
function CategoryDetail(props){
    

      console.log ("CATEGORYLIST",props)        
    return(
        <div className ='itemlist'>                
        {props.Items.map((i)=>(                  
            <Category 
                name ={i.name}
                id={i.id}
                key={i.id}
                />
        ))}
        </div>
    )
}

export default CategoryDetail;
