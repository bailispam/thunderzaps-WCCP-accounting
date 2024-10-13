import { Button, Container, TextField, Typography, Box } from '@mui/material';
import React, { useState } from 'react';

export const BudgetForm = () => {
	const [formData, setFormData] = useState({
		programName: '',
		budgetedAmount: '',
		actualSpent: '',
		remainingBalance: '',
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
	};

	return (
		<Container maxWidth="sm">
			<Typography variant="h4" gutterBottom>
				Budget Form
			</Typography>
			<form onSubmit={handleSubmit}>
				<Box display="flex" flexDirection='column' justifyContent="space-between" gap="10px">
					<TextField
						fullWidth
						label="Program Name"
						name="programName"
						value={formData.programName}
						onChange={handleChange}
						required
					/>
					<TextField
						fullWidth
						label="Budgeted Amount"
						name="budgetedAmount"
						type="number"
						value={formData.budgetedAmount}
						onChange={handleChange}
						required
					/>
					<TextField
						fullWidth
						label="Actual Spent"
						name="actualSpent"
						type="number"
						value={formData.actualSpent}
						onChange={handleChange}
						required
					/>
					<TextField
						fullWidth
						label="Remaining Balance"
						name="remainingBalance"
						type="number"
						value={formData.budgetedAmount - formData.actualSpent}
						readOnly
						required
					/>
					<TextField
						fullWidth
						label="Notes"
						name="notes"
						value={formData.notes}
						onChange={handleChange}
						multiline
						rows={4}
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
