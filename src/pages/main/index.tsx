import type { NextPage } from "next";
import styles from "../../../styles/main.module.css";
import classNames from "classnames";

import web3 from "web3";

const cx = classNames.bind(styles);

export async function getStaticProps() {
  return {
    props: {
      randomHex: web3.utils.randomHex(32),
    },
  };
}

type StaticProps = {
  randomHex: string;
};

const Main: NextPage<StaticProps> = ({ randomHex }) => {
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
        <div className={classNames("subtitle-16")}>Web3 random number: </div>
        <div className={classNames("subtitle-16")}>URL argument: &quot;&quot;</div>
        <div className={classNames("subtitle-16")}>URL argument - backend response: &quot;&quot;</div>
        <div className={classNames("subtitle-16")}>Web3 Random Hex: {randomHex}</div>
      </div>
    </div>
  );
};

export default Main;
