import { CSSProperties } from 'react';
import './index.less';

export const Moon = () => {
    return (
        <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13130" width="200" height="200">
            <path d="M530.432 945.3568A434.176 434.176 0 0 1 491.52 78.6432a40.96 40.96 0 0 1 26.0096 70.8608 261.7344 261.7344 0 0 0-83.5584 192.3072 266.24 266.24 0 0 0 266.24 266.24 262.3488 262.3488 0 0 0 191.6928-82.944s0 1.024 0 0a40.96 40.96 0 0 1 70.656 24.576 434.176 434.176 0 0 1-432.128 395.6736z m0 0" p-id="13131" fill="#FFD500"></path>
        </svg>
    );
}

export const Sun = () => {
    return (
        <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="740" width="200" height="200">
            <path d="M501.48 493.55m-233.03 0a233.03 233.03 0 1 0 466.06 0 233.03 233.03 0 1 0-466.06 0Z" fill="#FFD500" p-id="741"></path>
            <path d="M501.52 185.35H478.9c-8.28 0-15-6.72-15-15V87.59c0-8.28 6.72-15 15-15h22.62c8.28 0 15 6.72 15 15v82.76c0 8.28-6.72 15-15 15zM281.37 262.76l-16 16c-5.86 5.86-15.36 5.86-21.21 0l-58.52-58.52c-5.86-5.86-5.86-15.36 0-21.21l16-16c5.86-5.86 15.36-5.86 21.21 0l58.52 58.52c5.86 5.86 5.86 15.35 0 21.21zM185.76 478.48v22.62c0 8.28-6.72 15-15 15H88c-8.28 0-15-6.72-15-15v-22.62c0-8.28 6.72-15 15-15h82.76c8.28 0 15 6.72 15 15zM270.69 698.63l16 16c5.86 5.86 5.86 15.36 0 21.21l-58.52 58.52c-5.86 5.86-15.36 5.86-21.21 0l-16-16c-5.86-5.86-5.86-15.36 0-21.21l58.52-58.52c5.85-5.86 15.35-5.86 21.21 0zM486.41 794.24h22.62c8.28 0 15 6.72 15 15V892c0 8.28-6.72 15-15 15h-22.62c-8.28 0-15-6.72-15-15v-82.76c0-8.28 6.72-15 15-15zM706.56 709.31l16-16c5.86-5.86 15.36-5.86 21.21 0l58.52 58.52c5.86 5.86 5.86 15.36 0 21.21l-16 16c-5.86 5.86-15.36 5.86-21.21 0l-58.52-58.52c-5.86-5.85-5.86-15.35 0-21.21zM802.17 493.59v-22.62c0-8.28 6.72-15 15-15h82.76c8.28 0 15 6.72 15 15v22.62c0 8.28-6.72 15-15 15h-82.76c-8.28 0-15-6.72-15-15zM717.24 273.44l-16-16c-5.86-5.86-5.86-15.36 0-21.21l58.52-58.52c5.86-5.86 15.36-5.86 21.21 0l16 16c5.86 5.86 5.86 15.36 0 21.21l-58.52 58.52c-5.86 5.86-15.35 5.86-21.21 0z" fill="#FFD500" p-id="742"></path>
        </svg>
    );
}

