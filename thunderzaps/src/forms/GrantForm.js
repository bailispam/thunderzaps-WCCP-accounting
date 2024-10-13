import { Button, Container, Grid2, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';


export const GrantForm = () => {
	const [formData, setFormData] = useState({
		grantName: '',
		amount: '',
		description: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission logic here
		console.log(formData);
	};

	return (
		<Container maxWidth="sm">
			<Typography variant="h4" gutterBottom>
				Grant Form
			</Typography>
			<form onSubmit={handleSubmit}>
				<Grid2 container spacing={3}>
					<Grid2 item xs={12}>
						<TextField
							fullWidth
							label="Grant Name"
							name="grantName"
							value={formData.grantName}
							onChange={handleChange}
							required
						/>
					</Grid2>
					<Grid2 item xs={12}>
						<TextField
							fullWidth
							label="Amount"
							name="amount"
							type="number"
							value={formData.amount}
							onChange={handleChange}
							required
						/>
					</Grid2>
					<Grid2 item xs={12}>
						<TextField
							fullWidth
							label="Description"
							name="description"
							value={formData.description}
							onChange={handleChange}
							multiline
							rows={4}
							required
						/>
					</Grid2>
					<Grid2 item xs={12}>
						<Button type="submit" variant="contained" color="primary">
							Submit
						</Button>
					</Grid2>
				</Grid2>
			</form>
		</Container>
	);
};