"use client";

import RegisterForm from "@/components/AuthForms/RegisterForm";
import css from "./RegisterPage.module.css";
import Image from "next/image";

export default function SignIn() {
  return (
    <>
      <div className={css.bgCorner} />
      <div className={css.logo}>
        <svg className={css.logoIcon}>
          <use href="/symbol-defs.svg#icon-Craftwork"></use>
        </svg>
        <p className={css.logoText}>VocabBuilder</p>
      </div>
      <main className={css.mainContent}>
        <div className="">
          <picture>
            <source
              media="(min-width: 1280px)"
              srcSet="/two-children-desk1x.png 1x, /two-children-desk2x.png 2x"
            />
            <Image
              src="/two-children-desk2x.png"
              alt="two children"
              width={247}
              height={191}
              className={css.responsiveImg}
            />
          </picture>
          <p className={css.categoryText}>
            Word · Translation · Grammar · Progress
          </p>
        </div>

        <RegisterForm />
      </main>
    </>
  );
}
