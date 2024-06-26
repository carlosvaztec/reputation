"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-stark";
import { useAccount } from "@starknet-react/core";
import { Address as AddressType } from "@starknet-react/chains";

const Home: NextPage = () => {
  const connectedAddress = useAccount();
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Build your Reputation</span>
          </h1>
          <div className="flex justify-center items-center space-x-2">
            <p className="my-2 font-medium">Connected Address:</p>
            <Address address={connectedAddress.address as AddressType} />
          </div>
          <p className="text-center text-lg">
            
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
            Lets rock guys !!!  edit packages/nextjs/app/page.tsx
            </code>
          </p>
        </div>

        {/* <div
          onClick={() => {
            writeAsync();
          }}
        >
          TEST TX
        </div> */}
      </div>
    </>
  );
};

export default Home;
