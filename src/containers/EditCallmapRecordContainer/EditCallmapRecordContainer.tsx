import { ChangeEventHandler, Component } from 'react';
import axios from 'axios';

import BaseLayout from '../../components/BaseLayout';
import EditCallmapRecord from '../../components/EditCallmapRecord';
import { ICallmapRecord } from '../../models/callmap-record';
import { CALLMAP_API_OPERATION_BY_ID_URL } from '../../constants/constants';

interface IOwnState {
    originalCallmapRecord: ICallmapRecord;
    newCallmapRecord: ICallmapRecord;
    additionalNote: string;
    redirect: string | undefined,
}

class EditCallmapRecordContainer extends Component<{}, IOwnState> {
    public state: IOwnState = {
        originalCallmapRecord: {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            callNote: '',
            priority: '',
            additionalNotes: [],
        },
        newCallmapRecord: {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            callNote: '',
            priority: '',
            additionalNotes: []
        },
        additionalNote: '',
        redirect: undefined,
    }

    componentDidMount = (): void => {
        const { pathname } = window.location;
        const callmapRecordId = pathname.replace(/\/edit\//, '');

        axios.get(`${CALLMAP_API_OPERATION_BY_ID_URL}/${callmapRecordId}`)
            .then((response) => {
                const data = response.data[0];
                const { firstName, lastName, phoneNumber, callNote, priority, additionalNotes } = data;

                this.setState({
                    originalCallmapRecord: {
                        id: callmapRecordId,
                        firstName,
                        lastName,
                        phoneNumber,
                        callNote,
                        priority,
                        additionalNotes
                    }
                });
            }).catch((_) => { });
    }

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
                additionalNotes: [
                    ...prevState.newCallmapRecord.additionalNotes!,
                    prevState.additionalNote,
                ]
            }
        }), () => {
            this.setState({ additionalNote: '' });
        });
    }

    handleFormSubmit = (event: any) => {
        axios.put(`${CALLMAP_API_OPERATION_BY_ID_URL}/${this.state.originalCallmapRecord.id}`, {
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
                <EditCallmapRecord
                    originalCallmapRecord={this.state.originalCallmapRecord}
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

export default EditCallmapRecordContainer;