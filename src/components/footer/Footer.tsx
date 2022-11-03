import { STRINGS } from "../../utils/strings"
import "./Footer.css"

export const Footer = () => {
  return (
    <div className="footer__container">
      <span className="footer__container--name">{STRINGS.footerName}</span>
      <span className="footer__container--rights">{STRINGS.footerRights}</span>
      <div className="footer__container--icons">
      <div className="github"/>
      <div className="linkedin"/>
      <div className="twitter"/>
      </div>
    </div>
  )
}
