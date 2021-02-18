import React from "react";

import get from "lodash/get";

import { useSelector } from "react-redux";
export const DownloadFile = () => {
  const state = useSelector((state) => state);
  const { file } = state;

  return (
    <a
      id="file"
      href={get(file, "file.rootAddOnFilePathWithAccessToken")}
      download
    />
  );
};
