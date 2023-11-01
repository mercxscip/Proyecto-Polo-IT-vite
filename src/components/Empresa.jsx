import "./empresa.css";
import facebook from "../components/img/icons/fb.png";
import twitter from "../components/img/icons/tw.png";
import linkedin from "../components/img/icons/in.png";
import youtube from "../components/img/icons/yt.png";
import instagram from "../components/img/icons/ig.png";
import pinterest from "../components/img/icons/pinterest.png";
import github from "../components/img/icons/github.png";
import dribbble from "../components/img/icons/dribbble.png";
import figma from "../components/img/icons/figma.png";
import twitch from "../components/img/icons/twitch.png";
import spotify from "../components/img/icons/spotify.png";
import podcast from "../components/img/icons/podcast.png";
import feedly from "../components/img/icons/feedly.png";
import blog from "../components/img/icons/blog.png";

const Empresa = (props) => {
    function recortarString(str, length) {
        if (str.length <= length) {
          return str;
        } else {
          return str.slice(0, length) + '...';
        }
      }
      const cardText = recortarString(props.desc, 110)
  return (
    <div className="">
      <div className="card">
        <picture className="card__img">
          <a href={props.link}>
            <img src={props.img} className="card-img-top" alt="..." />
          </a>
        </picture>
        <div className="card-body d-flex flex-column justify-content-between">
          <div className="row">
            <h5 className="card-title col-5">{props.name}</h5>
            {props.pill && (
              <button className="pill__btn col">{props.pill}</button>
            )}
            {props.pill2 && (
              <button className="pill__btn2 col">{props.pill2}</button>
            )}
          <p className="card-text">{cardText}</p>
          </div>
          <div className="">
            <div className="btn__box row">
              <div className="icon__box col-8">
                {props.redA && (
                  <a href={props.redA} className="">
                    <img className="icon__btn" src={linkedin} alt="" />
                  </a>
                )}
                {props.redB && (
                  <a href={props.redB} className="">
                    <img className="icon__btn" src={twitter} alt="" />
                  </a>
                )}
                {props.redC && (
                  <a href={props.redC} className="">
                    <img className="icon__btn" src={facebook} alt="" />
                  </a>
                )}
                {props.redD && (
                  <a href={props.redD} className="">
                    <img className="icon__btn" src={youtube} alt="" />
                  </a>
                )}
                {props.redE && (
                  <a href={props.redE} className="">
                    <img className="icon__btn" src={instagram} alt="" />
                  </a>
                )}
                {props.redF && (
                  <a href={props.redF} className="">
                    <img className="icon__btn" src={pinterest} alt="" />
                  </a>
                )}
                {props.redG && (
                  <a href={props.redG} className="">
                    <img className="icon__btn" src={github} alt="" />
                  </a>
                )}
                {props.redH && (
                  <a href={props.redH} className="">
                    <img className="icon__btn" src={dribbble} alt="" />
                  </a>
                )}
                {props.redI && (
                  <a href={props.redI} className="">
                    <img className="icon__btn" src={figma} alt="" />
                  </a>
                )}
                {props.redJ && (
                  <a href={props.redJ} className="">
                    <img className="icon__btn" src={twitch} alt="" />
                  </a>
                )}
                {props.redK && (
                  <a href={props.redK} className="">
                    <img className="icon__btn" src={spotify} alt="" />
                  </a>
                )}
                {props.redL && (
                  <a href={props.redL} className="">
                    <img className="icon__btn" src={podcast} alt="" />
                  </a>
                )}
                {props.redM && (
                  <a href={props.redM} className="">
                    <img className="icon__btn" src={feedly} alt="" />
                  </a>
                )}
                {props.redN && (
                  <a href={props.redN} className="">
                    <img className="icon__btn" src={blog} alt="" />
                  </a>
                )}
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
    </div>
  );
};

export default Empresa;
