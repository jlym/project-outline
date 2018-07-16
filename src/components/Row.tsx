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

        const selection = this.props.task.editorState.getSelection();
        const edit = selection.getHasFocus();
        return (
            <div
                style={{
                    border: edit ? "1px solid rgb(230, 230, 230)" : "",
                    display: "grid",
                    gridTemplateColumns: "max-content 1fr minmax(50px, max-content)",
                    marginLeft: this.props.task.level * 20,
                }}
            >
                <div 
                    style = {{
                        borderRight: edit ? "1px solid rgb(230, 230, 230)" : "",
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
                    <TextField editorState={this.props.task.editorState} taskID={this.props.task.id}/>
                </div>
                <div 
                    style = {{
                        borderLeft: edit ? "1px solid rgb(230, 230, 230)" : "",
                        padding: "10px"
                    }}
                />
            </div>
        );
    }
}

export default Row;