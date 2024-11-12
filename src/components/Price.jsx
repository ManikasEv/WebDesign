import React from 'react';
import {pricingOptions} from "../constants/index.jsx";
import {CheckCircle2} from "lucide-react";

const Price = () => {
    return (
        <div className="mt-20 mr-5 ml-5">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">Pricing</h2>
            <div className="flex flex-wrap">
                {pricingOptions.map((option, index) => (
                    <div key={index} className="items-center justify-center w-full sm:1/2 lg:w-1/3 p-2 j">
                        <div className="p-8 m-auto border border-neutral-500 rounded-xl">
                            <p className="text-4xl mb-8 text-center">
                                {option.title}
                                {option.title === "Pro" && (
                                    <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
      (Most Popular)
    </span>
                                )}
                            </p>
                        <p className="mb-8"><span className="text-5 mt-6 mr-2">{option.price}</span><span className="text-neutral-400 tracking-tight">/Month</span></p>
                            <ul>
                                {option.features.map((feature, index) => (
                                    <li key={index} className="mt-8 flex items-center">
                                        <CheckCircle2 />
                                        <span className="ml-2">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href="#" className="inline-flex items-center justify-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200">Subscribe</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Price;