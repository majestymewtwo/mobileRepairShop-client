function BookRepair(){
    return(
        <div className="px-4 py-5 bg-dark text-white">
            <div className="container col-8">
                <h1 className="text-warning text-center">Book a new repair</h1>
                <form action="">
                    <div className="mb-3">
                        <label htmlFor="mobileBrand" className="form-label">Select your mobile brand : </label>
                        <select className="form-select" aria-label="Choose Mobile Brand" id="mobileBrand">
                          <option selected>Choose Brand</option>
                          <option value="Apple">Apple</option>
                          <option value="Samsung">Samsung</option>
                          <option value="Nothing">Nothing</option>
                          <option value="Google">Google</option>
                          <option value="Oneplus">Oneplus</option>
                          <option value="Vivo">Vivo</option>
                          <option value="iQOO">iQOO</option>
                          <option value="Realme">Realme</option>
                          <option value="Oppo">Oppo</option>
                          <option value="Poco">Poco</option>
                          <option value="Asus">Asus</option>
                          <option value="Micromax">Micromax</option>
                          <option value="Xiaomi">Xiaomi</option>
                          <option value="Motorola">Motorola</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="modelName" className="form-label">Enter Model Name : </label>
                        <input type="text" name="modelName" id="modelName" className="form-control"/>
                    </div>
                    <div class="mb-3">
                        <label htmlFor="repairDesc" className="form-label">Description of issue : </label>
                        <textarea className="form-control" id="repairDesc" rows="3"></textarea>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="repairType">Select your repair : </label>
                        <select className="form-select" aria-label="Choose Repair Type" id="repairType">
                            <option selected>Choose Repair</option>
                            <option value="Battery Replacement">Battery Replacement</option>
                            <option value="Display + Glass Replacement">Display + Glass Replacement</option>
                            <option value="Speaker Replacement">Speaker Replacement</option>
                            <option value="Camera Replacement">Camera Replacement</option>
                            <option value="Tempered Glass Replacement">Tempered Glass Replacement</option>
                            <option value="Button Replacement">Button Replacement</option>
                            <option value="Charging Port Replacement">Charging Port Replacement</option>
                            <option value="Body Housing Replacement">Body Housing Replacement</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="mobileImg" class="form-label">Upload Device Image : </label>
                        <input class="form-control" type="file" id="mobileImg"/>
                    </div>
                    <button type="submit" className="btn btn-outline-warning w-25 me-4">
                        Book a new repair
                    </button>
                    <button type="reset" className="btn btn-warning w-25 me-4">
                        Reset Selections
                    </button>
                </form>
            </div>
        </div>
    )
}
export default BookRepair;