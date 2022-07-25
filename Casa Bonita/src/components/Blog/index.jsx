import React from "react";
import {blog,box,comment} from './blog.module.css'

const Blog = () => {

    return(
        <>
            <div className="body-contacto">
                <div className="container">
                <form>
                    <h2>Blog</h2>
                    <div className={blog}>
                        <p className={comment}>Comentarios anteriores:</p>
                        <div className={box}>
                            <p>Gian Marchetti:</p>
                            <p>¡Que buena página, me encantó!</p>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                        <label for="first">Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nombre"
                            id="first"
                        />
                        </div>
                    </div>                    
                    </div>

                    <div className="form-group" >
                    <label for="exampleFormControlTextarea1">Deja un comentario</label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Example Textarea"
                    ></textarea>
                    </div>
                    <button type="submit" className="btn btn-contacto">
                    Enviar
                    </button>
                </form>
                </div>
            </div>
    </>
    );
}

export default Blog