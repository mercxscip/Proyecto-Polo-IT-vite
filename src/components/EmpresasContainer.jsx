import './empresasContainer.css'

const ProductContainer = (props) => {
    return (
    <section>
        <div className='product__container'>
        {props.children}
        </div>
    </section>
    )
}

export default ProductContainer