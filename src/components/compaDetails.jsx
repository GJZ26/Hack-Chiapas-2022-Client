import '../assets/stylesheets/companieDetails.css'
import info from '../assets/images/companie-1.jpg'
import product1 from '../assets/images/product-1.png'
import product2 from '../assets/images/product-2.png'
import product3 from '../assets/images/product-3.png'

function CompaDetails() {
    return (
        <div className="companie-detail">

            <div className="title-companie">
                <img src={info} className="companie-pic" />
                <div className="companie-info">
                    <h1 className="companie-name">Skate Shop</h1>
                    <p className="companie-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, laborum neque rerum magnam earum ab enim natus amet laudantium dolorum nulla iure ut nesciunt beatae modi, obcaecati fugiat deserunt reiciendis.</p>
                </div>
            </div>

            <h2 className="label">Productos</h2>
            <div className="products">
                <div className="product-card">
                    <div className="image-container">
                        <img src={product1} className='product-image' />
                    </div>
                    <h1 className="product-name">Patineta Santa Cruz</h1>
                    <span className="product-price">$200</span>
                </div>
                <div className="product-card">
                    <div className="image-container">
                        <img src={product2} className='product-image' />
                    </div>
                    <h1 className="product-name">Patineta Baker</h1>
                    <span className="product-price">$200</span>
                </div>
                <div className="product-card">
                    <div className="image-container">
                        <img src={product3} className='product-image' />
                    </div>
                    <h1 className="product-name">Patineta Santa Cruz</h1>
                    <span className="product-price">$200</span>
                </div>
            </div>

        </div>
    );
}

export default CompaDetails;