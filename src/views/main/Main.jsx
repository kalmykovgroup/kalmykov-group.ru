
import styles from './Main.module.css'
import Slider from "./slider/Slider.jsx";

function Main() {



    return (
       <div className={styles.main}>
           <div className={styles.sliderContainer}>
               <Slider/>
           </div>

       </div>
    )
}

export default Main
