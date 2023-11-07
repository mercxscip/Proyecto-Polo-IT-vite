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
      return str.slice(0, length) + "...";
    }
  }
  const cardText = recortarString(props.desc, 110);
  const socialCard = Object.keys(props.socialMedia);
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
    </div>
  );
};

export default Empresa;
