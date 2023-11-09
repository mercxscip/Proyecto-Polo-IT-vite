import "./empresa.css";
import facebook from "../components/img/icons/fb.png";
import twitter from "../components/img/icons/tw.png";
import linkedin from "../components/img/icons/in.png";
import youtube from "../components/img/icons/yt.png";
import instagram from "../components/img/icons/ig.png";

const Empresa = (props) => {
  function recortarString(str, length) {
    if (str.length <= length) {
      return str;
    } else {
      return str.slice(0, length) + "...";
    }
  }
  const cardText = recortarString(props.desc, 110);
  return (
      <div className={`card ${props.name == "cardEmpty" && "opacity-0 d-none d-sm-block"}`}>
        <picture className="card__img">
          <a href={props.link}>
            <img src={props.img} className="card-img-top" alt="..." />
          </a>
        </picture>
        <div className="card-body d-flex flex-column justify-content-between">
          <div className="row">
            <h5 className="card-title col-5">{props.name}</h5>
            {props.pills &&
              props.pills.map((pill, index) => {
                const colorPillList = ["pill__btn", "pill__btn2"];
                return (
                  <button
                    key={`${props.name}-${pill}`}
                    className={`${colorPillList[index]} col`}
                  >
                    {pill}
                  </button>
                );
              })}
            <p className="card-text">{cardText}</p>
          </div>
          <div className="">
            <div className="btn__box row">
              <div className="icon__box col-8">
                {props.socialMedia.linkedin &&<a href={props.socialMedia.linkedin} className="">
                  <img className="icon__btn" src={linkedin} alt="" />
                </a>}
                {props.socialMedia.facebook&&<a href={props.socialMedia.facebook} className="">
                  <img className="icon__btn" src={facebook} alt="" />
                </a>}
                {props.socialMedia.twitter&&<a href={props.socialMedia.twitter} className="">
                  <img className="icon__btn" src={twitter} alt="" />
                </a>}
                {props.socialMedia.instagram&&<a href={props.socialMedia.instagram} className="">
                  <img className="icon__btn" src={instagram} alt="" />
                </a>}
                {props.socialMedia.youtube&&<a href={props.socialMedia.youtube} className="">
                  <img className="icon__btn" src={youtube} alt="" />
                </a>}
              </div>
              {props.contact && (
                <a className="col-4" href={props.contact}>
                  <button className="contact__btn">Contáctanos</button>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
  );
};

export default Empresa;
