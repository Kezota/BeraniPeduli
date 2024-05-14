import { Grid } from "@mui/material";
import { useDonationContext } from "../../../context/DonationContext";
import DonationCard from "./DonationCard";

import "../../../styles/donateGrid.css";

export default function DonationGrid() {
  const {
    category,
    sort,
    search,
    onTogglePopup,
    donations,
    setSelectedDonation,
  } = useDonationContext();

  let filteredDonations = donations.filter((donation) => {
    if (category === null || category === "None") return true;
    else return donation.category === category;
  });

  if (search) {
    filteredDonations = [...filteredDonations].filter(
      (donation) =>
        donation.title.toLowerCase().includes(search.toLowerCase()) ||
        donation.description.toLowerCase().includes(search.toLowerCase())
    );
  }

  const sortedDonations = sort
    ? filteredDonations.reverse()
    : filteredDonations;

  return (
    <div className="donate-grid container">
      <Grid
        container
        spacing={4}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <img src="../../../assets/donate2.png" alt="" />
        {sortedDonations.length > 0 ? (
          sortedDonations.map((donation, index) => (
            <DonationCard
              key={index}
              donation={donation}
              onOpenPopup={onTogglePopup}
              setSelectedDonation={setSelectedDonation}
            />
          ))
        ) : (
          <h3 className="not-found">No donations found</h3>
        )}
      </Grid>
    </div>
  );
}