export const Stylus = ({
    isFilled = false,
    polygonFillColor = '#000',
    rectFillColor = '#000',
    borderFillColor = '#000',
    borderUnfilledColor = '#000'
}) => {
    return (
        !isFilled ?
            <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11399" width="200" height="200">
                <path fill={borderUnfilledColor} d="M866.133333 836.266667c-6.4-4.266667-136.533333-102.4-445.866666-25.6-162.133333 40.533333-245.333333 21.333333-245.333334 21.333333-10.666667-2.133333-23.466667 4.266667-25.6 14.933333-2.133333 10.666667 4.266667 23.466667 14.933334 25.6 2.133333 0 25.6 6.4 68.266666 6.4 44.8 0 110.933333-6.4 196.266667-27.733333 285.866667-70.4 407.466667 17.066667 407.466667 17.066667 8.533333 6.4 23.466667 6.4 29.866666-4.266667 10.666667-6.4 8.533333-21.333333 0-27.733333zM153.6 755.2c2.133333 0 2.133333 2.133333 4.266667 2.133333h2.133333c2.133333 0 2.133333 0 4.266667 2.133334H170.666667l187.733333-44.8c2.133333 0 6.4-2.133333 8.533333-4.266667l484.266667-384-21.333333-27.733333 21.333333 27.733333c19.2-14.933333 21.333333-40.533333 6.4-59.733333l-74.666667-93.866667c-14.933333-19.2-40.533333-21.333333-59.733333-6.4l100.266667 125.866667-83.2 66.133333-74.666667-93.866667 83.2-66.133333L725.333333 166.4l-484.266666 384c-4.266667 2.133333-6.4 4.266667-6.4 6.4l-85.333334 170.666667v2.133333c0 2.133333 0 2.133333-2.133333 4.266667V740.266667c0 6.4 0 6.4 2.133333 8.533333 0 2.133333 2.133333 2.133333 2.133334 4.266667l2.133333 2.133333z m117.333333-174.933333l364.8-288 74.666667 93.866666-366.933333 288-138.666667 32 66.133333-125.866666z" p-id="11400"></path>
            </svg>
            :
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 580.92 577.87">
                <g
                    style={{
                        fill: borderFillColor
                    }}
                >
                    <path d="M743.15,638.35c-5.12-3.42-109.23-81.92-356.7-20.48-129.7,32.42-196.26,17.06-196.26,17.06-8.54-1.7-18.78,3.42-20.48,12s3.41,18.77,11.94,20.48c1.71,0,20.48,5.12,54.62,5.12,35.83,0,88.74-5.12,157-22.19C622,594,719.25,664,719.25,664c6.83,5.12,18.78,5.12,23.9-3.42,8.53-5.12,6.82-17.06,0-22.18Zm-570-64.86c1.71,0,1.71,1.71,3.41,1.71h1.71c1.71,0,1.71,0,3.41,1.71h5.12L337,541.07c1.71,0,5.12-1.71,6.82-3.42L731.2,230.45l-17.07-22.18,17.07,22.18c15.36-11.94,17.07-32.42,5.12-47.78l-59.73-75.1c-12-15.35-32.43-17.06-47.79-5.12L709,203.15l-66.56,52.91L582.72,181l66.56-52.9-18.77-25.61L243.09,409.65q-5.11,2.57-5.12,5.12L169.71,551.31V553c0,1.71,0,1.71-1.71,3.42v5.12c0,5.12,0,5.12,1.71,6.82,0,1.71,1.7,1.71,1.7,3.42ZM267,433.55l291.84-230.4,59.73,75.09L325,508.64l-110.93,25.6Zm0,0" transform="translate(-168 -94.61)" />
                    <polygon
                        style={{
                            fill: polygonFillColor
                        }}
                        points="98.99 338.93 46.08 439.62 157.01 414.03 450.56 183.62 390.83 108.53 98.99 338.93"
                    />
                    <rect
                        style={{
                            fill: rectFillColor
                        }}
                        x="603.35" y="144.08" width="85.03" height="95.95" transform="translate(-147.24 348.97) rotate(-38.48)"
                    />
                </g>
            </svg>
    );
}

