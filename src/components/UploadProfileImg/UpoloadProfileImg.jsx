import { Avatar, Badge } from "antd";

import { ReactComponent as ProfileImgTag } from "assets/profileImgTag.svg";

import "./UploadProfileImg.scss";

const UpoloadProfileImg = () => {
  return (
    <Badge count={<ProfileImgTag />} offset={[-5, 55]}>
      <Avatar shape="square" size={64} style={{ borderRadius: "20px" }} />
    </Badge>
  );
};

export default UpoloadProfileImg;
