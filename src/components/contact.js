import React from "react";

export default function Contact() {
  const [formStatus, setFormStatus] = React.useState("Fetch!");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Puptastic! We'll Sniff Out Your Message and Respond!");
    const { name, email, pupname, message } = e.target.elements;
    let conForm = {
      name: name.value,
      email: email.value,
      pupname: pupname.value,
      message: message.value,
    };
    console.log(conForm);
  };
  return (
    <div
      className="background pt-5 pb-5"
      style={{
        backgroundColor: "rgba(86, 217, 245, 0.4)",
      }}
    >
      <div
        className="container p-5 mt-3 mb-3"
        style={{
          border: "2px #56d9f5 solid",
        }}
      >
        <h2 className="mb-3">Adoption Paw-posal Form {"\uD83D\uDC36"}</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Fur-tastic First Name:
            </label>
            <input className="form-control" type="text" id="name" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Pup-mail Address:
            </label>
            <input className="form-control" type="email" id="email" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="pupname">
              Requested Tail-wagger's Name:
            </label>
            <input className="form-control" type="text" id="pupname" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Paws-itive Traits - Why I'm the Paw-fect Doggie Adopter:
            </label>
            <textarea className="form-control" id="message" required />
          </div>
          <button className="btn btn-info ps-4 pt-2 pb-2 pe-4" type="submit">
            {formStatus}
          </button>
        </form>
      </div>
    </div>
  );
}
