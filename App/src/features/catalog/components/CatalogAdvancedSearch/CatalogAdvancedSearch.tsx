import React,{useRef} from "react";
import { useNavigate } from "react-router-dom";


import './CatalogAdvancedSearch.css';

export const CatalogAdvancedSearch:React.FC = () => {

    const navigate = useNavigate();

    const isbnRef = useRef<HTMLInputElement>(null);
    const titleRef = useRef<HTMLInputElement>(null);
    const authorRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLInputElement>(null);
    const subjectRef = useRef<HTMLInputElement>(null);
    const genreRef = useRef<HTMLInputElement>(null);

    const search = () => {
        const params = new URLSearchParams();

        const fields: [string, React.RefObject<HTMLInputElement | null>][] = [
            ["barcode", isbnRef],
            ["title", titleRef],
            ["author", authorRef],
            ["description", descriptionRef],
            ["subject", subjectRef],
            ["genre", genreRef],
        ];

        fields.forEach(([name, ref]) => {
            const value = ref.current?.value.trim();
            if(value){
                params.append(name, value);
            }
        });

        const query = params.toString();
        navigate(query ? `/catalog?${query}` : "/catalog");
    }

    return (
        <div className="catalog-advanced-search">
            <h2>Advanced Book Search</h2>
            <p>Fill in as many fields to narrow your search results</p>
            <form className="catalog-advanced-search-form" onSubmit={(e) => { e.preventDefault(); search(); }}>
                <div className="catalog-advanced-form-input-group">
                    <p>ISBN</p>
                    <input id="isbn" className="catalog-advanced-form-input" placeholder={"ISBN"} ref={isbnRef}/>
                </div>
                <div className="catalog-advanced-form-input-group">
                    <p>Title</p>
                    <input id="title" className="catalog-advanced-form-input" placeholder={"Title"} ref={titleRef}/>
                </div>
                <div className="catalog-advanced-form-input-group">
                    <p>Author</p>
                    <input id="author" className="catalog-advanced-form-input" placeholder={"Author"} ref={authorRef}/>
                </div>
                <div className="catalog-advanced-form-input-group">
                    <p>Description</p>
                    <input id="description" className="catalog-advanced-form-input" placeholder={"Description"} ref={descriptionRef}/>
                </div>
                <div className="catalog-advanced-form-input-group">
                    <p>Subject</p>
                    <input id="subject" className="catalog-advanced-form-input" placeholder={"Subject"} ref={subjectRef}/>
                </div>
                <div className="catalog-advanced-form-input-group">
                    <p>Genre</p>
                    <input id="genre" className="catalog-advanced-form-input" placeholder={"Genre"} ref={genreRef}/>
                </div>
            </form>
            <button className="catalog-advanced-search-button" onClick={search}>Search</button>
        </div>
    )

}