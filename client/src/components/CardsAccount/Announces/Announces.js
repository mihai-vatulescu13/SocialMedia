import './announces.css'

const Card = ({name, price, description, img}) => {
    return (
        <div className="card-Container">
            <div className="imgContainer">
                <img src={img} alt=""/>
            </div>
            <div className="Info-Container">
              <div className="Elements-Width">
                <p>Title: <span className="TitleCard">{name}</span></p>
                <p>Description: {description}</p>
                <p>Price: <span className="Price">{price}</span></p>
              </div>
            </div>
            <div className="Settings-Container">
                <p>Remove annouces</p>
                <p>Modify annouces</p>
            </div>
        </div>
    )
}

export default Card
