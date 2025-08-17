import Footer from "@/@components/common/Footer";
import AuthLayout from "@/@layouts/authLayout";
import FoodSection from "@/features/FoodSection";
import FoodBannerSlider from "@/features/HomePage/FoodBanner/FoodBannerSlider";

export default function RestaurantsPage() {
  return (
    <AuthLayout>
      <div className="py-10 mt-20">
        {/* <FoodBannerSlider /> */}
        <FoodSection />
      </div>
    </AuthLayout>
  );
}
