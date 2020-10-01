import { Link } from 'inferno-router';
import { ListGroup, ListGroupItem, ListGroupItemHeading } from 'inferno-bootstrap';
import { formatName } from '../../utils';

export default ({ items }) =>
	items && items.length ? (
		<ListGroup className="rounded">
			{items.map(({ name, picture: { medium } }, index) => (
        <ListGroupItem>
          <Link to={`/contact/${index}`} className="text-decoration-none text-dark">
            <div className="d-flex align-items-center">
              <img className="img-thumbnail mr-2" src={medium} alt="Contact thumbnail" />
              <ListGroupItemHeading>{formatName(name)}</ListGroupItemHeading>
            </div>
          </Link>
        </ListGroupItem>
			))}
		</ListGroup>
	) : null;
