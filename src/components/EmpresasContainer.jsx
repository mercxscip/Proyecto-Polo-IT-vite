

const ProductContainer = (props) => {
    return (
    <section>
        <h2>Empresas</h2>
        <div>
        {props.children}
        </div>
    </section>
    )
}

export default ProductContainer