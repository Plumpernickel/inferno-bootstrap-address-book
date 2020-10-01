import { observer } from 'inferno-mobx';
import { Link, Redirect } from 'inferno-router';
import {
	Card,
	CardHeader,
	CardImg,
	CardBody,
	CardTitle,
	CardLink,
	CardText,
	Col,
	Container,
	Row, ListGroup, ListGroupItem
} from 'inferno-bootstrap';
import { formatName } from '../../utils';
import BackspaceIcon from '../../assets/icons/backspace-fill.svg';
import CellphoneIcon from '../../assets/icons/phone-fill.svg';
import TelephoneIcon from '../../assets/icons/telephone-fill.svg';

export default observer(({ match: { params: { id } }, store: { contacts } }) => {
	const contact = contacts[id];

	return contact && Object.keys(contact).length ? (
		<Container className="mx-0">
			<Row>
				<Col md="8" lg="6">
					<Card>
						<CardHeader className="d-flex align-items-center">
							<Link to="/" className="text-decoration-none mr-3">
								<CardLink>
									<img width="30" height="30" src={BackspaceIcon} alt="Backspace icon" />
								</CardLink>
							</Link>
							<CardTitle className="m-0">{formatName(contact.name)}</CardTitle>
						</CardHeader>
						<CardImg top width="100%" src={contact.picture.large} alt="Contact picture" />
						<CardBody>
							<CardText>
                <ListGroup className="list-group-horizontal justify-content-center">
                  <ListGroupItem>
                    <img width="20" height="20" src={CellphoneIcon} alt="Cellphone icon" />
								    <span className="align-middle">{` ${contact.cell}`}</span>
                  </ListGroupItem>
                  <ListGroupItem>
                    <img width="20" height="20" src={TelephoneIcon} alt="Telephone icon" />
    								<span className="align-middle">{` ${contact.phone}`}</span>
                  </ListGroupItem>
                </ListGroup>
							</CardText>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</Container>
	) : (
		<Redirect to="/" />
	);
});
