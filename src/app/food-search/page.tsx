import AuthLayout from "@/@layouts/authLayout";
import FoodSearchIndex from "@/features/FoodSearch";
import React from "react";
// import homeImage from "@/@images/homepageBanner/home_img.webp";

const FoodSearchPage = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <AuthLayout>
        <FoodSearchIndex />
      </AuthLayout>
    </div>
  );
};

export default FoodSearchPage;
