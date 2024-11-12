import React, { useState } from 'react';
import { testimonials } from "../constants/index.jsx";

const Testimonials = () => {
    return (
        <div className="mt-20 tracking-wide">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">What people are saying</h2>
            <div className="flex flex-wrap justify-center">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
                        <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin">
                            <p>{testimonial.text}</p>
                            <div className="flex mt-8 items-center">
                                <img className="w-12 h-12 mr-6 rounded-full border border-neutral-300" src={testimonial.image} alt={testimonial.user} />
                                <div>
                                    <h6 className="font-semibold">{testimonial.user}</h6>

                                    <CompanyNameText text={testimonial.company} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const CompanyNameText = ({ text }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleText = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            <span
                className={`text-sm font-normal italic text-neutral-700 ${!isExpanded ? 'line-clamp-3' : ''}`}
                style={{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    WebkitLineClamp: '3', // Limiting to 3 lines
                }}
            >
                {text}
            </span>

            {!isExpanded && text.length > 50 && (
                <button
                    className="text-blue-500 text-xs mt-1 cursor-pointer"
                    onClick={toggleText}
                >
                    Show more
                </button>
            )}

            {isExpanded && (
                <button
                    className="text-blue-500 text-xs mt-1 cursor-pointer"
                    onClick={toggleText}
                >
                    Show less
                </button>
            )}
        </div>
    );
}

export default Testimonials;
