import StarIcon from "@/assets/icons/star.svg";

const words = [
  "Web3",
  "Decentralised",
  "NFT",
  "Crypto",
  "DevOps",
  "NextJs",
  "ReactJs",
  "Token",
  "Solidity",
  "Smart Contract",
  "Blockchain",
  "Ethereum",
  "Solana",
];
export const TapeSection = () => {
  return (
    <div className='py-16 lg:py-24 overflow0-x-clip'>
      <div className='bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip -rotate-3 -mx-1'>
        <div className='flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
          <div className='flex flex-none gap-6 py-3'>
            {words.map((word, index) => (
              <div key={index} className='inline-flex gap-6 items-center'>
                <span className='text-gray-900 uppercase font-extrabold text-sm'>
                  {word}
                </span>
                <StarIcon className='size-6 text-gray-900 -rotate-12' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
