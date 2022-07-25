import {foot, insta} from './foot.module.css'

let InsIm = {width:50, height:50}
export const Foot = () => {
    return (
        <div className={foot}>
            <a href='https://www.instagram.com/casabonita.ideas/?hl=es-la'>
                <div className={insta}>
                    <img src="https://i.ibb.co/pP44kcK/insta.png" alt="instagram" style={InsIm} />
                    <p>Seguinos en nuestro Instagram</p>
                </div>
            </a>
            <p>Copyright © 2021</p>
            <p>Sitio creado por Gian Luca Marchetti</p>
        </div>
    )
}