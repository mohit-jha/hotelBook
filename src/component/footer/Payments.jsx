import React from 'react';

const PaymentSecurityComponent = () => {
  const imagePath = 'https://booking.webestica.com/assets/images/';

  return (
    <div className="col-sm-7 col-md-6 col-lg-4">
      <h5 className="text-white mb-2">Payment & Security</h5>
      <ul className="">
        <li> <a href="#"><img src={`${imagePath}element/paypal.svg`} className="h-30px" alt="PayPal" /></a></li>
        <li> <a href="#"><img src={`${imagePath}element/visa.svg`} className="h-30px" alt="Visa" /></a></li>
        <li> <a href="#"><img src={`${imagePath}element/mastercard.svg`} className="h-30px" alt="Mastercard" /></a></li>
        <li> <a href="#"><img src={`${imagePath}element/expresscard.svg`} className="h-30px" alt="Expresscard" /></a></li>
      </ul>
    </div>
  );
};

export default PaymentSecurityComponent;
