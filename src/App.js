import { Container } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { person } from './data';
import DatesCount from './components/DetesCount';
import DatesList from './components/DatesList';
import DatesAction from './components/DatesAction';

const App = () => {
	const [personData, setPersonData] = useState(person);
	const onDelete = () => {
		setPersonData([]);
	};
	const onViewData = () => {
		setPersonData(person);
	};
	useEffect(() => {
		setPersonData([]);
	}, []);
	return (
		<div className='body'>
			<Container className='py-5'>
				<DatesCount person={personData}></DatesCount>
				<DatesList person={personData}></DatesList>
				<DatesAction onDelete={onDelete} onViewData={onViewData}></DatesAction>
			</Container>
		</div>
	);
};

export default App;
