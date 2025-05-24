import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center">

      <div className="max-w-[650px] flex justify-center flex-col items-center px-1.5">

        <h1 className="text-[50px] font-bold pb-1.5">iChat</h1>
        <p className="text-center text-[20px] pb-1.5">iChat is a chat app which allow you to chat in iChat group and it is one of my project it is created using MongoDB, Next.js and Tailwindcss. If you want to see the code you can also check this GitHub Repository. Thanks for wisitng this site.</p>
        <Link href={"/Chat"}><button className="cursor-pointer text-3xl bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full">Start Chat</button></Link>
      </div>

    </div>
  );
}
