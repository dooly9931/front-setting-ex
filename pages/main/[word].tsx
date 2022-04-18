import type { NextPage } from "next";
import styles from "../../styles/main.module.css";
import classNames from "classnames";

import { useRouter } from "next/router";

import useSWR from "swr";
import { useEffect } from "react";

const cx = classNames.bind(styles);

const axios = require("axios");

const web3 = require("web3");

// type Context = {
//   params: {
//     word: string;
//   };
// };

// export async function func(word: string) {
//   const res = await axios.get(`http://localhost:8000/api/${word}/`);
//   const data = (await res.data) as string;

//   return data;
// }

// type Props = {
//   data: string;
// };

const fetcher = async (...args: string[]) => {
  const res = await axios.get(...args);
  const longString = (await res.data) as string;

  const randomHex = web3.utils.randomHex(32);

  return { longString, randomHex };
};

const MainWord: NextPage = () => {
  const router = useRouter();
  const { word } = router.query;

  useEffect(() => {
    console.log(`word: ${word}`);
  }, [word]);

  // console.log(word);
  const { data, error } = useSWR(
    word ? `http://localhost:8000/api/${word}/` : null,
    fetcher
  );

  if (error) return <div>Failed to load</div>;

  return (
    <div id={styles["main-page"]}>
      <div>
        <div className="title-25 primary-orange">Main page</div>
        <div className="subtitle-16 black">
          Page Introduction: this is ted's main page
        </div>
        <button type="button" id={styles["wallet-connect"]}>
          Connect Wallet
        </button>
      </div>
      <div>
        <div className={classNames("subtitle-16")}>Web3 random number: </div>
        <div className={classNames("subtitle-16")}>URL argument: "{word}"</div>
        <div className={classNames("subtitle-16")}>
          URL argument - backend response: "{data?.longString}"
        </div>
        <div className={classNames("subtitle-16")}>
          Web3 Random Hex: {data?.randomHex}
        </div>
      </div>
    </div>
  );
};

export default MainWord;
