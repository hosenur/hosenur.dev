import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center h-[75vh]">

      <SignUp />
    </div>
  )
}