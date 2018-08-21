import ApolloClient from "apollo-boost";

export interface ITask {
    id: string;
    index: number;
    level: number;
    title: string;
}

export interface IState {
    tasks: ITask[];
}

const defaults: IState = {
    tasks: [
        {
            id: "1",
            index: 1,
            level: 0,
            title: "sup",
        }
    ]
}

export const createClient = (): ApolloClient<{}> => {
    const client = new ApolloClient({
        clientState: {
            defaults,
            resolvers: {},
        },
    });
    return client;
};