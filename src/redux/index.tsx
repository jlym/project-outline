import {ContentState, EditorState} from 'draft-js';
import { Action } from 'redux'

export interface ITask {
    id: string;
    index: number;
    level: number;
    title: string;
    parent?: string;
    editorState: EditorState;
}

export interface IState {
    tasks: ITask[];
}

const createContentState = (text?: string): EditorState => {
    if (text) {
        const contentState = ContentState.createFromText(text);
        return EditorState.createWithContent(contentState);
    } else {
        return EditorState.createEmpty();
    }
}

const EditTitleActionType = "EditTitle"

export interface IEditTitleAction {
    type: string;
    id: string;
    titleEditorState: EditorState;
}

const applyEditTitleAction = (state: IState, action: IEditTitleAction): IState => {
    if (action.type !== EditTitleActionType) {
        return state;
    }

    const task = state.tasks.find((t) => t.id === action.id);
    if (!task) {
        return state;
    }

    const newTask: ITask= {
        ...task,
        editorState: action.titleEditorState
    };

    const newTasks = [];
    for (const t of state.tasks) {
        if (t.id === newTask.id) {
            newTasks.push(newTask);
        } else {
            newTasks.push(t);
        }
    }

    return {
        ...state,
        tasks: newTasks
    };
}

const defaultState = (): IState => {
    return {
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
};

export const rootReducer = (state: IState | undefined, action: Action<string>): IState => {
    if (!state) {
        state = defaultState();
    }

    switch(action.type) {
        case EditTitleActionType:
            return applyEditTitleAction(state, action as IEditTitleAction);
        default:
            return state;
    }
};
