//How to embed an image inside an src, 1. import it 
import png from "../assets/hero.png" //heropng is an elias

const Products = ({products}) => {


    return(
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Product Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* loop over array of products object */}
                        {
                            products.map(function(pro){
                                return(

                                            <tr key={pro.id}>
                                                <td>{pro.id}</td>
                                                <td>{pro.name}</td>
                                                <td>{pro.price}</td>
                                                <td>
                                                    {/* how to use an imported image */}
                                                    <img src={png} alt="chopchop logo" style={{maxWidth:"50px"}}/>
                                                </td>
                                            </tr>

                                        )
                                                    }
                            )
                        }
                       
                        {/* <tr>
                            <td>2</td>
                            <td>Mango Sauce</td>
                            <td>3000</td>
                            {/* how to embed an image from a public folder */}
                            {/* <td>
                                <img src={png} alt="chopchop logo" style={{maxWidth:"50px"}}/>
                            </td> */}
                        {/* </tr>  */}
                    </tbody>
                </table>
            </div>
        </div>
    )
} 

export default Products