export const Draw = ({
    isFilled = true,
    circleFillColor = '#fff',
    polygonFillColor = '#000',
    borderFillColor = '#000',
    borderUnfilledColor = '#000'
}) => {

    return (
        !isFilled ?
            <svg
                className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8581" data-spm-anchor-id="a313x.search_index.0.i15.5bb93a817CqtiG" width="200" height="200"
            >
                <path fill={borderUnfilledColor} d="M928.1 512.4c-0.5-53.5-11.5-105.5-32.7-154.5-21-48.4-51-91.8-89.1-129.1-38.1-37.2-82.5-66.4-132-86.9-51.1-21.1-105.4-31.8-161.4-31.8-55.9 0-110.2 10.7-161.4 31.8-49.4 20.4-93.8 49.6-132 86.9-38.2 37.3-68.2 80.7-89.1 129.1-21.7 50.2-32.8 103.4-32.8 158.3s11 108.2 32.8 158.3c21 48.4 51 91.8 89.1 129.1 38.1 37.2 82.5 66.4 132 86.9 51.1 21.1 105.4 31.8 161.4 31.8 18.5 0 37.2-1.2 55.4-3.6 15.4-1.4 36.9-10.1 49.1-30.5 13.6-22.8 12.1-52.8-4.6-89-10.3-22.3-10-43.4 0.8-58 17.7-23.8 62.4-32.6 122.7-24.1h0.4c0.1 0 0.3 0 0.4 0.1 0.3 0 0.5 0.1 0.8 0.1h0.1c7.2 0.8 14.3 1.2 21.3 1.2 40.3 0 76.4-13.3 105.4-39.2 40.4-36 63.6-94.4 63.6-160.3v-1.1-2c0.1-1 0-2.3-0.2-3.5zM822.2 631.7c-20.4 18.2-46.6 25.6-77.6 22.1-42.7-5.9-79.9-4.7-110.7 3.7-30.8 8.4-55.5 24.2-71.6 45.7-12.9 17.3-20.1 38.3-20.9 60.6-0.7 20.3 3.9 41.8 13.3 62.3 8.2 17.8 8.1 26.3 7.8 28.9-0.2 0.1-0.3 0.1-0.5 0.1l-1.2 0.2c-15.7 2.1-31.8 3.1-47.8 3.1-193.7 0-351.2-153.5-351.2-342.1S319.4 174.2 513 174.2c193.7 0 351.2 153.5 351.2 342.1 0 1.1 0.1 2.3 0.2 3.4-0.1 47.4-15.5 88.2-42.2 112z" p-id="8582" data-spm-anchor-id="a313x.search_index.0.i24.5bb93a817CqtiG"></path>
                {/* <path fill="#000" d="M928.1 512.4c-0.5-53.5-11.5-105.5-32.7-154.5-21-48.4-51-91.8-89.1-129.1-38.1-37.2-82.5-66.4-132-86.9-51.1-21.1-105.4-31.8-161.4-31.8-55.9 0-110.2 10.7-161.4 31.8-49.4 20.4-93.8 49.6-132 86.9-38.2 37.3-68.2 80.7-89.1 129.1-21.7 50.2-32.8 103.4-32.8 158.3s11 108.2 32.8 158.3c21 48.4 51 91.8 89.1 129.1 38.1 37.2 82.5 66.4 132 86.9 51.1 21.1 105.4 31.8 161.4 31.8 18.5 0 37.2-1.2 55.4-3.6 15.4-1.4 36.9-10.1 49.1-30.5 13.6-22.8 12.1-52.8-4.6-89-10.3-22.3-10-43.4 0.8-58 17.7-23.8 62.4-32.6 122.7-24.1h0.4c0.1 0 0.3 0 0.4 0.1 0.3 0 0.5 0.1 0.8 0.1h0.1c7.2 0.8 14.3 1.2 21.3 1.2 40.3 0 76.4-13.3 105.4-39.2 40.4-36 63.6-94.4 63.6-160.3v-1.1-2c0.1-1 0-2.3-0.2-3.5zM822.2 631.7c-20.4 18.2-46.6 25.6-77.6 22.1-42.7-5.9-79.9-4.7-110.7 3.7-30.8 8.4-55.5 24.2-71.6 45.7-12.9 17.3-20.1 38.3-20.9 60.6-0.7 20.3 3.9 41.8 13.3 62.3 8.2 17.8 8.1 26.3 7.8 28.9-0.2 0.1-0.3 0.1-0.5 0.1l-1.2 0.2c-15.7 2.1-31.8 3.1-47.8 3.1-193.7 0-351.2-153.5-351.2-342.1S319.4 174.2 513 174.2c193.7 0 351.2 153.5 351.2 342.1 0 1.1 0.1 2.3 0.2 3.4-0.1 47.4-15.5 88.2-42.2 112z" p-id="8582" data-spm-anchor-id="a313x.search_index.0.i24.5bb93a817CqtiG"></path> */}
                <path fill="#00B1FF" d="M259 464.1m-57.5 0a57.5 57.5 0 1 0 115 0 57.5 57.5 0 1 0-115 0Z" p-id="8583" data-spm-anchor-id="a313x.search_index.0.i10.5bb93a817CqtiG"></path>
                <path fill="#7BD721" d="M408.1 301.2m-57.5 0a57.5 57.5 0 1 0 115 0 57.5 57.5 0 1 0-115 0Z" p-id="8584" data-spm-anchor-id="a313x.search_index.0.i14.5bb93a817CqtiG"></path>
                <path fill="#FF781D" d="M614.1 300.2m-57.5 0a57.5 57.5 0 1 0 115 0 57.5 57.5 0 1 0-115 0Z" p-id="8585" data-spm-anchor-id="a313x.search_index.0.i18.5bb93a817CqtiG"></path>
                <path fill="#e8989a" d="M750.9 441.8m-57.5 0a57.5 57.5 0 1 0 115 0 57.5 57.5 0 1 0-115 0Z" p-id="8586" data-spm-anchor-id="a313x.search_index.0.i19.5bb93a817CqtiG"></path>
            </svg >
            :
            <svg
                className="icon"
                style={{
                    fill: borderFillColor
                }}
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 664.59 649.76"
            >
                <polygon
                    style={{
                        fill: polygonFillColor
                    }}
                    points="97.12 144.84 239.12 45.84 413.2 40.84 559.12 136.84 633.12 295.84 598.12 430.84 407.12 470.84 390.12 611.84 197.12 598.84 57.12 449.84 20.12 274.84 97.12 144.84"
                />
                <g>
                    <path d="M381.28,47A317.13,317.13,0,0,0,355.12-76.6a325,325,0,0,0-71.28-103.28,332.46,332.46,0,0,0-105.6-69.52A336.57,336.57,0,0,0,49.12-274.84,337.17,337.17,0,0,0-80-249.4a331.54,331.54,0,0,0-105.6,69.52A322.48,322.48,0,0,0-256.88-76.6,317.23,317.23,0,0,0-283.12,50a315.58,315.58,0,0,0,26.24,126.64A325,325,0,0,0-185.6,280,332.46,332.46,0,0,0-80,349.48,336.57,336.57,0,0,0,49.12,374.92,340.78,340.78,0,0,0,93.44,372c12.32-1.12,29.52-8.08,39.28-24.4,10.88-18.24,9.68-42.24-3.68-71.2-8.24-17.84-8-34.72.64-46.4,14.16-19,49.92-26.08,98.16-19.28h.32a.48.48,0,0,1,.32.08c.24,0,.4.08.64.08h.08a154.23,154.23,0,0,0,17,1c32.24,0,61.12-10.64,84.32-31.36,32.32-28.8,50.88-75.52,50.88-128.24V49.8a11.39,11.39,0,0,0-.16-2.8Zm-84.72,95.44c-16.32,14.56-37.28,20.48-62.08,17.68-34.16-4.72-63.92-3.76-88.56,3s-44.4,19.36-57.28,36.56a85.8,85.8,0,0,0-16.72,48.48C71.36,264.36,75,281.56,82.56,298c6.56,14.24,6.48,21,6.24,23.12a.72.72,0,0,1-.4.08l-1,.16A289.61,289.61,0,0,1,49.2,323.8c-155,0-281-122.8-281-273.68s126.08-273.68,281-273.68,281,122.8,281,273.68c0,.88.08,1.84.16,2.72-.08,37.92-12.4,70.56-33.76,89.6Zm0,0" transform="translate(283.12 274.84)" />
                </g>
                <path style={{
                    fill: circleFillColor
                }} d="M-200,8.36a46,46,0,0,0,46,46,46,46,0,0,0,46-46,46,46,0,0,0-46-46,46,46,0,0,0-46,46Zm0,0" transform="translate(283.12 274.84)" />
                <path style={{
                    fill: circleFillColor
                }} d="M-80.72-122a46,46,0,0,0,46,46,46,46,0,0,0,46-46,46,46,0,0,0-46-46,46,46,0,0,0-46,46Zm0,0" transform="translate(283.12 274.84)" />
                <path style={{
                    fill: circleFillColor
                }} d="M84.08-122.76a46,46,0,0,0,46,46,46,46,0,0,0,46-46,46,46,0,0,0-46-46,46,46,0,0,0-46,46Zm0,0" transform="translate(283.12 274.84)" />
                <path style={{
                    fill: circleFillColor
                }} d="M193.52-9.48a46,46,0,0,0,46,46,46,46,0,0,0,46-46,46,46,0,0,0-46-46,46,46,0,0,0-46,46Zm0,0" transform="translate(283.12 274.84)" />
            </svg>
    );
}

