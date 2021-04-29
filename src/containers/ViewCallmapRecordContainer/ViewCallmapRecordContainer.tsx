import { Component } from 'react';
import axios from 'axios';

import BaseLayout from 'components/BaseLayout';
import ViewCallmapRecord from 'components/ViewCallmapRecord';
import { CALLMAP_API_OPERATION_BY_ID_URL } from 'constants/constants';
import { ICallmapRecordResponse, ICallmapRecord } from 'models/callmap-record';

interface IOwnState {
    callmapRecord: ICallmapRecordResponse;
    mappedCallmapRecord: ICallmapRecord;
}

class ViewCallmapRecordContainer extends Component<{}, IOwnState> {
    public state: IOwnState = {
        callmapRecord: {
            id: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            callNote: '',
            priority: '',
            additionalNotes: [],
            version: '',
            timestamp: ''
        }, mappedCallmapRecord: {
            id: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            callNote: '',
            priority: '',
            additionalNotes: []
        }
    }

    componentDidMount = (): void => {
        const { pathname } = window.location;
        const callmapRecordId = pathname.replace(/\/view\//, '');

        axios.get(`${CALLMAP_API_OPERATION_BY_ID_URL}/${callmapRecordId}`)
            .then((response: any) => {
                this.setState({
                    callmapRecord: response.data[0],
                    mappedCallmapRecord: this.transformCallmapRecordResponse(response.data)
                });
            }).catch((_) => { });
    }

    transformCallmapRecordResponse = (callmapRecord: ICallmapRecordResponse): ICallmapRecord => {
        const mappedRecord: ICallmapRecord = {
            id: callmapRecord.id,
            timestamp: callmapRecord.timestamp,
            version: callmapRecord.version,
            firstName: callmapRecord.firstName,
            lastName: callmapRecord.lastName,
            phoneNumber: callmapRecord.phoneNumber,
            callNote: callmapRecord.callNote,
            priority: callmapRecord.priority,
            additionalNotes: callmapRecord.additionalNotes
        };

        return mappedRecord;
    }

    render = (): JSX.Element => {
        return (
            <BaseLayout>
                <ViewCallmapRecord callmapRecord={this.state.mappedCallmapRecord} />
            </BaseLayout>
        );
    }
}

export default ViewCallmapRecordContainer;