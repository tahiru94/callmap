import { Component } from 'react';
import axios from 'axios';

import BaseLayout from 'components/BaseLayout';
import Dashboard from 'components/Dashboard';
import FilterPanel from 'components/FilterPanel';
import { ICallmapRecordResponse, ICallmapRecord } from 'models/callmap-record';
import { CALLMAP_API_GET_LATEST_URL } from 'constants/constants';
import { formatDate, formatPhoneNumber } from 'utils';

interface IOwnState {
    callmapRecords: ICallmapRecordResponse[];
    formattedCallmapRecords: ICallmapRecord[];
    error: any;
    priorityFilter: string;
}

class DashboardContainer extends Component<{}, IOwnState> {
    public state: IOwnState = {
        callmapRecords: [],
        formattedCallmapRecords: [],
        error: undefined,
        priorityFilter: '',
    };

    componentDidMount = (): void => {
        this.pollForCallmapRecords();
    }

    pollForCallmapRecords = (): void => {
        axios.get(CALLMAP_API_GET_LATEST_URL)
            .then((response: any) => {
                this.setState({
                    callmapRecords: response.data,
                    formattedCallmapRecords: this.transformCallmapRecordResponse(response.data),
                });
            }).catch((err) => {
                this.setState({ error: err });
            });
    }

    transformCallmapRecordResponse = (callmapRecords: ICallmapRecordResponse[]): ICallmapRecord[] => {
        const output: ICallmapRecord[] = [];

        callmapRecords.forEach((record: ICallmapRecordResponse) => {
            const mappedRecord: ICallmapRecord = {
                id: record.id,
                firstName: record.firstName,
                lastName: record.lastName,
                phoneNumber: formatPhoneNumber(record.phoneNumber),
                callNote: record.callNote,
                priority: record.priority,
                timestamp: formatDate(record.timestamp),
                version: formatDate(record.version),
                additionalNotes: record.additionalNotes
            };
            output.push(mappedRecord);
        });
        return output;
    }

    filterCallmapRecordsByPriority = (callmapRecords: ICallmapRecord[]): ICallmapRecord[] => {
        if (this.state.priorityFilter === '') {
            return callmapRecords;
        }

        return callmapRecords.filter((record: ICallmapRecord) => record.priority === this.state.priorityFilter);
    }

    handlePriorityFilterChange = (event: any) => {
        const { value } = event.target;
        this.setState({ priorityFilter: value });
    }

    handlePriorityFilterClear = (event: any) => {
        this.setState({ priorityFilter: '' });
    }

    render = (): JSX.Element => {
        return (
            <BaseLayout>
                <FilterPanel
                    priorityFilter={this.state.priorityFilter}
                    handlePriorityFilterChange={this.handlePriorityFilterChange}
                    handlePriorityFilterClear={this.handlePriorityFilterClear}
                />
                <Dashboard callmapRecords={this.filterCallmapRecordsByPriority(this.state.formattedCallmapRecords)} />
            </BaseLayout>
        );
    }
}

export default DashboardContainer;