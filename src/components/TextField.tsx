import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';
import * as React from 'react';
import { connect } from 'react-redux'
import { Dispatch } from 'redux';
import {IEditTitleAction} from '../redux';

interface IPublicProps {
    editorState: EditorState;
    taskID: string;
}

interface IReduxProps {
    editState: (id: string, editorState: EditorState) => IEditTitleAction;
}

type IProps = IPublicProps & IReduxProps;

class TextFieldComponent extends React.Component<IProps> {    
    public render() {
        return <Editor editorState={this.props.editorState} onChange={this.onChange} />;
    }

    private onChange = (editorState: EditorState) => {
        this.props.editState(this.props.taskID, editorState);
    }
}

const mapDispatchToProps = (dispatch: Dispatch<IEditTitleAction>): IReduxProps => ({
    editState: (id: string, editorState: EditorState) => dispatch({
        id,
        titleEditorState: editorState,
        type: "EditTitle"
    })
})

export default connect(null, mapDispatchToProps)(TextFieldComponent);
