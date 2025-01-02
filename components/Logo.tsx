import Link from "next/link";
import Image from "next/image";
import logoImg from "@/public/logo.svg";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center justify-center gap-2">
      <Image width={21} height={35} src={logoImg} alt="TodoApp" />
      <span className="text-[40px] font-[900] text-primary">Todo</span>
      <span className="text-[40px] font-[900] text-secondary">App</span>
    </Link>
  );
};

export default Logo;
