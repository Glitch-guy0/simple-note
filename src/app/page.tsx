import Header from "@/components/Header";
import Prompt from "@/components/Prompt";
import Contain from "@/components/ui/Contain";
import Separator from "@/components/ui/Separator";

export default function rootPage() {
  return (
    <div className="w-full h-full bg-zinc-900 text-white px-4 py-2">
      <Contain>
        <Header />
        <Prompt />
        <Separator />
      </Contain>


    </div>
  );
}
