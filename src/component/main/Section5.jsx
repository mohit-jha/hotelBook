import React from "react";
import Section5B from "./Section5B";
const FeaturesSection = () => {
  return (
    <section className="package_plan">
      <Section5B />
      <div className="col-lg-6 right">
        <h2 className="mb-3 mb-lg-5">The Best Holidays Start Here!</h2>
        <p className="mb-3 mb-lg-5">
          Book your hotel with us and don't forget to grab an awesome hotel deal
          to save massive on your stay.
        </p>

        {/* Features START */}
        <div className="row g-4">
          {/* Item */}
          {featureItem(
            "Quality Food",
            "Departure defective arranging rapturous did. Conduct denied adding worthy little",
            "fa-solid fa-utensils",
            "success",
            "text-success"
          )}

          {/* Item */}
          {featureItem(
            "Quick Services",
            "Supposing so be resolving breakfast am or perfectly.",
            // "bi bi-stopwatch-fill",
            "fa-solid fa-stopwatch",
            "danger",
            "text-danger"
          )}

          {/* Item */}
          {featureItem(
            "High Security",
            "Arranging rapturous did believe him all had supported.",
            // "bi bi-shield-fill-check",
            "fa-solid fa-shield",
            "orange",
            "text-orange"
          )}

          {/* Item */}
          {featureItem(
            "24 Hours Alert",
            "Rapturous did believe him all had supported.",
            // "bi bi-lightning-fill",
            "fa-solid fa-bolt-lightning",
            "info",
            "text-info"
          )}
        </div>
        {/* Features END */}
      </div>
    </section>
  );
};

const featureItem = (
  title,
  description,
  iconClass,
  bgColorClass,
  textColorClass
) => (
  <div className="col col-sm-6">
    <div
      className={`icon_wrapper ${bgColorClass} bg-opacity-10 ${textColorClass} rounded_circle`}
    >
      <i className={iconClass}></i>
    </div>
    <h5 className="mt-2">{title}</h5>
    <p className="mb-0">{description}</p>
  </div>
);

export default FeaturesSection;
