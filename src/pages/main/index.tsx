import type { NextPage } from "next";
import styles from "../../../styles/main.module.scss";
import classNames from "classnames";

import web3 from "web3";

const cx = classNames.bind(styles);

export async function getStaticProps() {
  return {
    props: {
      staticString: "hi, there!",
    },
  };
}

type StaticProps = {
  staticString: string;
};

const Main: NextPage<StaticProps> = ({ staticString }) => {
  return (
    <div id={styles["main-page"]}>
      <div>
        <div className="title-25 primary-orange">Main page</div>
        <div className="subtitle-16 black">Page Introduction: this is ted&apos;s main page</div>
        <button type="button" id={styles["wallet-connect"]}>
          Connect Wallet
        </button>
      </div>
      <div>
        <div id="static-string" className={classNames("subtitle-16")}>
          Static Page text: &quot;{staticString}&quot;
        </div>
      </div>
    </div>
  );
};

export default Main;
