import {Editor, EditorState} from 'draft-js';


import 'draft-js/dist/Draft.css';
import * as React from 'react';

interface IProps {
    
}

interface IState {
    editorState: EditorState
}

class TextField extends React.Component<IProps, IState> {    
    constructor(props: IProps) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty()
        };
    }

    public render() {
        return <Editor editorState={this.state.editorState} onChange={this.onChange} />;
    }

    private onChange = (editorState: EditorState) => {
        this.setState({ editorState });
    }
}

export default TextField;
