import { Button, Container, TextField, Typography, Box } from '@mui/material';
import React, { useState } from 'react';
   
import axios from "axios";

export const GrantForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		grantor: '',
		grantAmount: '',
		allocated: '',
		remaining: '',
		restrictions: '',
		dueDate: '',
		notes: '',
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
	
		axios({
			url: "http://129.146.245.100/grant",
			method: "POST",
			data: formData,
		}).catch((err) => {});
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
						label="Grant Name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						required
					/>
					<TextField
						fullWidth
						label="Grantor"
						name="grantor"
						value={formData.grantor}
						onChange={handleChange}
						required
					/>
					<TextField
						fullWidth
						label="Amount"
						name="grantAmount"
						type="number"
						value={formData.grantAmount}
						onChange={handleChange}
						required
					/>
					<TextField
						fullWidth
						label="Allocated"
						name="allocated"
						type="number"
						value={formData.allocated}
						onChange={handleChange}
						required
					/>
					<TextField
						fullWidth
						label="Remaining"
						name="remaining"
						type="number"
						value={formData.grantAmount - formData.allocated}
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
						label="Due Date"
						name="dueDate"
						type="date"
						value={formData.dueDate}
						onChange={handleChange}
						InputLabelProps={{
							shrink: true,
						}}
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