import React from 'react';
function Contact() {
    return (  
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto mt-3">
                    
                        <h1 ClassName="text-center">Contact US </h1>
           
                    </div>
                </div>
            </div>
            <div className="container ">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form action="">
                        <div class="mb-3">
                            <label for="name" class="form-label">Full Name</label>
                            <input type="text" class="form-control" id="name" placeholder="Enter your full name" aria-describedby="emailHelp"/>
                            
                        </div>
                        <div class="mb-3">
                            <label for="mobile" class="form-label">Mobile Number</label>
                            <input type="text" class="form-control" id="mobile" placeholder="Enter your mobile number" aria-describedby="emailHelp"/>
                            
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" placeholder="Enter your Email" aria-describedby="emailHelp"/>
                            
                        </div>
                        <div class="mb-3">
                            <label for="massage" class="form-label">Massage</label>
                            <textarea className="form-control" rows='3'></textarea>
                        </div>
                        
                        <button type="submit" class="btn btn-primary">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;