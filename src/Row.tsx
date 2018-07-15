import * as React from 'react';
import TextField from './TextField';
import { getOutlineNumber } from './utils/utils';

export interface IProps {
    level: number;
    index: number;
    edit: boolean;
    title?: string;
}

class Row extends React.Component<IProps> {    
    public render() {
        const num = getOutlineNumber(this.props.index) + ".";

        return (
            <div
                style={{
                    border: this.props.edit ? "1px solid rgb(230, 230, 230)" : "",
                    display: "grid",
                    gridTemplateColumns: "max-content 1fr minmax(50px, max-content)",
                    marginLeft: this.props.level * 20,
                }}
            >
                <div 
                    style = {{
                        borderRight: this.props.edit ? "1px solid rgb(230, 230, 230)" : "",
                        padding: "10px"
                    }}
                >
                    {num}
                </div>
                <div 
                    style = {{
                        padding: "10px"
                    }}
                >
                    <TextField text={this.props.title}/>
                </div>
                <div 
                    style = {{
                        borderLeft: this.props.edit ? "1px solid rgb(230, 230, 230)" : "",
                        padding: "10px"
                    }}
                >
                    <TextField/>
                </div>
            </div>
        );
    }
}

export default Row;