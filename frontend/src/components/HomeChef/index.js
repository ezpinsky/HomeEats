import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navigation from '../Navigation';

export default function HomeChef() {
	const { id } = useParams();
	const homeChefId = Number.parseInt(id);
	const { homeChefsList } = useSelector(state => state.homeChefs);

	let chef = homeChefsList.find(chef => chef.id === homeChefId);

	return (
		<>
			<Navigation />
			<div className='address-container'>
				<h4>Address</h4>
				<p>{chef.street_address}</p>
			</div>
		</>
	);
}
