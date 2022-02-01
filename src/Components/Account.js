import React from "react";
import Button from "./Button";

const Account = ({
  color,
  name,
  balance,
  operations,
  date,
  description,
  amount,
}) => {
  const style = {
    backgroundColor: color,
  };
  return (
    <div className="account">
      <div className="account__general" style={style}>
        <div className="account__general--name">{name}</div>
        <div className="account__general--balance">{balance} €</div>
      </div>
      <div className="account__details">
        {operations.map((operation, index) => {
          return (
            <div className="account__details--line">
              <div>{operation.date}</div>
              <div>{operation.description}</div>
              <div>{operation.amount} €</div>
            </div>
          );
        })}
      </div>

      <Button />
    </div>
  );
};

export default Account;
