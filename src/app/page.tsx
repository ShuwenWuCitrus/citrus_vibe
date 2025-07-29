import { caller } from "@/trpc/server";

const Page = async () => {
  const { greeting } = await caller.hello({ text: "Citrus Server" });
  return <div>{greeting}</div>;
};

export default Page;
