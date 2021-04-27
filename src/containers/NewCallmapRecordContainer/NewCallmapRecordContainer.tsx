import { ChangeEventHandler, Component } from 'react';
import axios from 'axios';

import BaseLayout from 'components/BaseLayout';
import NewCallmapRecord from 'components/NewCallmapRecord';
import { ICallmapRecord } from 'models/callmap-record';
import { CALLMAP_API_BASE_URL } from 'constants/constants';

interface IOwnState {
    newCallmapRecord: ICallmapRecord;
    additionalNote: string;
    redirect: string | undefined,
}

class NewCallmapRecordContainer extends Component<{}, IOwnState> {
    public state: IOwnState = {
        newCallmapRecord: {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            priority: 'Low',
            callNote: '',
            additionalNotes: [],
        },
        additionalNote: '',
        redirect: undefined,
    };

    onTextFieldChange = (event: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = (event as any).currentTarget;
        this.setState((prevState) => ({
            ...prevState,
            newCallmapRecord: {
                ...prevState.newCallmapRecord,
                [name]: value
            }
        }));
    }

    onSelectFieldChange = (event: any) => {
        const { name, value } = event.target;
        this.setState((prevState) => ({
            ...prevState,
            newCallmapRecord: {
                ...prevState.newCallmapRecord,
                [name]: value
            }
        }));
    }

    onAddAdditionalNote = (event: any) => {
        this.setState((prevState) => ({
            ...prevState,
            newCallmapRecord: {
                ...prevState.newCallmapRecord,
                additionalNotes: [...prevState.newCallmapRecord.additionalNotes!, prevState.additionalNote],
            }
        }), () => {
            this.setState({ additionalNote: '' });
        });
    }

    handleFormSubmit = (event: any) => {
        axios.post(CALLMAP_API_BASE_URL, {
            ...this.state.newCallmapRecord
        }).then((response: any) => {
            this.setState({
                newCallmapRecord: {
                    firstName: '',
                    lastName: '',
                    phoneNumber: '',
                    priority: 'Low',
                    callNote: '',
                    additionalNotes: [],
                },
                additionalNote: '',
                redirect: '/'
            })
        }).catch((_) => { });
    }

    handleFormCancel = (event: any) => {
        this.setState({ redirect: '/' });
    }

    render = (): JSX.Element => {
        return (
            <BaseLayout>
                <NewCallmapRecord
                    newCallmapRecord={this.state.newCallmapRecord}
                    additionalNote={this.state.additionalNote}
                    redirect={this.state.redirect}
                    onTextFieldChange={this.onTextFieldChange}
                    onSelectFieldChange={this.onSelectFieldChange}
                    onAddAdditionalNote={this.onAddAdditionalNote}
                    handleFormSubmit={this.handleFormSubmit}
                    handleFormCancel={this.handleFormCancel}
                />
            </BaseLayout>
        );
    }
}

export default NewCallmapRecordContainer;