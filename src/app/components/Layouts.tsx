"use client";

import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <div>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </div>
  );
}
