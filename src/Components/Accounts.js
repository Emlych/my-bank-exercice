import React from "react";
import Account from "./Account";
import data from "../assets/data.json";

const Accounts = (props) => {
  return (
    <div className="accounts container">
      {data.map((account, index) => {
        return (
          <Account
            key={index}
            name={account.name}
            balance={account.balance}
            color={account.color}
            operations={account.operations}
          />
        );
      })}
    </div>
  );
};

export default Accounts;
