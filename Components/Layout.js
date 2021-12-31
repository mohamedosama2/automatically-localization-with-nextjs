import { useRouter } from "next/router";
import React from "react";

function Layout({ children }) {
  const { locale } = useRouter();
  return (
    <>
      <>
        <style global jsx>{`
          * {
            direction: ${locale === "ar" ? `rtl` : `ltr`};
          }
        `}</style>
        {children}
      </>
    </>
  );
}

export default Layout;
