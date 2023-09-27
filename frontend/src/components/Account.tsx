import React, { useState } from "react";
import Button from "@mui/material/Button";
import CopyButton from "./CopyButton";
import "./Account.css";

import elegantBorder from "../assets/icons/elegant_leaf.png";

const Account: React.FC<{}> = () => {
  const [isGroom, setIsGroom] = useState(false);
  const toggleGroomAccounts = () => {
    if (isBride) setIsBride(false);
    setIsGroom(!isGroom);
  };
  const [isBride, setIsBride] = useState(false);
  const toggleBrideccounts = () => {
    if (isGroom) setIsGroom(false);
    setIsBride(!isBride);
  };

  const groomAccounts = [
    { name: "신한수", account: "농협은행 800-12-074718" },
    { name: "최미숙", account: "카카오뱅크 3333-04-6605469" },
  ];
  const brideAccounts = [
    { name: "김헌식", account: "010-3213-0857" },
    { name: "정명숙", account: "010-6413-0857" },
  ];

  return (
    <div style={{ padding: "3rem 0" }}>
      <img src={elegantBorder} width="12%" />
      <p style={{ fontSize: "1.5rem" }}>마음 전하실 곳</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          margin: "0 1rem 1rem 1rem",
        }}
      >
        <Button
          onClick={toggleGroomAccounts}
          style={{
            backgroundColor: isGroom ? "honeydew" : "",
            border: "1px solid",
          }}
          color="success"
        >
          신랑측 계좌번호 확인하기
        </Button>
        <Button
          onClick={toggleBrideccounts}
          style={{
            backgroundColor: isBride ? "honeydew" : "",
            border: "1px solid",
          }}
          color="success"
        >
          신부측 계좌번호 확인하기
        </Button>
      </div>

      {isGroom &&
        groomAccounts.map((data) => (
          <div style={{ width: "90%", margin: "auto", padding: "0.5rem" }}>
            <p style={{ margin: "0", fontSize: "1rem", textAlign: "start" }}>
              예금주: {data.name}
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid lightgray",
                borderRadius: "5px",
                padding: "5px",
              }}
            >
              <p style={{ margin: 0, fontSize: "1rem" }}>{data.account}</p>
              <CopyButton textToCopy={data.account} />
            </div>
          </div>
        ))}
      {isBride &&
        brideAccounts.map((data) => (
          <div style={{ width: "90%", margin: "auto", padding: "0.5rem" }}>
            <p style={{ margin: "0", fontSize: "1rem", textAlign: "start" }}>
              예금주: {data.name}
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid lightgray",
                borderRadius: "5px",
                padding: "5px",
              }}
            >
              <p style={{ margin: 0, fontSize: "1rem" }}>{data.account}</p>
              <CopyButton textToCopy={data.account} />
            </div>
          </div>
        ))}
    </div>
  );
};

export default Account;
