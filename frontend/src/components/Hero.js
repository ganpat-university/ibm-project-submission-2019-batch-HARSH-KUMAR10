import Header from "./hero/Header";

export default function Hero() {
  return (
    <div className="">
      <Header />
      <HeroMainText />
    </div>
  );
}

function HeroMainText() {
  return (
    <div className="text-center py-5">
      <div
        className=""
        style={{ fontSize: 35, color: "indigo", fontWeight: 900 }}
      >
        Language Translation Platform
      </div>
      <div
        className="py-3"
        style={{ fontSize: 45, color: "brown", fontWeight: 700 }}
      >
        Looking for your Regional Lingo fix ??
      </div>
      <div style={{ fontSize: 25, color: "black" }}>
        We've got you covered as it is carefully designed to be
      </div>
      <div style={{ fontSize: 25, color: "black" }}>
        Secure, Engaging and Intuitive for your mindsy tongues.
      </div>
      <div className="row justify-content-between py-5">
        <div className="col-4 text-start">
          <img src="./assets/left_corner.jpg" alt="Regionalingo" />
        </div>
        <div
          className="col-4 row justify-content-between align-items-top"
          style={{ fontWeight: 900 }}
        >
          <div style={{ width: "47%" }}>
            <button
              className="p-2 btn"
              style={{ backgroundColor: "#aaa", width: "100%" }}
              onClick={()=>window.location.href="/translator"}
            >
              Let's Begin
            </button>
          </div>
          <div style={{ width: "47%" }}>
            <button
              className="p-2 btn"
              style={{ backgroundColor: "#aaa", width: "100%" }}
            >
              Questions ?
            </button>
          </div>
        </div>
        <div className="col-4 text-end">
          <img src="./assets/right_corner.jpg" alt="Regionalingo" />
        </div>
      </div>
    </div>
  );
}
