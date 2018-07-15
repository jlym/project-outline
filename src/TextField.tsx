import {ContentState, Editor, EditorState} from 'draft-js';

import 'draft-js/dist/Draft.css';
import * as React from 'react';


interface IProps {
    text?: string
}

interface IState {
    editorState: EditorState
}

class TextField extends React.Component<IProps, IState> {    
    constructor(props: IProps) {
        super(props);

        let editorState;
        if (props.text) {
            const contentState = ContentState.createFromText(props.text);
            editorState = EditorState.createWithContent(contentState);
        } else {
            editorState = EditorState.createEmpty();
        }
        
        this.state = {
            editorState
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
