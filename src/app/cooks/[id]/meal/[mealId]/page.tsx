import AuthLayout from "@/@layouts/authLayout";
import FoodDetails from "@/features/FoodDetails";
import React from "react";

const FoodDetailsPage = () => {
  return (
    <AuthLayout>
      <div className="py-10 mt-20">
        <FoodDetails />
      </div>
    </AuthLayout>
  );
};

export default FoodDetailsPage;
