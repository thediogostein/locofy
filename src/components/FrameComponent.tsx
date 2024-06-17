import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
  label?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  label,
  propMinWidth,
}) => {
  const labelStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={[styles.labelParent, className].join(" ")}>
      <div className={styles.label} style={labelStyle}>
        {label}
      </div>
      <div className={styles.icon}>
        <img
          className={styles.calendartodayfilledIcon}
          alt=""
          src="/calendartodayfilled.svg"
        />
      </div>
    </div>
  );
};

export default FrameComponent;
