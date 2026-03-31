import { ToastContainer } from "react-toastify";

import { MacPaw } from "./fonts";

import "./globals.css";
// import Header from "@/components/Header/Header";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import Container from "@/components/Container/Container";
// import AuthProvider from "@/components/AuthProvider/AuthProvider";

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" className={MacPaw.variable}>
      <body>
        <TanStackProvider>
          <Container>
            {children}
            {modal}
            <div id="modal-root"></div>

            <ToastContainer />
          </Container>
        </TanStackProvider>
      </body>
    </html>
  );
}
