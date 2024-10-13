import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: "#e6f3ff",
          padding: "4em 2em",
          textAlign: "center",
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
          Colossal
        </Typography>
        <Typography variant="h6">
          The perfect accounting software for nonprofits, tailored just for nonprofits!
        </Typography>
      </Box>

      {/* Content Section */}
      <Box sx={{ padding: "4em 2em", textAlign: "center" }}>
        <Typography variant="h4" sx={{mb: 3 }}>
          Some of the features we offer:
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "2em",
          }}
        >
          {/* Service 1 */}
          <Box
            sx={{
              backgroundColor: "#f0f0f0",
              padding: "1.5em",
              textAlign: "center",
              borderRadius: "8px",
              flexBasis: "30%",
              minWidth: "250px",
            }}
          >
            <Typography variant="h5" sx={{ mb: 2 }}>
              Fund Accounting
            </Typography>
            <Typography variant="body1">
                Categorizes and tracks restricted vs. unrestricted funds to ensure proper use and compliance with funder requirements
            </Typography>
          </Box>

          {/* Service 2 */}
          <Box
            sx={{
              backgroundColor: "#f0f0f0",
              padding: "1.5em",
              textAlign: "center",
              borderRadius: "8px",
              flexBasis: "30%",
              minWidth: "250px",
            }}
          >
            <Typography variant="h5" sx={{ mb: 2 }}>
              Grant Tracking
            </Typography>
            <Typography variant="body1"> Enables tracking of grant funds and ensure proper allocation</Typography>
          </Box>

          {/* Service 3 */}
          <Box
            sx={{
              backgroundColor: "#f0f0f0",
              padding: "1.5em",
              textAlign: "center",
              borderRadius: "8px",
              flexBasis: "30%",
              minWidth: "250px",
            }}
          >
            <Typography variant="h5" sx={{ mb: 2 }}>
              Donor Management
            </Typography>
            <Typography variant="body1">Keeps track of donors, generates donor receipts, and records donation details for tax reporting</Typography>
          </Box>

          {/* Service 4 */}
          <Box
            sx={{
              backgroundColor: "#f0f0f0",
              padding: "1.5em",
              textAlign: "center",
              borderRadius: "8px",
              flexBasis: "30%",
              minWidth: "250px",
            }}
          >
            <Typography variant="h5" sx={{ mb: 2 }}>
              Budgeting
            </Typography>
            <Typography variant="body1">
              Tools to help you raise more funds effectively
            </Typography>
          </Box>

          {/* Service 5 */}
          <Box
            sx={{
              backgroundColor: "#f0f0f0",
              padding: "1.5em",
              textAlign: "center",
              borderRadius: "8px",
              flexBasis: "30%",
              minWidth: "250px",
            }}
          >
            <Typography variant="h5" sx={{ mb: 2 }}>
              Create Reports
            </Typography>
            <Typography variant="body1">
              Simplify your nonprofit’s tax filing
            </Typography>
          </Box>

          {/* Service 6 */}
          <Box
            sx={{
              backgroundColor: "#f0f0f0",
              padding: "1.5em",
              textAlign: "center",
              borderRadius: "8px",
              flexBasis: "30%",
              minWidth: "250px",
            }}
          >
            <Typography variant="h5" sx={{ mb: 2 }}>
              IRS Filing
            </Typography>
            <Typography variant="body1">
              Simplify your payroll with easy-to-use solutions
            </Typography>
          </Box>

          {/* Service 7 */}
          <Box
            sx={{
              backgroundColor: "#f0f0f0",
              padding: "1.5em",
              textAlign: "center",
              borderRadius: "8px",
              flexBasis: "30%",
              minWidth: "250px",
            }}
          >
            <Typography variant="h5" sx={{ mb: 2 }}>
              General Ledger
            </Typography>
            <Typography variant="body1">
              Get detailed reports on your finances in real time
            </Typography>
          </Box>

          {/* Service 8 */}
          <Box
            sx={{
              backgroundColor: "#f0f0f0",
              padding: "1.5em",
              textAlign: "center",
              borderRadius: "8px",
              flexBasis: "30%",
              minWidth: "250px",
            }}
          >
            <Typography variant="h5" sx={{ mb: 2 }}>
              Accounts Payable (AP) and Accounts Receivable (AR)
            </Typography>
            <Typography variant="body1">
              Manage donor relationships efficiently
            </Typography>
          </Box>

        </Box>
      </Box>

      {/* Footer Section */}
      <Box
        sx={{
          backgroundColor: "#004b91",
          color: "#fff",
          padding: "2em 0",
          textAlign: "center",
        }}
      >
        <Typography variant="body1">
          &copy; 2024 Colossal. All rights reserved.
        </Typography>
      </Box>
    </div>
  );
};
