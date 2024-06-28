import Button from "@/components/common/Button";
import Icon from "@/components/ui/icons";
import { LeftArrow } from "@/components/ui/icons/RightArrow";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-jost text-jost-xl font-bold text-accent-400">
        Welcome to Hooghly Heritage Library
      </h1>
      <div>
        <Button label="Get Started" />
      </div>
    </main>
  );
}
