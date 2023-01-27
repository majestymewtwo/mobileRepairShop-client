import "./Main.css";

export default function RepairStatus(props){
    return(
        <div className="text-white px-lg-5">
            <h5 className="d-flex card-text">
                Order Date : 
                <h5 className="mx-2 text-warning">{props.date}</h5>
            </h5>
            <h5 className="card-text">Phone Brand : {props.brand}</h5>
            <h5 className="card-text">Phone Model : {props.model}</h5>
            <h5 className="card-text">IMEI no : {props.imei}</h5>
            <h5 className="card-text">Repair Type : {props.repairType}</h5>
            <div className="d-flex flex-column flex-lg-row text-center justify-content-center py-5 text-white">
            <span className="d-flex flex-column mx-lg-5">
                {props.order && (
                    <div className="bg-success circle mx-auto mx-lg-5">
                        <h1>1</h1>
                    </div>
                )}
                {!props.order && (
                    <div className="bg-warning circle mx-auto mx-lg-5">
                        <h1>1</h1>
                    </div>
                )}
                <h4 className="mx-auto mt-2">Order Placed</h4>
            </span>
            <span className="d-flex flex-column mx-lg-5">
                {props.collect && (
                    <div className="bg-success circle mx-auto mx-lg-5">
                        <h1>2</h1>
                    </div>
                )}
                {!props.collect && (
                    <div className="bg-warning circle mx-auto mx-lg-5">
                        <h1>2</h1>
                    </div>
                )}
                <h4 className="mx-auto mt-2">Phone Collected</h4>
            </span>
            <span className="d-flex flex-column mx-lg-5">
                {props.repair && (
                    <div className="bg-success circle mx-auto mx-lg-5">
                        <h1>3</h1>
                    </div>
                )}
                {!props.repair && (
                    <div className="bg-warning circle mx-auto mx-lg-5">
                        <h1>3</h1>
                    </div>
                )}
                <h4 className="mx-auto mt-2">Repair in Progress</h4>
            </span>
            <span className="d-flex flex-column mx-lg-5">
                {props.deliver && (
                    <div className="bg-success circle mx-auto mx-lg-5">
                        <h1>4</h1>
                    </div>
                )}
                {!props.deliver && (
                    <div className="bg-warning circle mx-auto mx-lg-5">
                        <h1>4</h1>
                    </div>
                )}
                <h4 className="mx-auto mt-2">Dispatched for Delivery</h4>
            </span>
        </div>
        </div>
    )
}