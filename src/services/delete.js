import axios from "axios";

const postDelete = (id) => {
    //event.preventDefault();
    console.log('Deleting data', id)
    axios.delete(`http://localhost:5000/books/${id}`)
    .then(res =>
    console.log('Deleting data',res)
    )
}

export default postDelete;