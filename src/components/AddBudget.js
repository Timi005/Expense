import React, {useContext, useState} from 'react';
import { AppContext } from '../Context/context'


const AddBudgetForm = () => {
	const { dispatch } = useContext(AppContext);
    const [budget, setBudget] = useState('');
    
    const onSubmit = (event) => {
		event.preventDefault();

		const Budget =  parseInt(budget);

		dispatch({
			type: 'ADD_BUDGET',
			payload: Budget,
		});

		setBudget('');


	};

	return (
		<form onSubmit={onSubmit}>
			<div className='row'>
				<div className='col-sm'>
					<label for='name'>Budget</label>
					<input
						required='required'
						type='text'
						className='form-control'
						id='name'
						value = {budget}
                        onChange={(event) =>setBudget(event.target.value)}
					></input>
				</div>
				

			</div>
            <div className='row'>
            	<div className='col-sm'>
					<button type='submit' className='btn btn-primary mt-3'>
						Save
					</button>
				</div>
            </div>
		</form>
	);
};

export default AddBudgetForm;