function Map(){
    return(
        <div className="px-4 py-5 bg-dark">
            <h3 className="text-warning fw-bold text-center fs-1 mb-5">LOCATE US</h3>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.181780331478!2d80.0552184147705!3d12.960217090863365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8dc18fb40e67153a!2sDepartment%20Of%20Computer%20Science%20And%20Engineering!5e0!3m2!1sen!2sin!4v1670749987761!5m2!1sen!2sin" className="w-100 rounded-4" allowFullScreen style={{height:"400px"}} title="locatesUs"></iframe>
            </div>
        </div>
    )
}
export default Map;