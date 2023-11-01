import { useCallback } from "react";

type ColorPickerProps = {
    test?: string
}

const ColorPicker = ({
    test
}: ColorPickerProps) => {

    const colorBlocks = useCallback(
        () => {
            return [
                {
                    key: 'pink',
                    color: '#FF8DBC'
                },
                {
                    key: 'skyblue',
                    color: 'skyblue'
                }
            ];
        }, []
    );

    return (
        <div className="color-picker-wrapper">


        </div>
    );
}

export default ColorPicker;