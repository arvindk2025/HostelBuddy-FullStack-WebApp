import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

export function Lending() {
  // Step 1: Initialize the deadline state
  const [deadline, setDeadline] = useState(new Date("2025-04-06T15:00:00"));
  const [isActive, setIsActive] = useState(true);

  // Step 2: Compare current date and time with deadline
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
          src="https://i.pinimg.com/1200x/c5/fc/eb/c5fceb3506674d2d7610d1c688f681e5.jpg"
          alt="White Shirt"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray">
          Medicine Kit
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal">
        "💊 Be Prepared, Stay Protected – Your Medicine Kit, Your First Line of Defense! 🛡️"
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        {/* Step 3: Display active state */}
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
