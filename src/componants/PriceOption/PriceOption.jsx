import Feature from "../Feature/Feature";


/* eslint-disable react/prop-types */
const PriceOption = ({option}) => {
    const {name, price, features} = option
    return (
        <div className="bg-blue-300 rounded-lg p-4 flex flex-col">
           <h2 className="text-center">
            <span className="text-7xl font-bold">{price}</span>
           </h2>
           <h4 className="text-3xl text-center my-8">{name}</h4>
          <div className="pl-4 py-4 flex-grow">
          {
            features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
           }
          </div>
          <button className="w-full btn bg-blue-600 text-2xl">Buy Now</button>
        </div>
    );
};

export default PriceOption;