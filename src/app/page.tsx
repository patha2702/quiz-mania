import LoginForm from "@/components/LoginForm";
import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={"/me"} className="px-4 py-2 rounded-md bg-blue-500">
        Continue to Quiz Dashboard
      </Link>
    </main>
  );
}
