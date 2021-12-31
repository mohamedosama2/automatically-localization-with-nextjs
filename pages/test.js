import React from "react";
import { useRouter } from "next/router";
import AutoLocalization from "../Components/AutoLocalization";
function test() {
  const router = useRouter();
  const { locale, locales = [], defaultLocale, route, asPath } = router;
  //   console.log(route);
  //   console.log(asPath);
  return (
    <div className="mx-8">
      <h2>{locale}</h2>
      {/* <div>
        {locales.map((local) => (
          <h3 key={local}>{local}</h3>
        ))}
      </div>
      <h2>{defaultLocale}</h2> */}
      <div>
        Content of page
        <AutoLocalization index={locale === "ar" ? 1 : locale === "fr" ? 2 : 0}>
          <h1>English is here</h1>
          <h1> هلا والله </h1>
          <h1> Cava bien </h1>
        </AutoLocalization>
      </div>
      <button className="px-2 py-1 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-700">
        Save changes
      </button>
      <div className={`flex my-3 `}>
        <div className="bg-green-300 rounded-full p-3 text-white hover:bg-green-400">
          1
        </div>
        <div className="bg-green-300 rounded-full p-3 mx-3 text-white hover:bg-green-400">
          2
        </div>
        <div className="bg-green-300 rounded-full p-3 text-white hover:bg-green-400">
          3
        </div>
      </div>
    </div>
  );
}

export default test;
