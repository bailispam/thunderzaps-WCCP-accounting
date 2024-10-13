import { Button, Container, TextField, Typography, Box } from '@mui/material';
import React, { useState } from 'react';

export const DonorForm = () => {
	const [formData, setFormData] = useState({
		donorName: '',
		donationDate: '',
		totalAmount: '',
		allocatedAmount: '',
		remainingBalance: '',
		receiptIssued: '',
		followupDate: '',
		formRequired: '',
		acknowledgmentLetterSent: '',
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
				Donor Form
			</Typography>
			<form onSubmit={handleSubmit}>
				<Box display="flex" flexDirection='column' justifyContent="space-between" gap="10px">
					<TextField
						fullWidth
						label="Donor Name"
						name="donorName"
						value={formData.donorName}
						onChange={handleChange}
						required
					/>
					<TextField
						fullWidth
						label="Donation Date"
						name="donationDate"
						type="date"
						value={formData.donationDate}
						onChange={handleChange}
						InputLabelProps={{
							shrink: true,
						}}
						required
					/>
					<TextField
						fullWidth
						label="Amount"
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
						label="Receipt Issued?"
						name="receiptIssued"
						value={formData.receiptIssued}
						onChange={handleChange}
						required
					/>
					<TextField
						fullWidth
						label="Follow-up Date"
						name="followupDate"
						type="date"
						value={formData.followupDate}
						onChange={handleChange}
						InputLabelProps={{
							shrink: true,
						}}
						required
					/>
					<TextField
						fullWidth
						label="Form Required?"
						name="formRequired"
						value={formData.formRequired}
						onChange={handleChange}
						required
					/>
					<TextField
						fullWidth
						label="Acknowledgment Letter Sent"
						name="acknowledgmentLetterSent"
						value={formData.acknowledgmentLetterSent}
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