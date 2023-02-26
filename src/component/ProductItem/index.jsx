import './ProductItem.css'

function ProductItem() {
    return (
        <div className="product-item">
            <div className="product-item__img">
                <img src="/images/vai-thieu-02.png"></img>
            </div>
            <div className="product-item__title">lychee fruit</div>
            <div className="product-item__description">This is a fruit from Vietnam</div>
            <div className="product-item-price">
                <div className="product-item-price__wrapper">
                    <div className="product-item-price__price">
                        2
                        USD
                    </div>
                    <div className="product-item-price__price--discount">
                        10
                        USD
                    </div>
                </div>
                <button className="product-item-price__button">Add to cart</button>
            </div>
        </div>
    )
}

export default ProductItem;
