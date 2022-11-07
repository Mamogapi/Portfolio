import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <div className="text-center border-t border-fuchsia-500 p-4 text-fuchsia-400">
            <div>Designed and built by Mamogapi</div>
            <div className="text-3xl text-fuchsia-400">
                <FontAwesomeIcon icon={faCoffee} />
            </div>
        </div>
    )
}
export default Footer;
