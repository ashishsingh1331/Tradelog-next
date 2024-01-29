export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header> Dashboard Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
}
