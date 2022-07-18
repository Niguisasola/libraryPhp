import '../styles/newBookItem.css'
import { Link } from "react-router-dom";

function NewBookItem(){
return(
<>
    <div className="d-flex justify-content-center">
        <div className="container-sm w-50 p-3 mt-4">
            <p className="titleForm">Please fill the form to create a new book</p>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label text-white">Book Name</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label text-white">Author</label>
                <input type="text" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label text-white">Year</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label text-white">Publishing House</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label text-white">Genre</label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Select the genre</option>
                    <option value="1">Ciencia y tecnología</option>
                    <option value="2">Cultura</option>
                    <option value="3">Economía</option>
                    <option value="4">Historia</option>
                    <option value="5">Medios de comunicación</option>
                    <option value="6">Políticas de igualdad</option>
                </select>
            </div>
            <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label text-white">Image URL</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <button type="submit" class="btn btn-light m-3">Submit</button>
            <Link to = "/principal">
            <button class="btn btn-light m-3">Cancel</button>
            </Link>
        </div>
    </div>
</>
)
}

export default NewBookItem;