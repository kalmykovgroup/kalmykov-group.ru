import './Search.css'
import {useOutletContext} from "react-router-dom";



const Search = () => {
    const outletContext = useOutletContext();

    function handleOnFocus() {
        outletContext.setDarkening("block");
    }

    function handleBlur() {
        outletContext.setDarkening("none");
    }

    return (<>

            <div className="searchContainer">
                <div className="inputContainer">
                    <input  onFocus={handleOnFocus}
                            onBlur={handleBlur}
                            className="input" placeholder="Найти товары"/>
                </div>

                <button className="btnSend">
                    Найти
                </button>
            </div>
    </>

    )
}

export default Search
