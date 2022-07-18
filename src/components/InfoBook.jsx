import "../assets/data.json"
import "../styles/detailBook.css"

function InfoBook () {
return(
    <>
    <div className="bookCard d-flex justify-content-center ">
        <div className="detailsBook card mb-3 w-50 h-auto mt-5 ">
            <div className="row g-0">
                <div className="col-md-4 d-flex align-items-center">
                    <img src="https://images-na.ssl-images-amazon.com/images/I/819SKuVK7bL.jpg" className="img-fluid rounded-start" alt="Feminismo para principiantes"></img>
                </div>
                
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title"> Feminismo para principiantes</h5>
                        <p className="card-text">¿Quienes eran las sufragistas? ¿De dónde sale el feminismo radical? ¿Por que se habla de marxismo y feminismo como de un matrimonio mal avenido? ¿Por que el feminismo ha sido vilipendiado y ridiculizado? ¿Por que las feministas han sido tratadas de "marimachos", feas o mujeres sexualmente insatisfechas? ¿Cómo y dónde surge la expresión "violencia de genero"? ¿En que consiste la masculinidad tradicional? A partir de estos interrogantes, y otros muchos, Nuria Varela repasa tres siglos de hacer y deshacer el mundo, de alumbrar teorías, propuestas y liderazgos fascinantes, y narra la aventura de una agitación social que ningún otro movimiento ha conseguido mantener durante tanto tiempo.</p>
                        <p className="card-text"><small className="text-muted">Autora: Nuria Varela</small></p>
                    </div>
                </div>
            </div>  
        </div>
    </div>                            
    </>
)
}

export default InfoBook;

