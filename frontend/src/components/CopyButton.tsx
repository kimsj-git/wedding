import React, { useState } from "react";
import Button from "@mui/material/Button";

const CopyButton: React.FC<{ textToCopy: string }> = (props) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(props.textToCopy);
      setIsCopied(true);
    } catch (error) {
      console.error("Unable to copy text: ", error);
    }
  };

  return (
    <div>
      <Button onClick={handleCopyClick} color="success">
        {isCopied ? "복사완료✅" : "복사하기"}
      </Button>
    </div>
  );
};

export default CopyButton;
