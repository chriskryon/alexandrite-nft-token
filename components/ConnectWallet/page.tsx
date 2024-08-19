import React, { Fragment, useState, useEffect } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import { useBalance, useAccount, useDisconnect, useConnect } from 'wagmi';
import { ethers } from 'ethers';
import { IoMdExit } from 'react-icons/io';
import { LuWallet } from 'react-icons/lu';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function formatAddress(address) {
  if (!address) return '0x00';
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

function formatBalance(balance) {
  if (balance === 0n) return '0.00';
  const mainBalance = ethers.formatUnits(balance, 18).split('.')[0];
  const decimalBalance = ethers.formatUnits(balance, 18).split('.')[1];
  const balanceString = `${mainBalance}.${decimalBalance.slice(0, 2)}`;
  return balanceString;
}

const ConnectWallet = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [copied, setCopied] = useState(false);
  const account = useAccount();
  const balance = useBalance({ address: account.address });
  const { disconnect } = useDisconnect();
  const { connect, connectors, isPending } = useConnect();
  const [balanceIsLoaded, setBalanceIsLoaded] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (balance.data) {
      setBalanceIsLoaded(true);
    }
  }, [balance.data]);

  function handleConnectWallet() {
    connect({ connector: connectors[0] });
  }

  function handleDisconnectWallet() {
    disconnect();
  }

  function handleCopy() {
    navigator.clipboard.writeText(account.address!);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500); // Esconde a mensagem "copied" após 1.5 segundos
  }

  if (!isMounted) {
    return null; // Não renderiza nada no servidor
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        {!account.isConnected ? (
          <MenuButton
          className="inline-flex items-center justify-center w-full gap-x-1.5 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300"
            disabled={isPending}
            onClick={handleConnectWallet}
          >
            {isPending ? 'Connecting...' : <>
              <LuWallet /> <span className="whitespace-nowrap">Connect Wallet</span>
            </>}
          </MenuButton>
        ) : (
          <MenuButton
            className={`inline-flex w-full justify-center gap-x-1.5 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 ${balanceIsLoaded ? 'pt-3 pb-3' : ''}`}
          >
            <LuWallet />
            <div className="flex items-center whitespace-nowrap">
              {formatBalance(balance.data?.value ?? 0n)} {balance.data?.symbol ?? ''}
            </div>
          </MenuButton>
        )}
      </div>

      {account.isConnected && (
        <Transition
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <MenuItems className="border border-primary absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <MenuItem>
                {({ focus }) => (
                  <button
                    onClick={handleCopy}
                    className={classNames(
                      focus ? 'bg-gray-100 text-primary' : 'text-primary',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    {formatAddress(account.address)}
                  </button>
                )}
              </MenuItem>
              <MenuItem>
                {({ focus }) => (
                  <button
                    className={classNames(
                      focus ? 'bg-gray-100 text-primary' : 'text-primary',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    {formatBalance(balance.data?.value ?? 0n)} {balance.data?.symbol ?? ''}
                  </button>
                )}
              </MenuItem>
              <MenuItem>
                {({ focus }) => (
                  <a
                    href={account.chain?.blockExplorers?.default.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classNames(
                      focus ? 'bg-gray-100 text-primary' : 'text-primary',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    {account.chain?.name}
                  </a>
                )}
              </MenuItem>
              <MenuItem>
                {({ focus }) => (
                  <button
                    onClick={handleDisconnectWallet}
                    className={classNames(
                      focus ? 'bg-gray-100 text-primary' : 'text-primary',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    <IoMdExit />
                    Disconnect Wallet
                  </button>
                )}
              </MenuItem>
            </div>
          </MenuItems>
        </Transition>
      )}
    </Menu>
  );
}

export default ConnectWallet;