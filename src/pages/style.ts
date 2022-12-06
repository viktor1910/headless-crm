import styled from 'styled-components';
import Link from 'next/link';
export const AppContainer = styled.div`
  width: 100%;
`;
export const AppLayout = styled.div`
  /* margin: auto; */
  width: 100%;
`;
// style Header
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
`;
export const HeaderLogo = styled.div``;
export const HeaderMenu = styled.div`
  width: 100%;
  max-width: 1024px;
  align-items: center;
  text-align: center;
  justify-content: center;
  display: flex;
  height: 72px;
  border-bottom: 2em;
  color: #666666;
  border-bottom: 1px solid #aaa;
`;
export const HeaderItem = styled.div`
  margin: 10px;
`;
export const HeaderLink = styled(Link)`
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  padding: 24px 24px;
  text-decoration: none;
  color: #000000;
  border-bottom: 3px solid transparent;
  &:hover {
    color: #eccc80;
    border-bottom: 3px solid black;
  }
`;
//MainSlider
export const MainSlider = styled.div`
  text-align: center;
`;
//Footer
export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px 0px 50px;
`;
export const FooterInfoContact = styled.div`
  width: 100%;
  display: flex;
  background: #e6e6e6;
`;
export const FooterAddressWrap = styled.div`
  width: 33%;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const FooterMST = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  line-height: 21px;
`;
export const FooterForm = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
`;
export const FooterText = styled.p`
  font-size: 18px;
  line-height: 32px;
  font-family: Montserrat;
  padding: 8px 0px;
`;
export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
`;
export const Label = styled.label`
  margin-bottom: 0.5em;
`;
export const Input = styled.input`
  width: 70%;
  border: none;
  margin-bottom: 0.5em;
  padding: 0.5em;
`;
export const Button = styled.button`
  width: 73%;
  height: 30px;
  padding: 2em;
  border: none;
`;
export const FooterSocial = styled.div``;

export const FooterAddressCompany = styled.div`
  text-align: center;
  font-size: 1.4rem;
`;
export const FooterCopyright = styled.div`
  width: 100%;
  text-align: center;
  background: #333;
  color: #aaa;
  /* padding: 1rem; */
  /* position: absolute;
  bottom: 0; */
`;
