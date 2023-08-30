/* eslint-disable @typescript-eslint/no-explicit-any */
import './index.less';

type WaveButton = {
    text: string
    onClick: (...args: any[]) => void
}

const WaveButton = ({ text, onClick }: WaveButton) => {
    return (
        <div className="wave-button-wrapper">
            <div 
                className="wave-button"
                onClick={onClick}
            >{text}</div>
        </div>
    );
}

export default WaveButton;