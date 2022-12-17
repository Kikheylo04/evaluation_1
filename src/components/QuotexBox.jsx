import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

export const QuotexBox = ({ information }) => {
  const { quote, author, color } = information;
  return (
    <div className="App__card__data__information">
      <div className="App__card__data__information__sentence">
        <p style={{ color: color }}>
          <span>
            {" "}
            <FaQuoteLeft />
          </span>
          {quote}
        </p>
      </div>
      <div className="App__card__data__information__name">
        <p style={{ color: color }}>{author}</p>
      </div>
    </div>
  );
};
