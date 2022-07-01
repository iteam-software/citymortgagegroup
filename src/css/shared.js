import styled from "@emotion/styled";


export const activeLinkStyle = {
  fontWeight: "700",
};
export const Title = styled.h1`
  font-size: 64px;
  line-height: 78px;
  font-weight: 700;
  white-space: ${(props) => (props.nowrap ? "nowrap" : "")};
  @media (max-width: 768px) {
    font-size: 40px;
    line-height: 60px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 27px;
  line-height: 27px;
  font-family: "Montserrat" m sans-serif;
  font-size: 27px;
  line-height: 140%;
  display: inline-block;
  ${(props) =>
    props.teal
      ? `background-color:  #4DCCBD;
  border-radius: 8px;
  padding: 8px;`
      : ""};
`;
export const Lead = styled.div`
  /* Lead */
  font-family: Montserrat;
  font-size: 27px;
  line-height: 140%;
  @media (max-width: 768px) {
    font-family: Montserrat;
    font-size: 22px;
  }
`;
export const Body = styled.section`
  /* Body */

  font-family: Source Sans Pro;
  font-size: 20px;
  line-height: 175%;
  /* or 35px */

  /* text-body-dark */

  color: rgba(0, 0, 0, 0.94);
`;
export const GradientSection = styled.section`
  /* gradient-accent-light */
  background: linear-gradient(180deg, #ffffff 0%, #fcf6f2 100%);
  /* shadow-raised-high */
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.12);
`;

export const Spacer = styled.div`
  height: ${(props) => props.height}px;
`;
export const QA = styled.section`
  background: ${(props) =>
    props.question ? "#00897B" : "rgba(255, 255, 255, 0.94)"};
  color: ${(props) =>
    props.question ? "rgba(255, 255, 255, 0.94)" : "rgba(0, 0, 0, 0.87)"};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  h1 {
    font-weight: 700;
    padding: 20px 40px;
    font-size: 48px;
    @media (max-width: 768px) {
      font-size: 32px;
    }
  }
  p {
    font-family: "Montserrat", sans-serif;
    font-size: 32px;
    line-height: 140%;
    padding: 20px 40px;
    @media (max-width: 768px) {
      font-size: 24px;
    }
    ul {
      margin: 30px;
      list-style-type: circle;
      line-height: 60px;
    }
  }
`;
