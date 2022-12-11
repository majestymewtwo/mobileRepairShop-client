function ProfileComp(){
    return(
        <body class="bg-dark">
            <div class="container">
                <div class="row d-flex justify-content-center">
                    <div class="col-md-10 mt-5 pt-5">
                        <div class="row z-depth-3">
                            <div class="col-sm-4 bg-warning rounded-start">
                                <div class="card-block text-center text-white">
                                    <i class="fas fa-user-tie fa-7x mt-5"></i>
                                    <h2 class="font-weight-bold mt-4">Name</h2>
                                    <p>Customer</p>
                                    <i class="far fa-edit fa-2x mb-4"></i>
                                </div>
                            </div>
                            <div class="col-sm-8 text-white rounded-end" style={{backgroundColor:"#434242"}}>
                                <h3 class="mt-3 text-center fw-bold fs-1 text-warning">User Profile</h3>
                                <hr class="badge-warning mt-0 w-100"/>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <p class="fw-bold fs-5 text-warning">Name:</p>
                                        <h6 class="fs-4">Customer name</h6>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="fw-bold fs-5 text-warning">Phone:</p>
                                        <h6 class="fs-5">+91 9876543210</h6>

                                    </div>
                                </div>

                                 <div class="row">
                                    <div class="col-sm-6">
                                        <p class="fw-bold fs-5 text-warning">Email:</p>
                                        <h6 class="fs-4">name@gmail.com</h6>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="fw-bold fs-5 text-warning">Address:</p>
                                        <h6 class="fs-5">No.69, Cross Street, Chennai - 069</h6>

                                    </div>

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