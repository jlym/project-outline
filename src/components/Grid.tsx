import * as React from 'react';
import { connect } from 'react-redux'

import {ITask} from '../models';
import { IState } from '../redux';
import Row from './Row';

interface IProps {    
    tasks: ITask[];
}

class Grid extends React.Component<IProps> {

    public render() {
        const rows = this.props.tasks.map(task => {
            return (
                <Row 
                    task={task}
                    edit={false} 
                    key={task.id}
                />
            );
        });
        return (
            <div>
                {rows}
            </div>
        );
    }
}

const mapStateToProps = (state: IState): IProps => {
    return ({
        tasks: state.tasks,
    });
};

export default connect(mapStateToProps)(Grid);
