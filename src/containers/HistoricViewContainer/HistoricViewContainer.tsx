import { Component } from 'react';
import axios from 'axios';

import BaseLayout from '../../components/BaseLayout';
import HistoricDashboard from '../../components/HistoricDashboard';
import { ICallmapRecordResponse, ICallmapRecord } from '../../models/callmap-record';
import { CALLMAP_API_BASE_URL } from '../../constants/constants';

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
        axios.get(CALLMAP_API_BASE_URL)
            .then((response: any) => {
                console.log('response', response);
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
        console.log('output', output);
        return output;
    }

    render = (): JSX.Element => {
        return (
            <BaseLayout>
                <HistoricDashboard callmapRecords={this.state.callmapRecords} />
            </BaseLayout>
        );
    }
}

export default DashboardContainer;