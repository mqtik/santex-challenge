import styled from "styled-components";
import IconButton from "@mui/material/IconButton";

export const Wrapper = styled.div`
  margin: 20px 90px 20px 10px;
`;

export const StyledButton = styled(IconButton)`
  position: fixed !important;
  z-index: 100;
  right: 20px;
  top: 20px;
  padding: 20px !important;
  background: #ff4103 !important;
  color: #fff !important;
  border-radius: 5px !important;
`;
