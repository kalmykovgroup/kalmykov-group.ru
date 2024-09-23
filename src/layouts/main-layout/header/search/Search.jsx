import PropTypes from "prop-types";
import styles from './Search.module.css';
import Blackout from "../../../../components/blackout/Blackout.jsx";


import Cookies from 'universal-cookie';
import {Component} from "react";

class Search extends Component {

    cookieHistoryKey = "history";

    state = {
        cancelingBlackoutZIndex : undefined,
        history : [],
        isOpenHistory : false
    }

    constructor(props) {
        super(props);


        this.cookies = new Cookies();

        this.visBlackout = <Blackout
            background={`rgba(0, 0, 0, 0.39)`}
            setCancelingBlackoutZIndex={(zIndex) => this.setState({cancelingBlackoutZIndex : zIndex})}
            callBack={() => this.blackoutCallBack()}
            setRef={(ref) => this.blackout = ref}/>

        this.state = ({history : this.cookies.get(this.cookieHistoryKey) ?? []});

    }


    //Событие при котором происходит затемнение
     onFocusInput(){
         this.blackout().on();

         if(this.state.history.length > 0){
             this.setState({
                 isOpenHistory : true
             })
         }
    }

    //Событие при котором отменяеться затемнение
     onBlurInput(){

     }
    //Событие при котором отменяеться затемнение
    blackoutCallBack(){

        if(this.state.isOpenHistory){
            this.setState({
                isOpenHistory : false
            })
        }
    }

    searchClick(){
        const history = this.cookies.get(this.cookieHistoryKey);

        if(!history){
            this.cookies.set(this.cookieHistoryKey, [this.state.inputText]);
        }else{
            const newHistory = [this.state.inputText];

            for(let i = 0; i < history.length; ++i){
                if(history[i] === this.state.inputText) return;
                newHistory.push(history[i]);
            }
            this.cookies.set(this.cookieHistoryKey, newHistory);
            this.setHistoryState(newHistory);
        }

    }


        setHistoryState(history){
            this.setState({history : history})
        }

        setInputTextState(text){
            this.setState({inputText : text})
        }


    deleteHistory(item){

        const history = this.cookies.get(this.cookieHistoryKey);

        const newHistory = history.filter((j) => j !== item);

        this.cookies.set(this.cookieHistoryKey, newHistory);

        this.setHistoryState(newHistory);
    }

    clickHistory(text){
        this.setInputTextState(text);
    }

    render()
    {
        return (
            <>
                {this.visBlackout}
                <div style={{zIndex : this.state.cancelingBlackoutZIndex}} className={styles.searchContainer}>
                    <div className={styles.inputContainer}>
                        <input  onChange={(event) => this.setInputTextState(event.target.value)}
                                onFocus={() => this.onFocusInput()}
                                onBlur={() => this.onBlurInput()}
                                value={this.state.inputText}
                                className={styles.input} placeholder="Найти товары"/>
                    </div>

                    <button className={styles.btnSend} onClick={() => this.searchClick()}>
                        Найти
                    </button>

                    <div style={{display: !this.state.isOpenHistory || this.state.history.length === 0 ? "none" : undefined }} className={styles.historyContainer}>


                            <div className={styles.history}>
                                <ul> { this.generateHistoryItems()} </ul>
                            </div>

                    </div>
                </div>
            </>
        )
    }

    getObjects(){
        const objects = [];
        if(this.state.inputText === "" || this.state.inputText === undefined){
            for(let i = 0; i < this.state.history.length && i < 10; ++i){
                objects.push(
                    {
                        value : this.state.history[i],
                        html : this.state.history[i],
                    }
                );
            }
        }else{
            for(let i = 0; i < this.state.history.length; ++i){
                let idx = this.state.history[i].indexOf(this.state.inputText);

                if(idx !== -1){

                    const html = (
                        <>
                            {this.state.history[i].slice(0, idx)}
                            <b>
                                {this.state.history[i].slice(idx, idx + this.state.inputText.length)}
                            </b>
                            {this.state.history[i].slice(idx + this.state.inputText.length)}
                        </>
                    );
                    objects.push(
                        {
                            position: idx,
                            html : html,
                            value : this.state.history[i],
                        });
                }
            }

            objects.sort((a, b) => a.position - b.position);

        }
        return objects;

    }

        generateHistoryItems(){

                const objects = this.getObjects();

                const list = [];

                for(let i = 0; i < objects.length && i < 10; ++i){
                    list.push(
                        <li key={i} className={styles.item}>
                            <div className={styles.text}
                                 onClick={() => this.clickHistory(objects[i].value)}>
                                <span>{objects[i].html}</span>
                            </div>
                            <span className={styles.btnDeleteHistory} onClick={() => this.deleteHistory(objects[i].value)}>
                                 <svg width='12' height='12' xmlns='http://www.w3.org/2000/svg'>
                                     <path d='m6.594 5.887 5.18 5.18-.707.707-5.18-5.18-5.18 5.18L0 11.067l5.18-5.18L0 .707.707 0l5.18 5.18L11.067 0l.707.707-5.18 5.18Z'/>
                                 </svg>
                            </span>

                        </li>
                    )
                }

                return list;
            }


}


Search.propTypes = {
    blackout: PropTypes.object,
};

export default Search
