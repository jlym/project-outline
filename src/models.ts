import {EditorState} from 'draft-js';

export interface ITask {
    id: string;
    index: number;
    level: number;
    title: string;
    parent?: string;
    editorState: EditorState;
}
