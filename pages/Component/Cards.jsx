import { card } from "../../Utility/Categories_array";
const Cards = () => {
    return(
        <>
            <div className="cards">
            {
                card.map((item)=>{
                    return(
                        <div className="card_item">
                    <h2>{item.product}<br /> {item.job}</h2>
                    <p className="card_item_p">{item.para}</p>
                    <button>{item.link}</button>
                    </div>
                    )
                })
            }
            </div>
        </>
    )
}

export default Cards;