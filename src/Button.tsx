import React from "react";
import styled from "styled-components";

const Button = ({ color }: { color: string }) => (
  <button style={{ color }}>click</button>
);

// export default Button;
export default styled(Button)`
  color: blue;
`;
