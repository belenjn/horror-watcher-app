import { CSSProperties } from "react";
import { ClipLoader } from "react-spinners"
import "./CheckAuth.css"


export const CheckAuth = () => {

  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "#75CA51",
  };

  return (
    <div className="spinner__background">
         <ClipLoader
            aria-label="Loading..."
            size={200}
            loading={true}
            cssOverride={override}
          />
    </div>
  )
}
