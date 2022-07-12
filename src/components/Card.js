import "./Card.css"

function Card(props) {
    return (
        <div className="card">
            <div class="card-main">
                <div class="info">
                    <h1>{props.name}<span>26</span></h1>
                    <h1><span>{props.email}</span></h1>
                    <h1><span>{props.address}</span></h1>

                </div>
                <div class="stats">
                    <div class="stat">
                        <h1>{props.reg_no}</h1>
                        <span>Reg Number</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Card;