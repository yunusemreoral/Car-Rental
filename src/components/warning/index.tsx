
import { FC, JSX, ReactNode } from "react"

type Props = {
    children: React.ReactNode;
}

const Warning: FC<Props> = ({ children }) => {
  return (
    <div className="padding-x max-width">
        <div className="home-error-container">{children} </div>
    </div>
  );
};

export default Warning
