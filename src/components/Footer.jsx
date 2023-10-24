import './footer.css'

const Footer = () => {
    return (
    <div>
        <footer>
            <div className='footer__content'>
                <div className='title__content'>
                    <h3 className='footer__title'>Registrate y recibí</h3>
                    <h3 className='footer__title2'>nuestro</h3>
                    <h3 className='footer__title3'>newsletter</h3>
                </div>
                <a className='footer__btn' href="https://optin.myperfit.com/subscribe/poloit/7hgKwhcK">¡QUIERO EL NEWS!</a>
                <div className='icon__content'>
                    <a className='footer__icon' href="https://www.youtube.com/channel/UCt0AmOQHBXyYIMXMviCvX5g/featured"><i class="bi bi-youtube"></i></a>
                    <a className='footer__icon' href="https://twitter.com/PoloITBsAs"><i class="bi bi-twitter"></i></a>
                    <a className='footer__icon' href="https://www.instagram.com/poloitbuenosaires/"><i class="bi bi-instagram"></i></a>
                    <a className='footer__icon' href="https://www.linkedin.com/company/polo-it-de-buenos-aires/"><i class="bi bi-linkedin"></i></a>
                    <a className='footer__icon' href="https://es-la.facebook.com/poloitbuenosaires/"><i class="bi bi-facebook"></i></a>
                    <a className='footer__icon' href="https://wa.me/5491157826061"><i class="bi bi-whatsapp"></i></a>
                </div>
                <a className='footer__mail' href='mailto:gerente@poloitbuenosaires.org.ar'>poloit@poloitbuenosaires.org.ar</a>
                <p className='footer__credits'>Diseñado por Mercedes y Melanie</p>
                <a className='footer__politics' href="https://www.poloitbuenosaires.org.ar/politica-de-privacidad">Políticas de privacidad</a>
                <a className='footer__politics2' href="https://www.poloitbuenosaires.org.ar/terminos-y-condiciones">Términos y condiciones</a>
            </div>
        </footer>
    </div>
    )
}

export default Footer