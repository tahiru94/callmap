import { Component } from 'react';
import axios from 'axios';

import BaseLayout from '../../components/BaseLayout';
import Dashboard from '../../components/Dashboard';
import { ICallmapRecordResponse, ICallmapRecord } from '../../models/callmap-record';
import { CALLMAP_API_GET_LATEST_URL } from '../../constants/constants';

interface IOwnState {
    callmapRecords: ICallmapRecordResponse[];
    error: any;
}

class DashboardContainer extends Component<{}, IOwnState> {
    public state: IOwnState = {
        callmapRecords: [],
        error: undefined
    };

    componentDidMount = (): void => {
        this.pollForCallmapRecords();
    }

    pollForCallmapRecords = (): void => {
        axios.get(CALLMAP_API_GET_LATEST_URL)
            .then((response: any) => {
                this.setState({
                    callmapRecords: response.data
                });
            }).catch((err) => {
                this.setState({ error: err });
            });
    }

    transformCallmapRecordResponse = (): ICallmapRecord[] => {
        const { callmapRecords } = this.state;
        const output: ICallmapRecord[] = [];

        callmapRecords.forEach((record: ICallmapRecordResponse) => {
            const mappedRecord: ICallmapRecord = {
                id: record.id,
                firstName: record.firstName,
                lastName: record.lastName,
                phoneNumber: record.phoneNumber,
                callNote: record.callNote,
                priority: record.priority,
                additionalNotes: record.additionalNotes
            };
            output.push(mappedRecord);
        });

        return output;
    }

    render = (): JSX.Element => {
        return (
            <BaseLayout>
                <Dashboard callmapRecords={this.state.callmapRecords} />
            </BaseLayout>
        );
    }
}

export default DashboardContainer;