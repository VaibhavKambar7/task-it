import { prisma } from "@/db";
import { log } from "console";
import { redirect } from "next/navigation";
import Link from "next/link";

async function createTodo(data: FormData) {
  "use server";

  const title = data.get("title")?.valueOf();

  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid Error");
  }

  await prisma.todo.create({ data: { title, complete: false } });

  redirect("/");
}

const New = () => {
  return (
    <>
      <header className="mb-4 mt-20 flex flex-col items-center justify-between"></header>
      <form action={createTodo} className="flex flex-col items-center">
        <label htmlFor="title" className="mb-4 text-2xl">
          Task Title:
        </label>
        <div className="relative">
          <input
            type="text"
            name="title"
            id="title"
            placeholder="eg. Wash Dishes"
            className="rounded border border-slate-300 bg-transparent px-7 py-3 pl-5 pr-40 text-base outline-none focus-within:bg-slate-900"
          />
        </div>
        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            className="w-15 mr-2 flex border-spacing-2 flex-col items-center rounded border border-solid border-green-500 bg-green-500 px-4 py-2 text-sm text-white hover:bg-green-600 focus:bg-green-600"
          >
            Submit
          </button>
          <Link
            className="w-15 flex border-spacing-2 flex-col items-center rounded border border-solid border-gray-300 px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 focus:bg-gray-700"
            href="/"
          >
            Cancel
          </Link>
        </div>
      </form>
    </>
  );
};

export default New;
