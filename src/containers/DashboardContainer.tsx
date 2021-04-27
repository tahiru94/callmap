import React, { Component } from 'react';
import axios from 'axios';

import { ICallmapRecordResponse, ICallmapRecord } from '../models/callmap-record';
import { CALLMAP_API_BASE_URL } from '../constants/constants';

interface IOwnState {
    callmapRecords: ICallmapRecordResponse[];
    error: any;
}

class DashboardContainer extends Component<{}, IOwnState> {
    public static state: IOwnState = {
        callmapRecords: [],
        error: undefined
    };

    componentDidMount = (): void => {
        this.pollForCallmapRecords();
    }

    pollForCallmapRecords = (): void => {
        axios.get(CALLMAP_API_BASE_URL)
            .then((response: any) => {
                this.setState({
                    callmapRecords: response.data
                });
            }).catch((err) => {
                this.setState({ error: err });
            });
    }
}

export default DashboardContainer;