export const Line = ({
    borderColor = '#000'
}) => {
    return (
        <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 57.6">
            <g
                style={{
                    fill: borderColor
                }}
            >
                <path d="M996.48,355.24H369.28a6.42,6.42,0,0,0-6.4,6.4v44.8a6.42,6.42,0,0,0,6.4,6.4h627.2a6.42,6.42,0,0,0,6.4-6.4v-44.8a6.42,6.42,0,0,0-6.4-6.4Zm0,0" transform="translate(-362.88 -355.24)" />
            </g>
        </svg>
    );
}

export const Arrow = ({
    borderColor = '#000'
}) => {
    return (
        <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 430.08 430.08">
            <path
                style={{
                    fill: borderColor
                }}
                d="M828.81,285.06v157h68.27V169H624v68.27H781l-314,314,47.78,47.79Zm0,0" transform="translate(-467 -169)"
            />
        </svg>
    );
}

export const Rectangle = ({
    isFilled = false,
    polygonFillColor = '#000',
    borderFillColor = '#000',
    borderUnfilledColor = '#000'
}) => {
    return (
        <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750.93 614.4">
            <rect
                style={{
                    fill: isFilled ? polygonFillColor : 'none'
                }}
                x="13.45" y="28.19" width="712" height="554.67"
            />
            <g>
                <path
                    style={{
                        fill: isFilled ? borderFillColor : borderUnfilledColor
                    }}
                    d="M1015.15,691.88H349.55a42.72,42.72,0,0,1-42.67-42.67V120.15a42.72,42.72,0,0,1,42.67-42.67h665.6a42.71,42.71,0,0,1,42.66,42.67V649.21a42.71,42.71,0,0,1-42.66,42.67ZM349.55,111.61a8.54,8.54,0,0,0-8.54,8.54V649.21a8.54,8.54,0,0,0,8.54,8.54h665.6a8.54,8.54,0,0,0,8.53-8.54V120.15a8.53,8.53,0,0,0-8.53-8.54Zm0,0" transform="translate(-306.88 -77.48)"
                />
            </g>
        </svg>
    );
}

