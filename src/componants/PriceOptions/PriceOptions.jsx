import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions = [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": "$30/month",
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Unlimited cardio sessions",
            "Fitness assessment",
            "Discounts on gym merchandise",
            "Monthly progress tracking"
          ]
        },
        {
          "id": 2,
          "name": "Silver Membership",
          "price": "$50/month",
          "features": [
            "All Basic Membership features",
            "Group fitness classes",
            "Personal trainer consultation",
            "Sauna access",
            "Nutrition workshops",
            "Complimentary water bottles"
          ]
        },
        {
          "id": 3,
          "name": "Gold Membership",
          "price": "$80/month",
          "features": [
            "All Silver Membership features",
            "24/7 gym access",
            "Towel service",
            "Nutritional counseling",
            "Access to VIP lounge",
            "Access to VIP lounge",
            "Access to VIP lounge",
            "Access to VIP lounge",
            "Priority class booking"
          ]
        }
      ]
      

    return (
        <div className="m-12">
             <h2 className="text-5xl">Best price in the town</h2>
            <div className="grid grid-cols-3 gap-6">
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;