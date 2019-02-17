import React from "react";
import styled from "styled-components";
export const FormRowBox = styled.div`
  & .ant-form-item {
    display: flex;
  }

  & .ant-form-item-control-wrapper {
    flex: 1;
  }
`;
export const SearchBox = styled(FormRowBox)`
  padding: 10px !important;
  background: #fbfbfb;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  margin: 24px 16px;
  margin-bottom: -15px;
`;
