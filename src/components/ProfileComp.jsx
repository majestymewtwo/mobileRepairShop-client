function ProfileComp(props){
    return(
        <body class="bg-dark">
            <div class="container">
                <div class="row d-flex justify-content-center">
                    <div class="col-10 my-5 pt-5">
                        <div class="row z-depth-3">
                            <div class="col-sm-4 bg-warning rounded-start">
                                <div class="card-block text-center text-white">
                                    <i class="fas fa-user-tie fa-7x mt-5"></i>
                                    <h2 class="font-weight-bold mt-4">{props.name}</h2>
                                    <p>Customer</p>
                                    <i class="far fa-edit fa-2x mb-4"></i>
                                </div>
                            </div>
                            <div class="col-sm-8 text-white rounded-end" style={{backgroundColor:"#434242"}}>
                                <h3 class="mt-3 text-center fw-bold fs-1 text-warning">User Profile</h3>
                                <hr class="badge-warning mt-0 w-100"/>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <p class="fw-bold fs-5 text-warning">First Name :</p>
                                        <h6 class="fs-4">{props.firstName}</h6>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="fw-bold fs-5 text-warning">Last Name :</p>
                                        <h6 class="fs-5">{props.lastName}</h6>

                                    </div>
                                </div>

                                 <div class="row mb-2">
                                    <div class="col-lg-6">
                                        <p class="fw-bold fs-5 text-warning">Email :</p>
                                        <h6 class="fs-4">{props.email}</h6>
                                    </div>
                                    <div class="col-lg-6">
                                        <p class="fw-bold fs-5 text-warning">Phone :</p>
                                        <h6 class="fs-5">{props.contactNo}</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <p class="fw-bold fs-5 text-warning">Address :</p>
                                    <p class="fs-5">{props.address}</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </body>
    )
}

export default ProfileComp;