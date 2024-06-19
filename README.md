# Build Your Reputation

This project is an attempt to create a trustworthy, verifiable, and long-lasting digital *reputation* for service providers.

Have you ever tried to find a service provider that you could *trust*? 

What if you could use a mobile app to build trust by verifying a service provider's reputation and the reputation of their clients? That does not sound very easy, but that is what this project is all about.

## Why?

**Users** can be sure the provider exists and is a real human or company.

**Users** can analyze service provider reputation and its client reputation.

**Providers** can build a reputation by making an **impact**, creating value, and being reviewed.

**Starknet** needs a generic **Attestation Service** (inspired by EAS).

**Entities** can **use** AS **data** to drive initiatives:
  - create tools
  - allocate funds (public/private)
  - measure the real impact on real users


## Main components 

- Starknet-Devnet-rs for running local networks
- Scarb to build/compile smart contracts
- StarknetJS as low-level interface that provides primitives to interact with Starknet. Declaring and deploying smart contracts.The alternative to starknet-rs.
- Starknet-React Collection of React hooks wrapper around starknet-react to simplify interactions with smart contracts with typescript autocompletion.
- NextJS for building a frontend, using many useful pre-made hooks.

By Scaffold-Stark 2: https://www.docs.scaffoldstark.com/

## quick start
1. clone this repo *including submodules*:
$ git clone https://github.com/carlosvaztec/reputation --recurse-submodules

2. check requirements session in 

3. Have a look in package.json scripts, and:
- in terminal 1 start local testnet (this requires dev-net to be built locally):
$ yarn chain
- in terminal 2 start application: 
$ yarn start


