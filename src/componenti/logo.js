import logoImg from './logo.jpg';
import './style.scss';

class Logo {
    constructor() {
        this.init = this.render()
    }

    render() {
        const logoDomImage     = new Image();
        logoDomImage.src       = logoImg;
        logoDomImage.className = "my-logo"
        return logoDomImage;
    }
}


export default Logo;

