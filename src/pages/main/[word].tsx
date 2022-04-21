import type { NextPage } from "next";
import styles from "../../../styles/main.module.css";
import classNames from "classnames";

import { useRouter } from "next/router";

import useSWR from "swr";
import { API_URL } from "../../constants";
import { useState, useEffect } from "react";

const cx = classNames.bind(styles);

import axios from "axios";

import web3 from "web3";

export async function getStaticProps() {
  return {
    props: {
      randomHex: web3.utils.randomHex(32),
    },
  };
}

const fetcher = async (...args: string[]) => {
  const res = await axios.get(args[0]);
  const longString = (await res.data) as string;

  return { longString };
};

type StaticProps = {
  randomHex: string;
};

const MainWord: NextPage<StaticProps> = ({ randomHex }) => {
  const router = useRouter();
  const { word } = router.query;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { data, error } = useSWR(word && !mounted ? `${API_URL}/api/main?word=${word}` : null, fetcher);

  if (error) return <div>Failed to load</div>;

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
        <div className={classNames("subtitle-16")}>URL argument: &quot;{word}&quot;</div>
        <div className={classNames("subtitle-16")}>URL argument - backend response: &quot;{data?.longString}&quot;</div>
        <div className={classNames("subtitle-16")}>Web3 Random Hex: {randomHex}</div>
      </div>
    </div>
  );
};

export default MainWord;
