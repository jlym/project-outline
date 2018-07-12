import * as React from 'react';
import Row from './Row';

class Grid extends React.Component {

    public render() {
        return (
            <div>
                <Row level={0} edit={false}/>
                <Row level={1} edit={true}/>
                <Row level={2} edit={false}/>
            </div>
        );
    }
}

export default Grid;