export const Ellipse = ({
    isFilled = false,
    ellipseFillColor = '#000',
    borderFillColor = '#000',
    borderUnfilledColor = '#000'
}) => {
    return (
        <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 714.08 595.04">
            <path
                style={{
                    fill: isFilled ? ellipseFillColor : 'none'
                }}
                d="M1010.72,385.78c0,142.54-146.73,272-327.72,272S343.44,526.54,343.44,384,502,113.78,683,113.78,1010.72,243.24,1010.72,385.78Z" transform="translate(-324.88 -86.88)"
            />
            <g>
                <path
                    style={{
                        fill: isFilled ? borderFillColor : borderUnfilledColor
                    }}
                    d="M681.92,134.48A370,370,0,0,1,805,155.12c37.12,13.12,70.4,31.76,98.8,55.44,56.4,47,87.44,108.72,87.44,173.84s-31,126.8-87.44,173.84c-28.4,23.68-61.68,42.32-98.8,55.44a377.53,377.53,0,0,1-246.24,0c-37.12-13.12-70.4-31.76-98.8-55.44-56.4-47-87.52-108.72-87.52-173.84s31-126.8,87.44-173.84c28.4-23.68,61.68-42.32,98.8-55.44a370.82,370.82,0,0,1,123.2-20.64m0-47.6c-197.2,0-357,133.2-357,297.52s159.84,297.52,357,297.52,357-133.2,357-297.52S879.12,86.88,681.92,86.88Zm0,0" transform="translate(-324.88 -86.88)"
                />
            </g>
        </svg>
    );
}

