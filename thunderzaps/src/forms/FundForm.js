import { Button, Container, TextField, Typography, Box } from '@mui/material';
import React, { useState } from 'react';
import axios from "axios";

export const FundForm = (props) => {
	const {setForm} = props;

	const [formData, setFormData] = useState({
		source: '',
		restricted: '',
		totalAmount: '',
		allocatedAmount: '',
		remainingBalance: '',
		restrictions: '',
		notes: '',
	});

	const handleChange = (e) => {
		let { name, value } = e.target;

		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission logic here
		console.log(formData);

		setForm([]);
		window.location.reload();
		
		axios({
			url: "http://129.146.245.100/fund/",
			method: "PUT",
			data: formData,
		}).catch((err) => {
			console.log(err)
		});
	};

	return (
		<Container maxWidth="sm">
			<Typography variant="h4" gutterBottom>
				Grant Form
			</Typography>
			<form onSubmit={handleSubmit}>
				<Box display="flex" flexDirection='column' justifyContent="space-between" gap="8px">
					<TextField
						fullWidth
						label="Fund Source"
						name="source"
						value={formData.source}
						onChange={handleChange}
						required
					/>
					<TextField
						fullWidth
						label="Type"
						name="restricted"
						value={formData.restricted}
						onChange={handleChange}
						required
					/>
					<TextField
						fullWidth
						label="Total Amount"
						name="totalAmount"
						type="number"
						value={formData.totalAmount}
						onChange={handleChange}
						required
					/>
					<TextField
						fullWidth
						label="Allocated Amount"
						name="allocatedAmount"
						type="number"
						value={formData.allocatedAmount}
						onChange={handleChange}
						required
					/>
					<TextField
						fullWidth
						label="Remaining Balance"
						name="remainingBalance"
						type="number"
						value={formData.totalAmount - formData.allocatedAmount}
						readOnly
						required
					/>
					<TextField
						fullWidth
						label="Restrictions"
						name="restrictions"
						value={formData.restrictions}
						onChange={handleChange}
						required
					/>
					<TextField
						fullWidth
						label="Notes"
						name="notes"
						value={formData.notes}
						onChange={handleChange}
						multiline
						rows={2}
						required
					/>
					<Button type="submit" variant="contained" color="primary">
						Submit
					</Button>
				</Box>
			</form>
		</Container>
	);
};
