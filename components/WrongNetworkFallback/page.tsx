import { Button } from "@nextui-org/button";
import { useState } from "react";
import { sepolia } from "viem/chains";
import { useSwitchChain } from "wagmi";

export default function WrongNetworkFallback() {
  const [isLoading, setIsLoading] = useState(false);
  const { switchChain } = useSwitchChain();

  const handleSwitchChain = async () => {
    setIsLoading(true);

    switchChain({
      chainId: sepolia.id,
    });

    setIsLoading(false);
  };

  return (
    <>
      <section className="relative z-10 pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[530px] text-center">
                <div className="mx-auto text-center mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-4xl">
                    You are connected to the wrong network!
                  </h3>
                </div>
                <Button
                  color="primary"
                  onClick={handleSwitchChain}
                  disabled={isLoading}
                >
                  {isLoading ? "Switching..." : `Switch to ${sepolia.name}`}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}