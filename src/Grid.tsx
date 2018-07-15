import * as React from 'react';
import Row from './Row';

interface IProps {    
}

interface IState {
    tasks: ITask[];
}

interface ITask {
    id: string;
    index: number;
    level: number;
    title: string;
    parent?: string;
}

class Grid extends React.Component<IProps, IState> {

    public constructor(props: IProps) {
        super(props);
        this.state = {
            tasks: [
                {
                    id: "a",
                    index: 0,
                    level: 0,
                    title: "Squad Streaming v1"
                },
                {
                    id: "b",
                    index: 0,
                    level: 1,
                    parent: "a",
                    title: "Do the backend",
                },
                {
                    id: "c",
                    index: 1,
                    level: 1,
                    parent: "a",
                    title: "Do the front end",
                },
                {
                    id: "d",
                    index: 1,
                    level: 0,
                    title: "Squad Streaming v2",
                },
            ]
        };
    }


    public render() {
        const rows = this.state.tasks.map(task => {
            return (
                <Row 
                    level={task.level} 
                    edit={false} 
                    key={task.id} 
                    title={task.title}
                    index={task.index}
                />
            );
        });
        return (
            <div>
                {rows}
                <Row level={0} edit={true} index={2} />
            </div>
        );
    }
}

export default Grid;
