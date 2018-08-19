import * as React from 'react';
import {ITask} from '../models';
import { getOutlineNumber } from '../utils/utils';
import TextField from './TextField';

export interface IProps {
    task: ITask;
    edit: boolean;    
}

class Row extends React.Component<IProps> {    
    public render() {
        const num = getOutlineNumber(this.props.task.index) + ".";

        return (
            <div
                style={{
                    border: this.props.edit ? "1px solid rgb(230, 230, 230)" : "",
                    display: "grid",
                    gridTemplateColumns: "max-content 1fr minmax(50px, max-content)",
                    marginLeft: this.props.task.level * 20,
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
                    <TextField editorState={this.props.task.editorState}/>
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