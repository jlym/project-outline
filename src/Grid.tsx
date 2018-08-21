import {ContentState, EditorState} from 'draft-js';
import gql from 'graphql-tag';
import * as React from 'react';
import { Query } from 'react-apollo';
import {ITask} from './models';
import Row from './Row';

interface IProps {    
}

interface IState {
    tasks: ITask[];
}

const GetTasks = gql`
    {
        tasks @client {
            id
            index
            level
            title
        }
    }
`;

const createContentState = (text?: string): EditorState => {
    if (text) {
        const contentState = ContentState.createFromText(text);
        return EditorState.createWithContent(contentState);
    } else {
        return EditorState.createEmpty();
    }
}

class Grid extends React.Component<IProps, IState> {

    public constructor(props: IProps) {
        super(props);
        this.state = {
            tasks: [
                {
                    editorState: createContentState("Squad Streaming v1"),
                    id: "a",
                    index: 0,
                    level: 0,
                    title: "Squad Streaming v1",
                },
                {
                    editorState: createContentState("Do the backend"),
                    id: "b",
                    index: 0,
                    level: 1,
                    parent: "a",
                    title: "Do the backend",
                },
                {
                    editorState: createContentState("Do the front end"),
                    id: "c",
                    index: 1,
                    level: 1,
                    parent: "a",
                    title: "Do the front end",
                },
                {
                    editorState: createContentState("Squad Streaming v2"),
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
                    task={task}
                    edit={false} 
                    key={task.id}
                />
            );
        });
        return (
            <Query query={GetTasks}>
                {({ data }) => (

                    data.
                    rows
                )}                
            </Query>
        );
    }
}

export default Grid;
