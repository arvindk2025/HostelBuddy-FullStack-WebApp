import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

export function Borrow() {
  // Step 1: Initialize the deadline and active state
  const [deadline, setDeadline] = useState(new Date("2025-03-06T18:00:00"));
  const [isActive, setIsActive] = useState(true);

  // Step 2: Initialize the owner's name state
  const [owner, setOwner] = useState("Atul Singh");

  // Step 3: Compare current date and time with deadline
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setIsActive(now < deadline);
    }, 1000);

    return () => clearInterval(interval);
  }, [deadline]);

  return (
    <Card className="max-w-[24rem] overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          src="https://i.pinimg.com/736x/1f/ea/64/1fea64776e74eef0867bae9d7c6d6870.jpg"
          alt="White Shirt"
        />
      </CardHeader>
      <CardBody>
        {/* Step 4: Use flex to align the product name and owner */}
        <div className="flex justify-between items-center">
          <Typography variant="h4" color="blue-gray">
            Formal Dress
          </Typography>
          <Typography variant="caption" color="blue" >
            Owner: {owner}
          </Typography>
        </div>
        <Typography variant="lead" color="gray" className="mt-3 font-normal">
        "Look Sharp, Feel Confident! 🕴️💼"
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        {/* Step 5: Display active state */}
        <Typography variant="caption" color={isActive ? "green" : "red"}>
          {isActive ? "Active" : "Inactive"}
        </Typography>
        <Typography className="font-normal" color="pink">
          Deadline: {deadline.toLocaleString()}
        </Typography>
      </CardFooter>
    </Card>
  );
}
