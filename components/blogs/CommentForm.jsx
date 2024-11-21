"use client";

export default function CommentForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="row g-4">
        <div className="col-lg-6">
          <div className="form-clt">
            <span>Your Name*</span>
            <input type="text" name="name" id="name" placeholder="Your Name" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-clt">
            <span>Your Email*</span>
            <input
              type="text"
              name="email"
              id="email2"
              placeholder="Your Email"
            />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-clt">
            <span>Message*</span>
            <textarea
              name="message"
              id="message"
              placeholder="Write Message"
              defaultValue={""}
            />
          </div>
        </div>
        <div className="col-lg-6">
          <button type="submit" className="theme-btn">
            post comment
            <i className="fa-solid fa-arrow-right-long" />
          </button>
        </div>
      </div>
    </form>
  );
}
