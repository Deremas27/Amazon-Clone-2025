/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import numeral from "numeral";

function CurrencyFormat({ amount }) {
  const formattedAmount = numeral(amount).format("$0,0.00");
  return <>{formattedAmount}</>;
}

export default CurrencyFormat;