export const Triangle = ({
    initRotate = 0,
    borderColor = '#000',
    filledColor = '#000'
}) => {
    return (
        <svg
            className="icon"
            style={{
                rotate: `${initRotate}deg`,
                transition: 'all .5s'
            }}
            viewBox="0 0 1805 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1074" width="200" height="200"
        >
            <path
                style={{
                    fill: filledColor
                }}
                d="M1187.13126833 638.32834615L890.69513714 341.89221494a30.83059104 30.83059104 0 0 0-43.62528597-1e-8L550.63372034 638.32834615A30.83059104 30.83059104 0 0 0 572.36928666 691.04865645h593.02641498a30.83059104 30.83059104 0 0 0 21.7355667-52.7203103z" p-id="1075"
            >
            </path>
            <path
                style={{
                    fill: borderColor
                }}
                d="M1165.39570164 706.46395178H572.36928666a46.24588638 46.24588638 0 0 1-42.54621537-28.51829653 45.16681577 45.16681577 0 0 1 10.01994198-50.40801617L836.27914446 331.10150825a46.24588638 46.24588638 0 0 1 65.36085268 0l296.43613083 296.43613083a46.24588638 46.24588638 0 0 1-32.68042633 78.92631271zM868.95957082 348.36663927a15.41529533 15.41529533 0 0 0-10.94486001 4.4704353L561.57857997 649.27320577a15.41529533 15.41529533 0 0 0 10.7907067 26.36015497h593.02641497a15.41529533 15.41529533 0 0 0 14.18207179-9.55748317 15.41529533 15.41529533 0 0 0-3.23721179-16.80267179L880.67519514 352.83707458a15.41529533 15.41529533 0 0 0-11.71562432-4.47043531z" p-id="1076"
            >
            </path>
        </svg>
    )
}

export const Shrink = ({
    filledColor = '#000'
}) => {
    return (
        <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2841" width="200" height="200">
            <path
                style={{
                    fill: filledColor
                }}
                d="M866.8672 257.024H157.184c-30.208 0-54.6304-22.8864-54.6304-51.2 0-28.2624 24.4736-51.2 54.6304-51.2H866.816c30.208 0 54.6304 22.9376 54.6304 51.2 0 28.3136-24.4736 51.2-54.6304 51.2z m0 307.2H157.184c-30.208 0-54.6304-22.8864-54.6304-51.2 0-28.2624 24.4736-51.2 54.6304-51.2H866.816c30.208 0 54.6304 22.9376 54.6304 51.2 0 28.3136-24.4736 51.2-54.6304 51.2z m0 307.2H157.184c-30.208 0-54.6304-22.8864-54.6304-51.2 0-28.2624 24.4736-51.2 54.6304-51.2H866.816c30.208 0 54.6304 22.9376 54.6304 51.2 0 28.3136-24.4736 51.2-54.6304 51.2z" p-id="2842">
            </path>
        </svg>
    );
}

