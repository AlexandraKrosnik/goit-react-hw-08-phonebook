import styled from 'styled-components';
import { Form } from 'antd';
export const FormStyled = styled(Form)`
  .login-form-button {
    width: 100%;
  }
  .ant-form-item:last-child {
    margin-bottom: 0;
  }
  .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover
    .site-form-item-icon
    svg {
    fill: #40a9ff;

    z-index: 1;
  }
`;
export const FormContainer = styled.div`
  width: 45%;
  padding: 40px 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
