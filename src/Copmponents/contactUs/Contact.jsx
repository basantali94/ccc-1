import './Contact.css'
export default function Contact() {
  return (
    <div className='container'>
<div className='row'>
    <div className='col-6'>
    <form className='form'>
  <div className="form-group mt-5 mb-3">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
  </div>
  <div className="form-group mb-3">
    <label htmlFor="exampleInputPassword1">phone</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="phone" />
  </div>
 
  <div className="form-group mb-3">
    <label htmlFor="exampleInputPassword1">Message</label>
    <textarea type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Your message" style={{resize:'none' , height:'150px'}} />
  </div>
 
  <button type="submit" className="qq" >Submit</button>
</form>
    </div>
</div>
    </div>
  )
}
