import { Component } from 'inferno';
import { observer } from 'inferno-mobx';
import { Col, Container, Row } from 'inferno-bootstrap';
import { fetchContacts } from '../../services/contacts/api';
import ContactsList from '../../components/ContactsList/ContactsList';
import './Contacts.css';

class Contacts extends Component {
	async componentDidMount() {
		const retrievedContacts = await fetchContacts();

		if (Array.isArray(retrievedContacts)) {
			this.props.store.setContacts(retrievedContacts);
		}
	}

	render() {
		return (
			<Container>
				<Row>
					<Col md="8" lg="6">
						<ContactsList items={this.props.store.contacts} />
					</Col>
				</Row>
			</Container>
		);
	}
}

export default observer(Contacts);
