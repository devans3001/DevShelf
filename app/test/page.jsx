import React from "react";

async function Page() {
  const arr = [
    "love-hate-no-man-to-con",
    "love-hate-no-man",
    "love-hate-no-man-to",
  ];

  const val = arr.filter((ele) => {
    const x = ele.split("-").length;

    return x < 5;
  });

  console.log(val);
  return <div></div>;
}

export default Page;
