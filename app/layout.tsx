export const metadata = {
  title: "Tunç Pen PVC | Ankara Sineklik Cam Balkon Pimapen",
  description:
    "Ankara Mamak bölgesinde pimapen, sineklik ve cam balkon hizmetleri.",
};

export default function RootLayout ({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}