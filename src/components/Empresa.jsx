import './empresa.css'
import facebook from '../components/img/icons/fb.png'
import twitter from '../components/img/icons/tw.png'
import linkedin from '../components/img/icons/in.png'
import youtube from '../components/img/icons/yt.png'
import instagram from '../components/img/icons/ig.png'
import pinterest from '../components/img/icons/pinterest.png'
import github from '../components/img/icons/github.png'
import dribbble from '../components/img/icons/dribbble.png'
import figma from '../components/img/icons/figma.png'
import twitch from '../components/img/icons/twitch.png'
import spotify from '../components/img/icons/spotify.png'
import podcast from '../components/img/icons/podcast.png'
import feedly from '../components/img/icons/feedly.png'
import blog from '../components/img/icons/blog.png'

const Empresa = (props) => {
    return (
    <div>
        <div className="card" style={{width: "18rem"}}>
            <picture className='card__img'>
                <a href={props.link}><img src={props.img} className="card-img-top" alt="..." /></a>
            </picture>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                {props.pill && <button>{props.pill}</button>}
                {props.pill2 && <button>{props.pill2}</button>}
                <p className="card-text">{props.desc}</p>
                {props.redA && (
                <a href={props.redA} className="btn btn-primary">
                    <img src={linkedin} alt="" style={{ width: "10px" }} />
                </a>
                )}
                {props.redB && (
                <a href={props.redB} className="btn btn-primary">
                    <img src={twitter} alt="" style={{ width: "10px" }} />
                </a>
                )}
                {props.redC && (
                <a href={props.redC} className="btn btn-primary">
                    <img src={facebook} alt="" style={{ width: "10px" }} />
                </a>
                )}
                {props.redD && (
                <a href={props.redD} className="btn btn-primary">
                    <img src={youtube} alt="" style={{ width: "10px" }} />
                </a>
                )}
                {props.redE && (
                <a href={props.redE} className="btn btn-primary">
                    <img src={instagram} alt="" style={{ width: "10px" }} />
                </a>
                )}
                {props.redF && (
                <a href={props.redF} className="btn btn-primary">
                    <img src={pinterest} alt="" style={{ width: "10px" }} />
                </a>
                )}
                {props.redG && (
                <a href={props.redG} className="btn btn-primary">
                    <img src={github} alt="" style={{ width: "10px" }} />
                </a>
                )}
                {props.redH && (
                <a href={props.redH} className="btn btn-primary">
                    <img src={dribbble} alt="" style={{ width: "10px" }} />
                </a>
                )}
                {props.redI && (
                <a href={props.redI} className="btn btn-primary">
                    <img src={figma} alt="" style={{ width: "10px" }} />
                </a>
                )}
                {props.redJ && (
                <a href={props.redJ} className="btn btn-primary">
                    <img src={twitch} alt="" style={{ width: "10px" }} />
                </a>
                )}
                {props.redK && (
                <a href={props.redK} className="btn btn-primary">
                    <img src={spotify} alt="" style={{ width: "10px" }} />
                </a>
                )}
                {props.redL && (
                <a href={props.redL} className="btn btn-primary">
                    <img src={podcast} alt="" style={{ width: "10px" }} />
                </a>
                )}
                {props.redM && (
                <a href={props.redM} className="btn btn-primary">
                    <img src={feedly} alt="" style={{ width: "10px" }} />
                </a>
                )}
                {props.redN && (
                <a href={props.redN} className="btn btn-primary">
                    <img src={blog} alt="" style={{ width: "10px" }} />
                </a>
                )}
                <button>{props.contact}</button>
            </div>
        </div>
    </div>
    )
}

export default Empresa