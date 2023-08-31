import { UseGenerateDatas, UseMath } from '@/utils';
import './index.less';
import { useEffect, useRef } from 'react';

const CloudWrapper = () => {
    return (
        <div className="cloud-bg">
            <div className="cloud-wrapper">
                <Cloud />
            </div>
        </div>
    );
}

const Cloud = () => {
    const cloudRef = useRef<HTMLDivElement | null>(null);
    const timer = useRef<NodeJS.Timer>();
    const timersId: number[] = [];

    useEffect(() => {
        console.log(cloudRef.current);

        if (cloudRef.current) {
            timer.current = intervalGenerate(cloudRef.current, 50);
            console.log(`timer => `, timer.current);
            timersId.push(timer.current as unknown as number);
            setTimeout(() => {
                console.log('clear', timersId);
                timersId.map(timer => clearInterval(timer));
            }, 30000);
        }
    }, []);

    return (
        <div className="cloud" ref={cloudRef}></div>
    );
}


const getCombines = () => [...UseGenerateDatas.getLetters(), ...UseGenerateDatas.getNumbers(10, 'both')];


const getOneLetter = () => {
    const combines = getCombines();
    return combines[UseMath.getRandom(combines.length - 1)];
}

const randomStyle = () => ({
    left: `${UseMath.getRandom(310)}px`,
    fontSize: `${UseMath.getRangeRandom(12, 24)}px`,
    animationDuration: `${UseMath.getRangeRandom(1, 3)}s`
})

const randomImg = (random: number) => {
    // console.log(random);
    const imgs = [
        '../../../public/tn_cat.png',
        '../../../public/tn_dog.png',
        '../../../public/tn_other.png'
    ];
    return imgs[random];
}

const generateImg = () => {
    const img = document.createElement('img');
    img.src = randomImg(UseMath.getRandom(2));
    img.classList.add('drops-img');
    return img;
}

const generateTypes = (random: number) => {
    const types = [
        'letters',
        'imgs'
    ];
    return types[random];
}

const generateDrops = () => {
    const drops = document.createElement('div');
    drops.classList.add('drops-text');
    const type = generateTypes(UseMath.getRandom(1));
    type === 'letters' ? drops.textContent = getOneLetter() + '' : drops.appendChild(generateImg());
    Object.assign(drops.style, randomStyle());
    return drops;
}

const removeDrops = (el: HTMLDivElement) => {
    setTimeout(() => {
        el.remove();
    }, 2000);
}

const intervalGenerate = (parentNode: HTMLDivElement, times = 1000) => {
    return setInterval(() => {
        const drops = generateDrops();
        parentNode.appendChild(drops);
        removeDrops(drops);
    }, times);
}

// const CloudDrops = forwardRef((props, ref) => {
//     return (
//         <div
//             className="drops-text"
//             style={randomStyle()}
//             {...props}
//             ref={ref as LegacyRef<HTMLDivElement>}
//         >
//             {getOneLetter()}
//         </div>
//     );
// })
// const CloudDrops = () => {
//     return (
//         <div
//             className="drops-text"
//             style={randomStyle()}
//         >
//             {getOneLetter()}
//         </div>
//     );
// }

export default CloudWrapper;