import {styleTitle,styleBox,styleTitle2,StyleSpan,imgAses} from './asesorías.module.css'

const Asesorías = () => {
    return(
        <>
        <div>
            <h1 class={styleTitle}>Estos son nuestros servicios de Asesorías:</h1>
            <div class={styleBox}>
                <h2 class={styleTitle2}>Ejemplo 1:</h2>
                <img src="https://i.ibb.co/Dwj9tks/Whats-App-Image-2021-05-13-at-19-13-30.jpg" alt="img" class={imgAses} />
                <span class={StyleSpan}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, aut maiores corporis expedita qui possimus repudiandae autem repellendus, sit numquam temporibus sapiente corrupti hic cumque veniam tempore sequi doloremque molestiae!</span>
            </div>
            <div class={styleBox}>
                <h2 class={styleTitle2}>Ejemplo 2:</h2>
                <img src="https://i.ibb.co/Dwj9tks/Whats-App-Image-2021-05-13-at-19-13-30.jpg" alt="img" class={imgAses} />
                <span class={StyleSpan}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat fugit excepturi harum. Voluptates, nisi deleniti in eligendi fugiat necessitatibus facilis magni natus laborum dicta reprehenderit iusto quia perferendis architecto ducimus?</span>
            </div>
        </div>
        </>
    )
}
export default Asesorías;