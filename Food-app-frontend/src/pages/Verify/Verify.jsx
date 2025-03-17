import React, { useEffect, useState } from "react";
import "./Verify.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const url = "ttps://food-delivery-backend-flws.onrender.com";
  const navigate = useNavigate();

  const verifyPayment = async () => {
    const response = await axios.post(`${url}/api/order/verify`, {
      success,
      orderId,
    });
    if (response.data.success) {
      navigate("/myorders");
    } else {
      navigate("/");
    }
  };
  useEffect(() => {
    verifyPayment();
  }, []);
  return (
    <div>
      <div className="verify">
        <div className="sppiner"></div>
      </div>
    </div>
  );
};

export default Verify;
