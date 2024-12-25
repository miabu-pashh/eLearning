import { useState } from "react";
import "./styles.css";

function Feedback() {
  const [modal, setModal] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    feedback: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (
      data.name.length !== 0 &&
      data.email.length !== 0 &&
      data.feedback.length !== 0
    ) {
      console.log();
      console.log(data);
    } else {
      alert("Enter data first");
    }
  };
  return (
    <div className="App">
      {!modal && (
        <button
          className="btn btn-red close-btn"
          onClick={() => setModal((value) => !value)}
        >
          Toogle Feedback
        </button>
      )}
      <div>
        {modal && (
          <form className="feedback" onSubmit={HandleSubmit}>
            <button
              className="close-btn-form"
              onClick={() => setModal((value) => !value)}
            >
              X
            </button>
            <div className="m1-rem">
              <input
                placeholder="Name"
                name="name"
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <div className="m1-rem">
              <input
                placeholder="Email"
                name="email"
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <div className="m1-rem">
              <input
                placeholder="Feedback"
                name="feedback"
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <button className="btn btn-green" onClick={HandleSubmit}>
              Submit feedback
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Feedback;