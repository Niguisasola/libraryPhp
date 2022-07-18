
export default function BookMod({bookname, year, editorial, author, image, genre}) {
return (
    <div className="d-flex justify-content-center">
        <form className = "row g-3 w-50 p-3 d-flex justify-content-center">
            <div className = "col-md-6">
                <label for="inputEmail4" class="form-label">Book Name</label>
                <input type="text" class="form-control" id="inputEmail4" placeholder = {bookname}/>
            </div>

            <div className = "col-md-6">
                <label for="inputPassword4" className = "form-label">Year</label>
                <input type="text" className = "form-control" placeholder = {year}/>
            </div>

            <div class="col-12">
                <label for="inputAddress" className = "form-label">Publishing House</label>
                <input type="text" className = "form-control" id="inputAddress" placeholder = {editorial}/>
            </div>

            <div className ="col-12">
                <label for="inputAddress2" class="form-label">Author</label>
                <input type="text" class="form-control" placeholder = {author}/>
            </div>

            <div clasName="col-md-6">
                <label for="inputCity" className="form-label">Image Path</label>
                <input type="text" class="form-control" placeholder = {image}/>
            </div>

            <div className="col-md-4">
                <label for="inputState" className = "form-label">Genre</label>
                <select id="inputState" className = "form-select mb-5">
                    <option selected>Choose...</option>
                    <option>Políticas de igualdad</option>
                    <option>Medios de comunicación</option>
                    <option>Historia</option>
                    <option>Cultura</option>
                    <option>Ciencia y tecnología</option>
                    <option>Economía</option>
                    <option>Otro</option>
                </select>
            </div>
            
            <div className="d-flex justify-content-evenly gap-5">
                <button type="submit" className="btn btn-primary btn-lg">Update Book Info</button>
                <button type="submit" className="btn btn-primary btn-lg">Cancel</button>
            </div>
        </form>
    </div>
)
}
