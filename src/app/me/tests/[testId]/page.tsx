"use client"
import React from "react";
import { useRouter } from "next/navigation";
import { useSidebar } from "@/context/SidebarProvider";


const TestDetails = () => {
  const {toggleSidebar} = useSidebar()
  const router = useRouter()
  return (
    <section className="p-4">
      <section className="my-2 flex flex-col gap-4">
        <h1 className="text-3xl font-semibold text-black">Aptitude Test</h1>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
          molestias ea accusantium odio quia dicta exercitationem, at dolore
          sit, doloremque distinctio harum nostrum provident soluta porro rem
          minus accusamus magnam aspernatur. Accusamus ipsum sunt aliquam
          assumenda sit odio porro nihil quae animi delectus consequatur nam
          fuga recusandae magnam, at, dolorum temporibus nostrum vero? Earum
          inventore velit ab dolorum voluptate rem. Ullam rem temporibus,
          repudiandae magnam at ipsa, incidunt eaque error consequuntur tenetur
          distinctio consequatur vero eum velit nihil qui fugit eius soluta
          delectus, illum cumque vel dolorem. Voluptate, deleniti quaerat
          praesentium quo ipsa est magni ad. Inventore asperiores tempora sit?
        </p>
      </section>
        <button className="bg-slate-700 text-white px-8 py-4 rounded-md hover:bg-slate-800 transition-colors duration-300 text-sm" onClick={()=> {
          console.log('Clicked')
          toggleSidebar()
          router.push("/me/tests/1234/attempt-test")
        }}>
          Start the test
        </button>
    </section>
  );
};

export default TestDetails;
