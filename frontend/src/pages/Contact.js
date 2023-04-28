import React from "react";
import Header from "../components/hero/Header";

export default function Contact() {
  const [email, setEmail] = React.useState("");
  const [comment, setComment] = React.useState("");
  const [sendBtn, setSendBtn] = React.useState(true);
  React.useEffect(() => {
    if (email.length > 8) {
      setSendBtn(false);
    } else {
      setSendBtn(true);
    }
  });

  const sendComment = (e) => {
    e.preventDefault();
    fetch("/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, comment: comment }),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.statusCode === 106) {
          setEmail("");
          setComment("");
          alert(
            "Thank you for submiting our contact form, we will get in touch with you soon."
          );
        } else {
          alert(response.message);
        }
      });
  };
  return (
    <div>
      <Header />
      <div className="row border-top">
        <div className="col-5 px-4 py-2 border-end">
          <div className="display-6 px-2 pt-4 pb-2">Contact Us.</div>
          <div style={{ fontSize: 15 }}>
            <div className="px-2 pt-1">
              For any queries or suggestions contact us.
            </div>
            <div className="px-2 pb-1">
              Please enter your email correctly. So, we can get back to you.
            </div>
            <form action="" onSubmit={(e) => sendComment(e)}>
              <div className="py-2">
                <div className="py-2 px-2">
                  <div style={{ fontSize: 14 }} className="text-bold">
                    Enter email:
                  </div>
                  <input
                    type="email"
                    placeholder="username@domain.com"
                    className="p-1 form-control"
                    style={{ width: "70%" }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="py-2 px-2">
                  <label for="comment">Comments:</label>
                  <textarea
                    class="form-control"
                    rows="5"
                    id="comment"
                    name="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  ></textarea>
                </div>
                <div className="py-3 px-2">
                  <button
                    disabled={sendBtn}
                    type="submit"
                    className="btn btn-outline-success"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
          <div className="col-7 pt-4">
            <div className="row">
              <div className="col-6 display-6">Our Team Members.</div>
            </div>
            <div className="mt-4 py-3 px-1">
              <table class="table table-striped">
                <thead class="table-dark">
                  <tr>
                    <th>Name</th>
                    <th>Enrollment-no</th>
                    <th>Branch</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Harsh Kumar</td>
                    <td>19162121009</td>
                    <td>Big Data Analytics</td>
                    <td>harshkumar19@gnu.ac.in</td>
                  </tr>
                  <tr>
                    <td>Varsha Batheja</td>
                    <td>19162171047</td>
                    <td>Cyber Security</td>
                    <td>varshabatheja19@gnu.ac.in</td>
                  </tr>
                  <tr>
                    <td>Kushagra Malwania</td>
                    <td>19162101017</td>
                    <td>Cloud Based Applications</td>
                    <td>kushagramalwania19@gnu.ac.in</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-5 display-6 py-3">Our Mentors.</div>
            <table class="table table-striped">
              <thead class="table-dark">
                <tr>
                  <th>Name</th>
                  <th>Designation</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Dr. Hemal Shah</td>
                  <td>Internal Guide</td>
                </tr>
                <tr>
                  <td>Chetan Siddannavar</td>
                  <td>External Guide</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
}
