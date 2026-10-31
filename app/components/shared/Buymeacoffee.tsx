import { BiLogoGithub } from "react-icons/bi";

export default function Buymeacoffee() {
  return (
    <a
      href="https://github.com/ikkihou/ikkihou.github.io"
      className="flex items-center lg:flex-row flex-col lg:justify-around justify-center lg:text-start text-center gap-2 min-h-[110px] dark:bg-primary-bg bg-secondary-bg hover:dark:bg-[#2e290e44] rounded-lg border dark:border-zinc-800 border-zinc-200 hover:dark:border-[#e7ec2f60] hover:border-[#b8d14fe7] duration-300 p-6 group"
      target="_blank"
      rel="noreferrer noopener"
    >
      Do you feel like supporting my work? 🙂
      <span className="flex items-center gap-x-2 dark:bg-zinc-800 bg-white border dark:border-zinc-700 border-zinc-200 rounded-md px-4 py-2 font-semibold group-hover:scale-105 duration-300">
        <BiLogoGithub /> ⭐ Star this repo!
      </span>
    </a>
  );
}
