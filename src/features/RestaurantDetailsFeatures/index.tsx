"use client";
import Breadcrumbs from "@/@components/common/Breadcrumbs";
import AvailableDeals from "@/@components/RestaurantDetails/AvailableDeals";
import FoodCardList from "@/@components/RestaurantDetails/FoodCardList";
import RestaurantHeader from "@/@components/RestaurantDetails/RestaurantHeader";
import StickyHeader from "@/@components/RestaurantDetails/StickyHeader";
import { CookFoodsCategoryType, FoodBusinessType } from "@/@types/restaurant";
import { foodBusinesses } from "@/@utils/dummyData";
import { useParams } from "next/navigation";
import { useState } from "react";

const RestaurantDetailsFeatures = () => {
  const params = useParams();
  const { id } = params; // Extract the 'id' parameter from the URL
  const data =
    foodBusinesses.find((item) => item.id === id) || ({} as FoodBusinessType);

  const [active, setActive] = useState<CookFoodsCategoryType>(
    data?.categories?.[0] || ({} as CookFoodsCategoryType)
  );

  return (
    <div>
      <Breadcrumbs
        items={[
          { label: "Homepage", href: "/" },
          { label: "Cook List", href: "/cooks" },
          { label: data?.businessName || "Restaurant", href: "" },
        ]}
      />
      <RestaurantHeader
        name={data?.businessName || ""}
        image={data?.profileImage || ""}
        tags={
          data?.tags || [
            "Asian",
            "Snacks",
            "Bangladeshi",
            "Curry",
            "Price Match",
          ]
        }
        deliveryInfo={
          data?.deliveryInfo || "Free delivery for first order Tk 39"
        }
        rating={data?.averageRating || 0}
        reviewsCount={String(data?.totalReviews) || "0"}
        minOrder={String(data?.minimumOrder) || "Tk 0"}
      />
      {data?.deals && <AvailableDeals deals={data?.deals} />}
      <StickyHeader
        categories={data?.categories || []}
        setActive={setActive}
        active={active}
      />
      {/* <TopPart
        name={data?.businessName || ""}
        image={data?.profileImage || ""}
      /> */}
      <FoodCardList activeCategory={active} />
      {/* <section id="details">
        <DetailsSection
          address={data?.location?.address || ""}
          rating={data?.averageRating || 0}
          cuisine={data?.cuisine || ""}
        />
      </section>
      <section id="menu">
        <MenuSection items={data?.menu || []} />
      </section>
      <section id="reviews">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Reviews</h2>
          <p className="text-gray-600">No reviews yet.</p>
        </div>
      </section> */}
    </div>
  );
};

export default RestaurantDetailsFeatures;
