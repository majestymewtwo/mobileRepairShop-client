export default function RepairList(props){
    return (
        <div
        className="container cardComponent col-12 col-md-4 col-lg-3 border border-warning mb-4"
      >
          <div className="card bg-dark text-white">
            <div className="card-body">
              <h4 className="card-subtitle text-warning mb-3">
                Order Date : {props.orderDate}
              </h4>
              <h5 className="card-text">Phone Brand : {props.brand}</h5>
              <h5 className="card-text">Phone Model : {props.model}</h5>
              <h5 className="card-text">IMEI no : {props.imei}</h5>
              <h5 className="card-text">Repair Type : {props.repairType}</h5>
              <h5 className="card-text">Repair Status : {props.status}</h5>
            </div>
          </div>
        </div>
    )
}