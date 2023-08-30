// import { Gallery } from "./demo/gallery";
// import MouseMovingWrapper from "./demo/mouseMoving";
// import Root from "./demo/PlaceTree";
// import Algorithems from './algorithms';
// import CloudWrapper from './demo/cloud';
import WaveButton from './demo/wave-button';

const click = (args: any) => {
    console.log(args);
    alert('clicked')
}

export const App = () => <WaveButton text='button' onClick={click}/>