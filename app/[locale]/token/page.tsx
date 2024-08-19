"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import "../../../styles/slider.css";
import {
  useAccount,
  useReadContract,
  useWriteContract,
} from "wagmi";
import { alexandriteAbi } from "../abi/abi";
import { ethers, formatUnits } from "ethers";
import { formatEther } from "ethers";
import CoinSwitcher from "../../../components/ToggleCoin/page";
import ControlButton from "../../../components/ControlButton/page";
import Badge from "@/components/Badge/Badge";
import FallbackWallet from "@/components/fallback/page";
import Alert from "@/components/Alert/Alert";
import WrongNetworkFallback from "@/components/WrongNetworkFallback/page";
import { sepolia } from "viem/chains";

const Token = () => {
  const [sliderValue, setSliderValue] = useState(1);
  const [nftInEthValue, setNftInEthValue] = useState("");
  const [nftInUsdValue, setNftInUsdValue] = useState("");
  const [isClient, setIsClient] = useState(false);

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const increment = () => {
    setSliderValue((sliderValue) =>
      sliderValue < 10 ? sliderValue + 1 : sliderValue
    );
  };

  const decrement = () => {
    if (sliderValue > 1) {
      setSliderValue((sliderValue) => sliderValue - 1);
    }
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  
  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };
  
  const { isConnected, address, chain } = useAccount();

  const {
    data: buyNftHashResponse,
    isPending: buyNftPending,
    isError: buyNftError,
    writeContract: buyNft,
  } = useWriteContract();

  const { data: nftPrice, isLoading: isLoadingNft } = useReadContract({
    abi: alexandriteAbi,
    address: process.env.NEXT_PUBLIC_ALEXANDRITE_ADDRESS as `0x${string}`,
    functionName: "calculateAlexandritePriceInETH",
  });

  const { data: ethPriceInUSD, isLoading: isPriceLoading } = useReadContract({
    abi: alexandriteAbi,
    address: process.env.NEXT_PUBLIC_ALEXANDRITE_ADDRESS as `0x${string}`,
    functionName: "getNftDollarPrice",
  });

  const priceUsd = nftPrice ? parseFloat(formatEther(ethPriceInUSD)) : 0;

  const totalUsdCost = priceUsd * parseFloat(sliderValue.toString());

  const etherPrice = nftPrice ? parseFloat(formatUnits(nftPrice, "ether")) : 0;
  const totalCost = etherPrice * parseFloat(sliderValue.toString());

  useEffect(() => {
    setNftInEthValue(totalCost.toString());
    setNftInUsdValue(totalUsdCost.toString());
  }, [sliderValue, totalCost, totalUsdCost]);

  async function handleBuyNft() {
    buyNft({
      abi: alexandriteAbi,
      address: process.env.NEXT_PUBLIC_ALEXANDRITE_ADDRESS as `0x${string}`,
      functionName: "safeMintEth",
      value: nftPrice,
      args: [address!],
      chain: chain,
      account: address,
    });
  }

  async function handleBuyNftBatch() {
    try {
      buyNft({
        abi: alexandriteAbi,
        address: process.env.NEXT_PUBLIC_ALEXANDRITE_ADDRESS as `0x${string}`,
        functionName: "safeMintBatchEth",
        value: nftPrice * BigInt(sliderValue),
        args: [address!, sliderValue],
        chain: chain,
        account: address,
      });
    } catch (error) {
      console.error("An error occurred while buying NFTs:", error);
    }
  }

  async function handleBuy() {
    if (Number(sliderValue) === 1) {
      await handleBuyNft();
    } else if (Number(sliderValue) > 1 && Number(sliderValue) <= 10) {
      await handleBuyNftBatch();
    } else {
      // Handle other cases if necessary
    }
  }

  if (!isConnected) {
    return (
      <>
        <FallbackWallet text="You need to connect your wallet to buy tokens." />
      </>
    );
  }

  if (chain?.id !== sepolia.id) {
		return (
			<>
				<WrongNetworkFallback />
			</>
		);
	}

  return (
    <section className="pb-[120px] pt-[130px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">        
          <>
            {isClient && isConnected ? (
            <>
              {!isLoadingNft ? (
                <>
                  <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-primary dark:bg-opacity-10 dark:border-primary flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center pb-10">
                      <Image
                        src="/images/logo/token.png"
                        alt="token"
                        className="object-center drop-shadow-three dark:block dark:drop-shadow-none"
                        width={160}
                        height={160}
                      />
                      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                        Alexandrite Token
                      </h5>
                      <p className="text-center">
                        <Badge
                          text={
                            !isPriceLoading && ethPriceInUSD
                              ? `1 ALEX: ${parseFloat(
                                  formatUnits(nftPrice, "ether")
                                )} ETH`
                              : "Loading..."
                          }
                        />
                        <span> </span>
                        <Badge
                          text={
                            !isPriceLoading && nftPrice
                              ? `1 ALEX: $ ${ethers.formatEther(
                                  ethPriceInUSD
                                )} USD`
                              : "Loading..."
                          }
                        />
                      </p>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {/* Visual Designer */}
                        <hr className="h-px my-2 bg-primary border-0 dark:primary" />
                        <h5 className="mt-2 mb-1 text-sm font-medium text-gray-900 dark:text-white text-center">
                          Price Calculator:
                        </h5>
                        <div className="mb-5 flex flex-col items-center justify-center">
                          <CoinSwitcher
                            isChecked={isChecked}
                            onCheckboxChange={handleCheckboxChange}
                            quantity={sliderValue}
                            price={isChecked ? nftInUsdValue : nftInEthValue}
                          />
                        </div>
                        <hr className="h-px my-2 bg-primary border-0 dark:primary" />
                        <ControlButton
                          value={sliderValue}
                          increment={increment}
                          decrement={decrement}
                          onChange={event => () => {
                            console.log("oi");
                            console.log("event",event.target.value)
                            setSliderValue(event.target.value)
                          }}
                        />
                        <div className="mt-5 flex flex-col justify-center items-center">
                          <input
                            type="submit"
                            value={buyNftPending ? "Buying..." : "Buy NFT"}
                            disabled={buyNftPending || !nftPrice}
                            onClick={() => handleBuy()}
                            className="w-auto shadow-submit dark:shadow-submit-dark mb-5 flex cursor-pointer items-center justify-center rounded-lg bg-primary px-4 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90"
                          />
                          {buyNftError && (
                            <div
                              className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-black dark:text-red-400"
                              role="alert"
                            >
                              <span className="font-medium">
                                Error buying NFT!
                              </span>
                            </div>
                          )}
                          {buyNftHashResponse && (
                            <div>
                              <Alert link={`${chain?.blockExplorers?.default.url}/tx/${buyNftHashResponse}`} />
                            </div>
                          )}
                        </div>
                      </span>
                    </div>
                  </div>
                </>
              ) : (
                <h3 className="font-bold text-center text-xl">Loading...</h3>
              )}
            </>
          ) : (
            <h3 className="font-bold text-center text-xl">Loading...</h3>
          )}
          </>        
        </div>
      </div>
    </section>
  );
};

export default Token;