export const Transparent = ({
    filledColor = '#000',
    originalStyle = {}
}: { filledColor: string, originalStyle?: CSSProperties }) => {
    return (
        <svg
            style={originalStyle}
            className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6250" width="200" height="200">
            <path
                style={{
                    fill: filledColor,
                }}
                d="M768 199.111111h-512a56.888889 56.888889 0 0 0-56.888889 56.888889v512a56.888889 56.888889 0 0 0 56.888889 56.888889h512a56.888889 56.888889 0 0 0 56.888889-56.888889v-512a56.888889 56.888889 0 0 0-56.888889-56.888889z m0 227.555556h-170.666667v170.666666h170.666667v170.666667h-170.666667v-170.666667h-170.666666v170.666667h-170.666667v-170.666667h170.666667v-170.666666h-170.666667v-170.666667h170.666667v170.666667h170.666666v-170.666667h170.666667z" p-id="6251">
            </path>
        </svg>
    );
}

export const Solid = ({
    filledColor = '#000',
    originalStyle = {}
}: { filledColor: string, originalStyle?: CSSProperties }) => {
    return (
        <svg
            style={originalStyle}
            className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10287" width="200" height="200">
            <path
                style={{
                    fill: filledColor,
                }}
                d="M1024 127.937531v767.625183c0 70.665495-57.272035 127.937531-127.937531 127.93753h-767.625183c-70.665495 0-127.937531-57.272035-127.93753-127.93753v-767.625183c0-70.665495 57.272035-127.937531 127.93753-127.937531h767.625183c70.665495 0 127.937531 57.272035 127.937531 127.937531z" p-id="10288">
            </path>
        </svg>
    );
}

export const DashLine = ({
    filledColor = '#000',
    originalStyle = {}
}) => {
    return (
        <svg
            style={originalStyle}
            className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4066" width="200" height="200">
            <path
                style={{
                    fill: filledColor
                }}
                d="M112 476h160v72H112zM432 476h160v72H432zM752 476h160v72H752z" p-id="4067">
            </path>
        </svg>
    );
}

export const SolidLine = ({
    filledColor = '#000',
    originalStyle = {}
}) => {
    return (
        <svg
            style={originalStyle}
            className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5033" width="200" height="200">
            <path
                style={{
                    fill: filledColor
                }}
                d="M48.837 452.53h926.326v78.768H48.837z" p-id="5034">
            </path>
        </svg>
    );
}

export const DottedLine = ({
    filledColor = '#000',
    originalStyle = {}
}) => {
    return (
        <svg
            style={originalStyle}
            className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11265" width="200" height="200">
            <path
                style={{
                    fill: filledColor
                }}
                d="M84.8 468.8H43.2C17.6 468.8 0 486.4 0 512s17.6 43.2 43.2 43.2h43.2C110.4 555.2 128 537.6 128 512s-17.6-43.2-43.2-43.2zM384 468.8h-43.2c-25.6 0-43.2 17.6-43.2 43.2s17.6 43.2 43.2 43.2H384c25.6 0 43.2-17.6 43.2-43.2s-17.6-43.2-43.2-43.2zM683.2 468.8H640c-25.6 0-43.2 17.6-43.2 43.2s17.6 43.2 43.2 43.2h43.2c25.6 0 43.2-17.6 43.2-43.2-1.6-25.6-17.6-43.2-43.2-43.2zM980.8 468.8h-43.2c-25.6 0-43.2 17.6-43.2 43.2s17.6 43.2 43.2 43.2h43.2c25.6 0 43.2-17.6 43.2-43.2s-17.6-43.2-43.2-43.2z" p-id="11266">
            </path>
        </svg>
    );
}
