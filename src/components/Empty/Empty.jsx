import Button from "../Button/Button"
import './Empty.css'
export default function Empty({emodji, text, text2, text3, textmini}){
    return(
        <>  
            <div className="empty">
                <h1>{emodji}</h1>
               
                <h2>{text} </h2>
                <p> </p>
                <p>{text3} <br /> {textmini} <br /> {text2} </p>

                <Button padding="15px" bradius="15px">←  Вернуться назад</Button>
            </div>
        </>
    )
}