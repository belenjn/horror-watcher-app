import { CSSProperties } from "react";
import { ClipLoader } from "react-spinners"
import "./CheckAuth.css"


export const CheckAuth = () => {

  const container: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    height: "100vh"
  }

  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "#75CA51",
  };


  return (
    <div className="spinner__background" style={container}>
         <ClipLoader
            aria-label="Loading..."
            size={200}
            loading={true}
            cssOverride={override}
          />
    </div>
  )
}
