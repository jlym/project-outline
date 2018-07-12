import * as React from 'react';
import TextField from './TextField';

export interface IProps {
    level: number
    edit: boolean
}

class Row extends React.Component<IProps> {    
    public render() {
        const num = "1.";

        return (
            <div
                style={{
                    border: this.props.edit ? "1px solid rgb(230, 230, 230)" : "",
                    display: "grid",
                    gridTemplateColumns: "30px 1fr 30px",
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
                    <TextField/>
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