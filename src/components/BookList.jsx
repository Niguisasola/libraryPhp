import React, {useState, useEffect} from "react";
import BookItem from "./BookItem";
import "../styles/liststyles.css";
import axios from "axios";

function BookList (){
    const [booksApi, setBooksApi] = useState([]);
    useEffect (()=>{
        axios.get("http://localhost:5000/books")
        .then ((res)=> {
            setBooksApi(res.data)
        })

    },[])

    return(
        <div className="d-flex justify-content-center">
            <div className="contentBooks ">
                <div className="flex-wrap row row-cols-1 row-cols-md-4">
                {
                    booksApi.map((item,index)=>(
                        <BookItem key={index} titol={item.titol} autoria={item.autoria} isbn={item.isbn}/>
                    ))
                }
                </div>
            </div>
        </div>
    );
}

export default BookList

  /*fetch("http://localhost:5000/books")
        .then (response=>response.json())
        .then (data=>setBooksApi(data))
        */