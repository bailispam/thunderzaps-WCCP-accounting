import { Button, Container, TextField, Typography, Box } from '@mui/material';
import React, { useState } from 'react';
import axios from "axios";

/*
	{ field: 'filingType', headerName: 'Filing Type', width: 200 },
	{ field: 'dueDate', headerName: 'Due Date', width: 150 },
	{ field: 'status', headerName: 'Status', width: 150 },
	{ field: 'notes', headerName: 'TNotes', width: 200 },
*/

export const TaxForm = (props) => {
	const {setForm} = props;

	const [formData, setFormData] = useState({
		filingType: '',
		dueDate: '',
		status: '',
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
			url: "http://129.146.245.100/irsfilling/",
			method: "PUT",
			data: formData,
		}).catch((err) => {
			console.log(err)
		});
	};

	return (
		<Container maxWidth="sm">
			<Typography variant="h4" gutterBottom>
				Tax Form
			</Typography>
			<form onSubmit={handleSubmit}>
				<Box display="flex" flexDirection='column' justifyContent="space-between" gap="8px">
					<TextField
						fullWidth
						label="Filing Type"
						name="filingType"
						value={formData.filingType}
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
						label="Status"
						name="status"
						value={formData.status}
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
