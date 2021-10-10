import React, { useState } from 'react'

const Contact = () => {
  const [message, setMessage] = useState({})

  const sendEmail = (e) => {
    e.preventDefault()
  }

  return (
    <section id="contact" className="contact">
        <div data-aos="fade-up" data-aos-duration={700} className="container py-5">
          <img className="icon-title" src="/assets/icons/rectangles.svg" />
          <p className="text-center text-white text-title">Contact me</p>
          <p className="text-center text-green">Let's talk about everything</p>
          <p className="text-center text-gray"> Don't like forms? Send me an <a href>email.</a></p>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <form>
                <div className="row">
                  <div className="col-md-6 mb-5">
                    <input type="text" value={message.first_name} onChange={(e) => setMessage({ ...message, first_name: e.target.value })} className="form-control" placeholder="*first name" />
                  </div>
                  <div className="col-md-6 mb-5">
                    <input type="email" value={message.email} onChange={(e) => setMessage({ ...message, email: e.target.value })} className="form-control" placeholder="*email" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-5">
                    <textarea className="form-control" value={message.body} onChange={(e) => setMessage({ ...message, body: e.target.value })} rows={6} placeholder="*message" defaultValue={""} />
                  </div>
                  <div className="col-md-6 mb-5">
                    <div className="row">
                      <div className="col-md-12 mb-5">
                        <input type="text" className="form-control" value={message.subject} onChange={(e) => setMessage({ ...message, subject: e.target.value })} placeholder="*subject" />
                      </div>
                      <div className="col-md-12 mb-5">
                        <button onClick={(e) => sendEmail(e)} className="btn btn-lg float-right">Send message</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Contact
