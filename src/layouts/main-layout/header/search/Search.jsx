import './Search.css'

function Search() {

    return (
        <div className="searchContainer">
            <div className="inputContainer">
                <input className="input" placeholder="Найти товары"/>
            </div>

            <button className="btnSend">
               Найти
            </button>
        </div>


    )
}

export default Search
