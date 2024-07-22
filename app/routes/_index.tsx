import type { MetaFunction } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";
import PageTemplate from "~/src/components/PageTemplate";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <PageTemplate>
      <Outlet />
    </PageTemplate>
  );
}
