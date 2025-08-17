import AuthLayout from "@/@layouts/authLayout";
import CartDetails from "@/features/Cart";


export default function RestaurantsPage() {
  return (
    <AuthLayout>
      <div className="py-10 mt-20">
        <CartDetails />
      </div>
    </AuthLayout>
  );
}
