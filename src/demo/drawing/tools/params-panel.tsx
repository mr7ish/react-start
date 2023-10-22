import { Triangle } from "@/demo/svg";
import { useState } from "react";

type ParamsPanelProps = {
    initStatus?: boolean
}

const ParamsPanel = ({
    initStatus = true,
}: ParamsPanelProps) => {

    const [open, setOpen] = useState<boolean>(initStatus);

    return (
        <div
            className="params-panel-wrapper"
            style={{
                left: open ? '16px' : '-200px'
            }}
        >
            <div 
                className="toggle-btn"
                onClick={() => {
                    setOpen(!open);
                }}
            >
                <Triangle initRotate={open ? -90 : 90} filledColor="#b8b8b8"/>
            </div>
        
        </div>
    );
}

export default ParamsPanel;