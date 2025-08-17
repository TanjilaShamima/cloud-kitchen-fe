import AuthLayout from "@/@layouts/authLayout";
import RestaurantDetailsFeatures from "@/features/RestaurantDetailsFeatures";


const RestaurantDetailsPage = () => {

  return (
    <AuthLayout>
      <div className="py-10 mt-20">
        <RestaurantDetailsFeatures />
      </div>
    </AuthLayout>
  );
};

export default RestaurantDetailsPage;
